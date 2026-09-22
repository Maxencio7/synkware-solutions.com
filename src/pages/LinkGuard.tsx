import React, { useState, useCallback } from "react";

/**
 * LinkGuard — phishing / scam message & link checker
 * Synkware Solutions Limited
 *
 * Drop-in usage:
 *   import LinkGuard from "./LinkGuard";
 *   <LinkGuard />
 *
 * This component is fully self-contained: styles are injected via a single
 * <style> tag scoped under .linkguard-root, so it won't collide with the
 * rest of your site's CSS. No external requests are made by the scan logic
 * itself — everything runs client-side in the browser.
 *
 * Optional: for the exact brand fonts, add this to your document <head>
 * (e.g. index.html or your Next.js _document):
 *   <link rel="preconnect" href="https://fonts.googleapis.com" />
 *   <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
 *   <link
 *     href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
 *     rel="stylesheet"
 *   />
 * If you skip this, the component falls back to system fonts automatically.
 */

type Severity = "danger" | "warn";

interface Flag {
  sev: Severity;
  title: string;
  detail: string;
}

interface ScanResult {
  score: number;
  flags: Flag[];
}

const SHORTENERS = [
  "bit.ly", "tinyurl.com", "t.co", "is.gd", "cutt.ly",
  "shorte.st", "rebrand.ly", "buff.ly", "rb.gy", "shorturl.at", "tiny.cc",
];

const BAD_TLDS = [
  ".tk", ".ml", ".ga", ".cf", ".gq", ".xyz", ".top",
  ".work", ".click", ".link", ".zip", ".rest", ".buzz",
];

const BRAND_DOMAINS: Record<string, string> = {
  airtel: "airtel.co.zm",
  mtn: "mtnzambia.co.zm",
  zamtel: "zamtel.co.zm",
  zanaco: "zanaco.co.zm",
  absa: "absabank.co.zm",
  stanbic: "stanbicbank.co.zm",
  fnb: "fnbzambia.co.zm",
  bankofzambia: "boz.zm",
  boz: "boz.zm",
  whatsapp: "whatsapp.com",
  facebook: "facebook.com",
  paypal: "paypal.com",
  ecobank: "ecobank.com",
};

const URGENCY = [
  "act now", "immediately", "within 24", "within 48", "urgent",
  "suspend", "suspended", "expire", "expires", "locked",
  "limited time", "last warning", "final notice", "failure to",
  "verify now", "verify your account", "confirm your account",
];

// Regex patterns that catch a message *asking for* a code, not merely
// mentioning one — e.g. a real bank text ("Your OTP is 4821, don't share
// it") should NOT trigger this, only something like "share your OTP".
const CRED_REQUEST_PATTERNS = [
  /\b(send|share|provide|reply with|give|read out|tell us)\s+(?:us\s+|me\s+)?(?:your\s+)?(otp|pin|password|cvv)\b/i,
  /\bverify your nrc\b/i,
  /\bnrc number\b/i,
  /\bconfirm your account (?:and|&) (?:nrc|pin|password)\b/i,
];

const PRIZE = [
  "you have won", "congratulations", "claim your prize", "lucky winner",
  "selected winner", "lottery", "free gift", "cash prize",
];

const MONEY = [
  "send money to", "mobile money agent", "till number", "agent code",
  "pay a fee to release", "processing fee", "clearance fee", "western union",
];

const SAMPLES: Record<string, string> = {
  prize:
    "CONGRATULATIONS! You have been selected as a lucky winner of K25,000 in the MTN Zambia promo. Claim your prize now at mtn-zm-promo.xyz/claim within 24hrs or forfeit.",
  mobilemoney:
    "Dear customer, your Airtel Money account has been suspended due to unusual activity. Verify immediately at airtel-money-verify.top/login to avoid permanent closure.",
  bank:
    "ZANACO ALERT: Your online banking access will be locked today. Please share your PIN and NRC number at http://192.168.44.12/zanaco-secure to restore access.",
};

function extractUrls(text: string): string[] {
  const regex =
    /((?:https?:\/\/)?(?:www\.)?[a-zA-Z0-9][a-zA-Z0-9-]{0,61}(?:\.[a-zA-Z0-9-]{1,62}){1,}(?:\/[^\s]*)?)/g;
  const matches = text.match(regex) || [];
  return Array.from(new Set(matches));
}

