import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="prose prose-lg max-w-none text-white">
              <h1 className="text-3xl font-bold text-white mb-8">📜 SYNKWARE Data Policy</h1>
              
              <div className="text-sm text-gray-300 mb-6">
                <p>Effective Date: July 16, 2025</p>
                <p>Last Updated: July 16, 2025</p>
              </div>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-white mb-4">1. Who We Are</h2>
                <p className="text-gray-200">
                  SYNKWARE ("we", "our", "us") is a digital automation company focused on creating AI-integrated platforms for logistics, business intelligence, and operational workflows.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-white mb-4">2. What We Collect</h2>
                <p className="text-gray-200 mb-3">We may collect the following data:</p>
                <ul className="list-disc list-inside text-gray-200 space-y-2">
                  <li><strong>User Identification:</strong> Full name, phone number, email, company name.</li>
                  <li><strong>Usage Metrics:</strong> IP address, device type, browser info, page visits.</li>
                  <li><strong>Business Data:</strong> Uploaded files, shipment logs, client records.</li>
                  <li><strong>Communication Logs:</strong> Chatbot interactions, email exchanges.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-white mb-4">3. Why We Collect It</h2>
                <p className="text-gray-200 mb-3">We use your data to:</p>
                <ul className="list-disc list-inside text-gray-200 space-y-2">
                  <li>Deliver services via our automation dashboard or API.</li>
                  <li>Improve platform performance and functionality.</li>
                  <li>Communicate important system alerts or updates.</li>
                  <li>Ensure legal compliance and fraud prevention.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-white mb-4">4. How We Protect It</h2>
                <p className="text-gray-200 mb-3">All data is protected using:</p>
                <ul className="list-disc list-inside text-gray-200 space-y-2">
                  <li>Encrypted cloud storage (e.g., Supabase/Firebase).</li>
                  <li>Role-based access control (RBAC) for team members.</li>
                  <li>Secure API endpoints and SSL/TLS connections.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-white mb-4">5. Third-Party Services</h2>
                <p className="text-gray-200 mb-3">We may integrate with trusted platforms like:</p>
                <ul className="list-disc list-inside text-gray-200 space-y-2">
                  <li>Firebase (user auth, database)</li>
                  <li>Flutterwave (payments)</li>
                  <li>Zapier (automation triggers)</li>
                  <li>OpenAI (for AI copilots)</li>
                </ul>
                <p className="text-gray-200 mt-3">
                  These partners may process data per their own privacy policies.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-white mb-4">6. Your Rights</h2>
                <p className="text-gray-200 mb-3">You may request to:</p>
                <ul className="list-disc list-inside text-gray-200 space-y-2">
                  <li>Access or export your data</li>
                  <li>Correct or update information</li>
                  <li>Delete your account</li>
                  <li>Opt out of non-essential communications</li>
                </ul>
                <p className="text-gray-200 mt-3">
                  Contact: <a href="mailto:support@synkware.tech" className="text-blue-300 hover:text-blue-200 underline">support@synkware.tech</a>
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-white mb-4">7. Cookies</h2>
                <p className="text-gray-200">
                  We use cookies for session handling and user experience enhancement. You may disable them via browser settings.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-white mb-4">8. Updates</h2>
                <p className="text-gray-200">
                  This policy may be updated. We'll notify you through the platform or via email.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;