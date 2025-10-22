import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, Users, Globe } from "lucide-react";
import partnerMicrosoft from "@/assets/partner-microsoft.png";
import partnerSAP from "@/assets/partner-sap.png";
import partnerDell from "@/assets/partner-dell.png";
import partnerHP from "@/assets/partner-hp.png";
import partnerAWS from "@/assets/partner-aws.png";
import partner4sight from "@/assets/partner-4sight.png";
import partnerHuawei from "@/assets/partner-huawei.png";
import partnerGoogle from "@/assets/partner-google.png";
import partnerABB from "@/assets/partner-abb.png";
import partnerLogpoint from "@/assets/partner-log.png";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Security First",
      description:
        "Every solution we build prioritizes data protection and cybersecurity best practices.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We deliver world-class solutions that meet international standards and exceed expectations.",
    },
    {
      icon: Users,
      title: "Client Partnership",
      description:
        "We work closely with our clients as strategic partners in their digital transformation journey.",
    },
    {
      icon: Globe,
      title: "African Innovation",
      description:
        "Building technology solutions that understand and serve the unique needs of African markets.",
    },
  ];

  const certifications = [
    "ISO 27001 Aligned",
    "PACRA Registered",
    "ZRA Compliant",
    "Cloud Security Alliance",
    "AI Ethics Framework",
  ];

  return (
    <div className="min-h-screen gradient-midnight">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 gradient-luxury text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10"></div>
          <div className="absolute top-10 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-foreground to-accent bg-clip-text text-transparent">
                About SYNKWARE Solutions
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                Empowering Africa's digital future through secure, intelligent,
                and scalable technology solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-gradient-to-b from-primary-dark/50 to-primary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="shadow-luxury gradient-card border-accent/20">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-primary mb-4">
                    Our Mission
                  </h2>
                  <p className="text-card-foreground text-lg leading-relaxed">
                    At SYNKWARE Solutions, we empower governments, businesses,
                    and visionary founders with secure, intelligent, and
                    scalable digital systems — built to elevate Africa's digital
                    future. We bridge the gap between cutting-edge technology
                    and practical business solutions.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-luxury gradient-card border-accent/20">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-primary mb-4">
                    Our Vision
                  </h2>
                  <p className="text-card-foreground text-lg leading-relaxed">
                    To become Africa's leading technology partner, recognized
                    for transforming organizations through innovative software
                    solutions, robust cybersecurity, and intelligent automation
                    systems that drive sustainable growth and competitive
                    advantage.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-gradient-to-b from-primary/30 to-primary-dark/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-primary-foreground/80 text-lg">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="text-center shadow-luxury gradient-card border-accent/20 hover:shadow-glow hover:scale-105 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-gold">
                      <value.icon
                        size={32}
                        className="text-accent-foreground"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-3">
                      {value.title}
                    </h3>
                    <p className="text-card-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Founder's Story */}
        <section className="py-16 bg-gradient-to-b from-primary-dark/50 to-primary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-luxury gradient-card border-accent/20">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-primary mb-6 text-center">
                    Founder's Story
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-card-foreground text-lg leading-relaxed mb-6">
                      SYNKWARE Solutions was founded with a clear vision: to
                      democratize access to enterprise-grade technology
                      solutions across Africa. Our founder recognized the unique
                      challenges faced by African organizations in their digital
                      transformation journey and set out to build a company that
                      could bridge this gap.
                    </p>
                    <p className="text-card-foreground text-lg leading-relaxed">
                      With deep expertise in cybersecurity, cloud
                      infrastructure, and emerging technologies like AI and
                      blockchain, we've built SYNKWARE to be more than just a
                      technology provider — we're strategic partners committed
                      to our clients' long-term success and Africa's
                      technological advancement.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Regulatory & Certifications */}
        <section className="py-16 bg-gradient-to-b from-primary/30 to-primary-dark/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary-foreground mb-4">
                Regulatory Compliance & Standards
              </h2>
              <p className="text-primary-foreground/80 text-lg">
                Committed to the highest standards of compliance and security
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="shadow-luxury gradient-card border-accent/20">
                <CardContent className="p-8">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-primary mb-6">
                      Our Certifications & Registrations
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4">
                      {certifications.map((cert, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="px-4 py-2 text-sm font-medium bg-accent/20 text-accent border-accent/40"
                        >
                          {cert}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-card-foreground mt-6">
                      We maintain the highest standards of regulatory compliance
                      and continuously update our certifications to ensure we
                      meet evolving industry requirements.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      {/* Partners Section */}
      <section className="py-20 bg-primary from-background to-muted/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              Trusted Partners
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Powering Success Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join the leading organizations who trust SYNKWARE to transform
              their digital landscape.
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
              {[
                {
                  id: "microsoft",
                  logo: partnerMicrosoft,
                  name: "Microsoft",
                  shape: "65% 35% 70% 30% / 50% 60% 40% 50%",
                },
                {
                  id: "sap",
                  logo: partnerSAP,
                  name: "SAP",
                  shape: "40% 60% 55% 45% / 60% 50% 50% 40%",
                },
                {
                  id: "dell",
                  logo: partnerDell,
                  name: "Dell",
                  shape: "55% 45% 45% 55% / 65% 35% 65% 35%",
                },
                {
                  id: "hp",
                  logo: partnerHP,
                  name: "HP",
                  shape: "50% 50% 70% 30% / 45% 55% 45% 55%",
                },
                {
                  id: "aws",
                  logo: partnerAWS,
                  name: "AWS",
                  shape: "45% 55% 50% 50% / 55% 45% 60% 40%",
                },
                {
                  id: "4sight",
                  logo: partner4sight,
                  name: "4sight",
                  shape: "60% 40% 60% 40% / 50% 50% 50% 50%",
                },
                {
                  id: "huawei",
                  logo: partnerHuawei,
                  name: "Huawei",
                  shape: "35% 65% 55% 45% / 70% 30% 60% 40%",
                },
                {
                  id: "google",
                  logo: partnerGoogle,
                  name: "Google",
                  shape: "70% 30% 50% 50% / 40% 60% 50% 50%",
                },
                {
                  id: "abb",
                  logo: partnerABB,
                  name: "ABB",
                  shape: "50% 50% 60% 40% / 65% 35% 55% 45%",
                },
                {
                  id: "logpoint",
                  logo: partnerLogpoint,
                  name: "Logpoint",
                  shape: "40% 60% 45% 55% / 55% 45% 70% 30%",
                },
              ].map((partner, index) => (
                <Link
                  key={index}
                  to={`/partners/${partner.id}`}
                  className="group relative flex items-center justify-center aspect-square bg-card/80 backdrop-blur-sm border-2 border-border/50 hover:border-accent shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-110 hover:-translate-y-2 animate-fade-in cursor-pointer overflow-hidden"
                  style={{
                    animationDelay: `${index * 80}ms`,
                    animationFillMode: "backwards",
                    borderRadius: partner.shape,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 animate-[spin_20s_linear_infinite] opacity-0 group-hover:opacity-20">
                    <div className="h-full w-full bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
                  </div>
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="relative w-3/5 h-auto object-contain transition-all duration-500 group-hover:scale-110 drop-shadow-lg"
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">
              Want to become a partner?
            </p>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-accent/30 bg-accent/10 hover:bg-accent/10 hover:border-accent transition-all duration-300"
              >
                Get In Touch
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Company Logos Section */}
      <div className="company-logos-section py-12 bg-gradient-to-r from-primary-dark/20 to-primary/10">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 text-primary-foreground">
            Companies We've Worked With
          </h2>
          <div className="overflow-hidden relative">
            <div
              className="flex items-center gap-12 animate-[logos-scroll_12s_linear_infinite]"
              style={{ minWidth: "max-content" }}
            >
              <a href="https://www.apeiron-mining.com/">
                <img
                  src="/companyA.png"
                  alt="Apeiron Mining Limited"
                  className="h-20 w-auto object-contain mx-4"
                />
              </a>
              <a href="https://www.trademwainstallations.com/">
                <img
                  src="/companyB.png"
                  alt="Trademwa Installation Ltd"
                  className="h-20 w-auto object-contain mx-4"
                />
              </a>
              <a href="https://www.borikainvestmentsltd.com/">
                <img
                  src="/companyC.png"
                  alt="Borika Investments Limited"
                  className="h-20 w-auto object-contain mx-4"
                />
              </a>
              {/* Repeat logos for seamless scroll */}
              <a href="https://www.apeiron-mining.com/">
                <img
                  src="/companyA.png"
                  alt="Apeiron Mining Limited"
                  className="h-20 w-auto object-contain mx-4"
                />
              </a>
              <a href="https://www.trademwainstallations.com/">
                <img
                  src="/companyB.png"
                  alt="Trademwa Installation Ltd"
                  className="h-20 w-auto object-contain mx-4"
                />
              </a>
              <a href="https://www.borikainvestmentsltd.com/">
                <img
                  src="/companyC.png"
                  alt="Borika Investments Limited"
                  className="h-20 w-auto object-contain mx-4"
                />
              </a>
              <a href="https://www.apeiron-mining.com/">
                <img
                  src="/companyA.png"
                  alt="Apeiron Mining Limited"
                  className="h-20 w-auto object-contain mx-4"
                />
              </a>
              <a href="https://www.trademwainstallations.com/">
                <img
                  src="/companyB.png"
                  alt="Trademwa Installation Ltd"
                  className="h-20 w-auto object-contain mx-4"
                />
              </a>
              <a href="https://www.borikainvestmentsltd.com/">
                <img
                  src="/companyC.png"
                  alt="Borika Investments Limited"
                  className="h-20 w-auto object-contain mx-4"
                />
              </a>
              <a href="https://www.apeiron-mining.com/">
                <img
                  src="/companyA.png"
                  alt="Apeiron Mining Limited"
                  className="h-20 w-auto object-contain mx-4"
                />
              </a>
              <a href="https://www.trademwainstallations.com/">
                <img
                  src="/companyB.png"
                  alt="Trademwa Installation Ltd"
                  className="h-20 w-auto object-contain mx-4"
                />
              </a>
              <a href="https://www.borikainvestmentsltd.com/">
                <img
                  src="/companyC.png"
                  alt="Borika Investments Limited"
                  className="h-20 w-auto object-contain mx-4"
                />
              </a>
            </div>
            {/* Custom keyframes for Tailwind animation */}
            <style>
              {`
                    @keyframes logos-scroll {
                      0% { transform: translateX(0); }
                      100% { transform: translateX(50%); }
                    }
                    .animate-[logos-scroll_17s_linear_infinite] {
                      animation: logos-scroll 12s linear infinite;
                    }
                  `}
            </style>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