function toUrlObj(raw: string): URL | null {
  let str = raw.trim().replace(/[),.]+$/, "");
  if (!/^https?:\/\//i.test(str)) str = "http://" + str;
  try {
    return new URL(str);
  } catch {
    return null;
  }
}

function isIp(host: string): boolean {
  return /^\d{1,3}(\.\d{1,3}){3}$/.test(host);
}

function scanPhrase(
  lower: string,
  list: string[],
  sev: Severity,
  title: string,
  flags: Flag[]
) {
  const hit = list.find((p) => lower.includes(p));
  if (hit) {
    flags.push({
      sev,
      title,
      detail: `Found the phrase "${hit}", a common pressure tactic in scam messages.`,
    });
  }
}

function scanCredentialRequest(lower: string, flags: Flag[]) {
  for (const pattern of CRED_REQUEST_PATTERNS) {
    const match = lower.match(pattern);
    if (match) {
      flags.push({
        sev: "danger",
        title: "Asks you to send a PIN, OTP, or password",
        detail: `Found "${match[0]}" — legitimate banks and telcos never ask you to send, share, or read out a one-time code or PIN.`,
      });
      return;
    }
  }
}

function analyze(text: string): ScanResult {
  const flags: Flag[] = [];
  const lower = text.toLowerCase();
  const urls = extractUrls(text);

  urls.forEach((raw) => {
    const u = toUrlObj(raw);
    if (!u) return;
    const host = u.hostname.toLowerCase();

    if (isIp(host)) {
      flags.push({
        sev: "danger",
        title: "Link uses a raw IP address",
        detail: `"${raw}" points to a number instead of a real website name — genuine banks and telcos never do this.`,
      });
    }

    if (SHORTENERS.some((s) => host === s || host.endsWith("." + s))) {
      flags.push({
        sev: "warn",
        title: "Shortened link",
        detail: `"${raw}" hides where it actually leads. Shorteners are commonly used to disguise scam pages.`,
      });
    }

    if (BAD_TLDS.some((t) => host.endsWith(t))) {
      flags.push({
        sev: "warn",
        title: "Unusual domain ending",
        detail: `The address ends in "${host.slice(
          host.lastIndexOf(".")
        )}", a domain type rarely used by legitimate Zambian banks or telcos, and cheap for scammers to register.`,
      });
    }

    const hostNoDots = host.replace(/\./g, "");
    Object.keys(BRAND_DOMAINS).forEach((brand) => {
      if (hostNoDots.includes(brand)) {
        const official = BRAND_DOMAINS[brand];
        if (host !== official && !host.endsWith("." + official)) {
          flags.push({
            sev: "danger",
            title: `Looks like a fake "${brand}" page`,
            detail: `"${host}" mentions ${brand} but isn't their real site (${official}). This is a classic lookalike-domain trick.`,
          });
        }
      }
    });

    const hyphenCount = (host.match(/-/g) || []).length;
    if (hyphenCount >= 2) {
      flags.push({
        sev: "warn",
        title: "Overly complex domain name",
        detail: `"${host}" is stitched together with ${hyphenCount} hyphens — a pattern often used to mimic trusted names.`,
      });
    }

    const labelCount = host.split(".").length;
    if (labelCount >= 5) {
      flags.push({
        sev: "warn",
        title: "Deeply nested subdomain",
        detail: `"${host}" has an unusually long chain of subdomains, sometimes used to bury the real destination.`,
      });
    }

    if (u.protocol !== "https:") {
      flags.push({
        sev: "warn",
        title: "No secure connection (no HTTPS)",
        detail: `"${raw}" doesn't use a secure connection, which is expected for anywhere you'd enter personal or account details.`,
      });
    }
  });

  scanCredentialRequest(lower, flags);
  scanPhrase(lower, MONEY, "danger", "Asks you to send money or pay a fee", flags);
  scanPhrase(lower, PRIZE, "warn", "Unexpected prize or winnings claim", flags);
  scanPhrase(lower, URGENCY, "warn", "Creates false urgency", flags);

  const seen = new Set<string>();
  const deduped = flags.filter((f) => {
    if (seen.has(f.title)) return false;
    seen.add(f.title);
    return true;
  });

  let score = 0;
  deduped.forEach((f) => {
    score += f.sev === "danger" ? 28 : 14;
  });
  score = Math.min(100, score);

  return { score, flags: deduped };
}

function verdictFor(score: number): {
  label: string;
  color: string;
  note: string;
} {
  if (score >= 60) {
    return {
      label: "High risk",
      color: "var(--lg-red)",
      note: "This has strong markers of a scam. Don't click, reply, or share any codes — delete or report it.",
    };
  }
  if (score >= 25) {
    return {
      label: "Suspicious",
      color: "var(--lg-amber)",
      note: "Some warning signs here. Verify through an official app or a number you already trust before doing anything.",
    };
  }
  return {
    label: "Likely safe",
    color: "var(--lg-cyan)",
    note: "No strong scam markers detected. Still, only enter details on sites and apps you opened yourself.",
  };
}

const STYLES = `
.linkguard-root {
  --lg-navy: #0B1220;
  --lg-panel: #16223A;
  --lg-line: #24334F;
  --lg-cyan: #2DD9F0;
  --lg-red: #E6444F;
  --lg-amber: #F0B429;
  --lg-ink: #E8ECF1;
  --lg-ink-dim: #90A0B7;
  --lg-mono: 'JetBrains Mono', ui-monospace, monospace;
  --lg-sans: 'Inter', system-ui, sans-serif;
  --lg-display: 'Space Grotesk', system-ui, sans-serif;
  --lg-bg: var(--lg-navy);
  --lg-panel-bg: var(--lg-panel);
  --lg-border: var(--lg-line);
  --lg-text: var(--lg-ink);
  --lg-text-dim: var(--lg-ink-dim);
  background: var(--lg-bg);
  color: var(--lg-text);
  font-family: var(--lg-sans);
  line-height: 1.5;
  border-radius: 16px;
  padding: 1px;
}
@media (prefers-color-scheme: light) {
  .linkguard-root:not([data-theme="dark"]) {
    --lg-bg: #F3F6FA;
    --lg-panel-bg: #FFFFFF;
    --lg-border: #D9E1EC;
    --lg-text: #101A2C;
    --lg-text-dim: #55647C;
  }
}
.linkguard-root[data-theme="dark"] {
  --lg-bg: var(--lg-navy);
  --lg-panel-bg: var(--lg-panel);
  --lg-border: var(--lg-line);
  --lg-text: var(--lg-ink);
  --lg-text-dim: var(--lg-ink-dim);
}
.linkguard-wrap { max-width: 640px; margin: 0 auto; padding: 40px 20px 56px; box-sizing: border-box; }
.linkguard-wrap * { box-sizing: border-box; }
.lg-mark {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: var(--lg-mono); font-size: 12px; letter-spacing: 0.02em;
  color: var(--lg-cyan); background: rgba(45,217,240,0.08);
  border: 1px solid rgba(45,217,240,0.25); padding: 5px 10px;
  border-radius: 100px; margin-bottom: 18px;
}
.lg-mark::before {
  content: ''; width: 6px; height: 6px; border-radius: 50%;
  background: var(--lg-cyan); box-shadow: 0 0 0 3px rgba(45,217,240,0.18);
}
.lg-h1 {
  font-family: var(--lg-display); font-weight: 600;
  font-size: clamp(26px, 5.5vw, 36px); line-height: 1.12;
  margin: 0 0 12px; letter-spacing: -0.01em;
}
.lg-h1 span { color: var(--lg-cyan); }
.lg-lede { color: var(--lg-text-dim); font-size: 15.5px; max-width: 46ch; margin: 0; }
.lg-panel { background: var(--lg-panel-bg); border: 1px solid var(--lg-border); border-radius: 14px; padding: 20px; margin-top: 28px; }
.lg-field-label { display: block; font-size: 13px; color: var(--lg-text-dim); margin-bottom: 8px; }
.lg-textarea {
  width: 100%; min-height: 108px; resize: vertical;
  background: var(--lg-bg); border: 1px solid var(--lg-border); border-radius: 10px;
  color: var(--lg-text); font-family: var(--lg-mono); font-size: 13.5px;
  padding: 12px 14px; outline: none; transition: border-color 0.15s ease;
}
.lg-textarea:focus { border-color: var(--lg-cyan); }
.lg-actions { display: flex; gap: 10px; margin-top: 14px; flex-wrap: wrap; }
.lg-btn { font-family: var(--lg-sans); font-weight: 600; font-size: 14.5px; border-radius: 10px; padding: 11px 18px; border: none; cursor: pointer; transition: transform 0.1s ease, opacity 0.15s ease; }
.lg-btn:active { transform: scale(0.98); }
.lg-btn:focus-visible { outline: 2px solid var(--lg-cyan); outline-offset: 2px; }
.lg-btn-primary { background: var(--lg-cyan); color: #06222B; }
.lg-btn-primary:hover { opacity: 0.9; }
.lg-btn-primary:disabled { opacity: 0.45; cursor: not-allowed; }
.lg-btn-ghost { background: transparent; color: var(--lg-text-dim); border: 1px solid var(--lg-border); }
.lg-btn-ghost:hover { color: var(--lg-text); border-color: var(--lg-text-dim); }
.lg-sample-row { margin-top: 12px; font-size: 12.5px; color: var(--lg-text-dim); }
.lg-sample-btn {
  font-family: var(--lg-mono); font-size: 12px; font-weight: 400;
  background: transparent; border: 1px dashed var(--lg-border); color: var(--lg-text-dim);
  padding: 5px 9px; margin: 4px 6px 0 0; border-radius: 7px; cursor: pointer;
}
.lg-sample-btn:hover { color: var(--lg-cyan); border-color: var(--lg-cyan); }
.lg-verdict { border-radius: 14px; padding: 22px; margin-top: 22px; border: 1px solid var(--lg-border); background: var(--lg-panel-bg); }
.lg-verdict-top { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-bottom: 6px; }
.lg-verdict-label { font-family: var(--lg-display); font-weight: 600; font-size: 21px; }
.lg-verdict-score { font-family: var(--lg-mono); font-size: 13px; color: var(--lg-text-dim); }
.lg-meter { height: 8px; border-radius: 100px; background: var(--lg-bg); border: 1px solid var(--lg-border); overflow: hidden; margin: 14px 0 4px; }
.lg-meter-fill { height: 100%; border-radius: 100px; transition: width 0.5s ease; }
.lg-verdict-note { color: var(--lg-text-dim); font-size: 14px; margin-top: 10px; }
.lg-flags { margin-top: 20px; display: flex; flex-direction: column; gap: 10px; }
.lg-flag { display: flex; gap: 10px; padding: 12px 14px; background: var(--lg-bg); border: 1px solid var(--lg-border); border-radius: 10px; }
.lg-flag-dot { flex: none; width: 8px; height: 8px; border-radius: 50%; margin-top: 6px; }
.lg-flag-body strong { display: block; font-size: 13.5px; margin-bottom: 2px; }
.lg-flag-body span { font-size: 13px; color: var(--lg-text-dim); }
.lg-clean-msg { display: flex; gap: 10px; padding: 14px; background: var(--lg-bg); border: 1px solid var(--lg-border); border-radius: 10px; margin-top: 20px; font-size: 13.5px; color: var(--lg-text-dim); }
.lg-tips { margin-top: 28px; }
.lg-tips h2 { font-family: var(--lg-display); font-weight: 600; font-size: 17px; margin: 0 0 12px; }
.lg-tips ul { margin: 0; padding-left: 0; list-style: none; display: flex; flex-direction: column; gap: 10px; }
.lg-tips li { display: flex; gap: 10px; font-size: 14px; color: var(--lg-text-dim); }
.lg-tips li::before { content: ''; flex: none; width: 5px; height: 5px; border-radius: 50%; background: var(--lg-cyan); margin-top: 8px; }
.lg-tips li b { color: var(--lg-text); font-weight: 600; }
.lg-footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--lg-border); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; }
.lg-foot-brand { font-family: var(--lg-mono); font-size: 12px; color: var(--lg-text-dim); }
.lg-foot-brand b { color: var(--lg-text); }
.lg-foot-cta { font-size: 12.5px; color: var(--lg-cyan); text-decoration: none; border: 1px solid rgba(45,217,240,0.3); padding: 7px 12px; border-radius: 100px; }
.lg-disclaimer { font-size: 11.5px; color: var(--lg-text-dim); margin-top: 18px; opacity: 0.8; }
@media (max-width: 420px) { .lg-footer { flex-direction: column; align-items: flex-start; } }
`;

export interface LinkGuardProps {
  /** URL for the "full security assessment" CTA in the footer. */
  ctaHref?: string;
  /** Force a theme regardless of the visitor's OS setting. */
  theme?: "light" | "dark";
}

export default function LinkGuard({
  ctaHref = "https://synkware.com",
  theme,
}: LinkGuardProps) {
  const [text, setText] = useState("");
  const [result, setResult] = useState<ScanResult | null>(null);

  const runScan = useCallback((value: string) => {
    const trimmed = value.trim();
    if (!trimmed) return;
    setResult(analyze(trimmed));
  }, []);

  const handleScan = () => runScan(text);

  const handleClear = () => {
    setText("");
    setResult(null);
  };

  const handleSample = (key: keyof typeof SAMPLES) => {
    const value = SAMPLES[key];
    setText(value);
    runScan(value);
  };

  const verdict = result ? verdictFor(result.score) : null;

  return (
    <div className="linkguard-root" data-theme={theme}>
      <style>{STYLES}</style>
      <div className="linkguard-wrap">
        <header>
          <div className="lg-mark">LINKGUARD SCANNER</div>
          <h1 className="lg-h1">
            Paste it before you <span>tap it</span>.
          </h1>
          <p className="lg-lede">
            Drop in a suspicious link, SMS, or WhatsApp message. LinkGuard
            checks it for the patterns scammers use most in Zambia — fake
            mobile money alerts, prize scams, and lookalike bank links — and
            explains what it finds in plain language.
          </p>
        </header>

        <div className="lg-panel">
          <label className="lg-field-label" htmlFor="linkguard-input">
            Message or link to check
          </label>
          <textarea
            id="linkguard-input"
            className="lg-textarea"
            value={text}
            onChange={(e: { target: { value: string } }) =>
              setText(e.target.value)
            }
            placeholder="e.g. Dear customer your Airtel Money has been suspended. Verify now at airtel-money-zm.top/verify or lose your funds within 24hrs."
          />
          <div className="lg-actions">
            <button className="lg-btn lg-btn-primary" onClick={handleScan}>
              Scan this
            </button>
            <button className="lg-btn lg-btn-ghost" onClick={handleClear}>
              Clear
            </button>
          </div>
          <div className="lg-sample-row">
            Try a sample:
            <button
              className="lg-sample-btn"
              onClick={() => handleSample("prize")}
            >
              prize scam
            </button>
            <button
              className="lg-sample-btn"
              onClick={() => handleSample("mobilemoney")}
            >
              mobile money alert
            </button>
            <button
              className="lg-sample-btn"
              onClick={() => handleSample("bank")}
            >
              bank verification
            </button>
          </div>
        </div>

        {result && verdict && (
          <div className="lg-verdict">
            <div className="lg-verdict-top">
              <div className="lg-verdict-label" style={{ color: verdict.color }}>
                {verdict.label}
              </div>
              <div className="lg-verdict-score">score {result.score}/100</div>
            </div>
            <div className="lg-meter">
              <div
                className="lg-meter-fill"
                style={{ width: `${result.score}%`, background: verdict.color }}
              />
            </div>
            <div className="lg-verdict-note">{verdict.note}</div>

            {result.flags.length === 0 ? (
              <div className="lg-clean-msg">
                No obvious red flags found in what LinkGuard checks for.
                That's not a full guarantee — when money, PINs, or account
                access are involved, confirm through the official app or a
                number you already know before acting.
              </div>
            ) : (
              <div className="lg-flags">
                {result.flags.map((f, i) => (
                  <div className="lg-flag" key={i}>
                    <div
                      className="lg-flag-dot"
                      style={{
                        background:
                          f.sev === "danger" ? "var(--lg-red)" : "var(--lg-amber)",
                      }}
                    />
                    <div className="lg-flag-body">
                      <strong>{f.title}</strong>
                      <span>{f.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="lg-tips">
          <h2>Three habits that stop most scams</h2>
          <ul>
            <li>
              <b>Never share an OTP or PIN</b> — no bank, mobile money agent,
              or Synkware will ever ask for one over a call, SMS, or link.
            </li>
            <li>
              <b>Go to the app, not the link</b> — open your banking or
              mobile money app directly instead of tapping a link in a
              message, even if it looks official.
            </li>
            <li>
              <b>Urgency is the tell</b> — "act within 24 hours" or "your
              account will be closed" is designed to stop you thinking. Slow
              down and verify.
            </li>
          </ul>
        </div>

        <div className="lg-disclaimer">
          LinkGuard runs entirely in your browser and checks against known
          scam patterns — it doesn't guarantee a link is safe or unsafe. For
          a business-grade security review, that's what Synkware's
          assessments are for.
        </div>

        <footer className="lg-footer">
          <div className="lg-foot-brand">
            <b>LinkGuard</b> by Synkware Solutions Ltd
          </div>
          <a
            className="lg-foot-cta"
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Full security assessment →
          </a>
        </footer>
      </div>
    </div>
  );
}

