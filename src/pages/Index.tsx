import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Cloud,
  Bot,
  Code,
  Settings,
  ArrowRight,
  CheckCircle,
  Download,
  Calendar,
} from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";

const Index = () => {
  const services = [
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description: "Government-grade security and compliance frameworks",
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scalable, secure cloud migration and DevOps services",
    },
    {
      icon: Bot,
      title: "AI & Automation",
      description: "Intelligent automation and machine learning solutions",
    },
    {
      icon: Code,
      title: "Custom Development",
      description: "Bespoke software and Web3 blockchain applications",
    },
    {
      icon: Settings,
      title: "IT Consulting",
      description: "Strategic technology guidance and digital transformation",
    },
  ];

  const stats = [
    { number: "10+", label: "Projects Delivered" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
    { number: "5+", label: "Years Experience" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 gradient-midnight">
            {/* Tech Grid Background */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/4 left-1/4 w-px h-32 bg-accent rotate-45 animate-pulse" />
              <div className="absolute top-1/3 right-1/4 w-px h-24 bg-accent -rotate-45 animate-pulse delay-300" />
              <div className="absolute bottom-1/4 left-1/3 w-px h-40 bg-accent rotate-12 animate-pulse delay-700" />
              <div className="absolute top-1/2 right-1/3 w-px h-28 bg-accent -rotate-12 animate-pulse delay-1000" />

              {/* Circuit Board Pattern */}
              <div className="absolute top-20 left-20 w-2 h-2 bg-accent rounded-full" />
              <div className="absolute top-20 left-24 w-16 h-px bg-accent/60" />
              <div className="absolute top-40 right-20 w-2 h-2 bg-accent rounded-full" />
              <div className="absolute top-40 right-24 w-12 h-px bg-accent/60" />
            </div>

            {/* Glowing Orbs */}
            <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-accent/20 blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-accent/15 blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-accent/10 blur-2xl animate-pulse delay-500" />

            {/* Tech Image Overlay */}
            <img
              src={heroImage}
              alt="Technology and AI"
              className="w-full h-full object-cover opacity-5"
            />
          </div>

          <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
            <Badge className="mb-6 btn-gold border-accent/30 shadow-gold">
              Zambia's Premier Tech Solutions Provider
            </Badge>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 tracking-tight drop-shadow-2xl">
              Secure. Scale.{" "}
              <span className="text-accent drop-shadow-glow">Synk.</span>
            </h1>

            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Modern software and AI systems for a smarter Africa
            </p>

            <p className="text-lg text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
              Empowering governments, businesses, and visionary founders with
              secure, intelligent, and scalable digital systems built for
              Africa's digital future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="btn-gold text-lg px-8 py-4 font-semibold"
              >
                <Calendar className="mr-2" size={20} />
                Book a Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-accent/50 text-primary bg-accent hover:border-accent backdrop-blur-sm transition-all duration-300 hover:shadow-gold hover:bg-accent/20 hover:border-accent backdrop-blur-sm transition-all duration-300 hover:shadow-gold"
                onClick={() => {
                  // Create a downloadable PDF or open in new tab
                  const link = document.createElement("a");
                  link.href =
                    "https://drive.google.com/file/d/1d-GA8Qhi7rpOp6f-5a-D1E6dziEN3f8v/view?usp=sharing";
                  link.download = "SYNKWARE-Solutions-Company-Profile.pdf";
                  link.target = "_blank";
                  link.click();
                }}
              >
                <Download className="mr-2" size={20} />
                About Us
              </Button>
            </div>
          </div>

          {/* Floating Tech Elements */}
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-accent rounded-full animate-ping" />
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent rounded-full animate-ping delay-500" />
          <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-accent/80 rounded-full animate-ping delay-1000" />
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent/60 rounded-full animate-ping delay-700" />
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Company Logos Section */}
        <div className="company-logos-section py-12 bg-gradient-to-r from-primary-dark/20 to-primary/10">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8 text-black">
              TRUSTED BY
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

        {/* Services Preview */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Our Core Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive technology solutions designed to transform your
                business operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {services.slice(0, 3).map((service, index) => (
                <Card
                  key={index}
                  className="gradient-card border-0 shadow-luxury hover:shadow-glow transition-all duration-500 group hover:-translate-y-2"
                >
                  <CardContent className="p-8 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                      <div className="w-16 h-16 gradient-luxury rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                        <service.icon
                          size={32}
                          className="text-accent-foreground"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-primary mb-4">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {service.description}
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="group-hover:gradient-luxury group-hover:text-accent-foreground group-hover:border-accent/30 transition-all duration-300"
                        href="/services"
                      >
                        Learn More
                        <ArrowRight size={16} className="ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.slice(3).map((service, index) => (
                <Card
                  key={index + 3}
                  className="gradient-card border-0 shadow-luxury hover:shadow-glow transition-all duration-500 group hover:-translate-y-2"
                >
                  <CardContent className="p-8 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                      <div className="w-16 h-16 gradient-luxury rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                        <service.icon
                          size={32}
                          className="text-accent-foreground"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-primary mb-4">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {service.description}
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="group-hover:gradient-luxury group-hover:text-accent-foreground group-hover:border-accent/30 transition-all duration-300"
                        href="/services"
                      >
                        Learn More
                        <ArrowRight size={16} className="ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/services">
                <Button
                  size="lg"
                  className="gradient-primary text-primary-foreground shadow-elegant"
                >
                  View All Services
                  <ArrowRight size={20} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Why Choose SYNKWARE Solutions?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  We combine international best practices with deep African
                  market understanding to deliver technology solutions that
                  truly work for your business.
                </p>

                <div className="space-y-4">
                  {[
                    "ISO 27001 aligned security standards",
                    "Government-grade compliance and regulations",
                    "Deep understanding of African market challenges",
                    "Cutting-edge AI and automation expertise",
                    "24/7 support and maintenance services",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle
                        size={20}
                        className="text-accent flex-shrink-0"
                      />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link to="/about">
                    <Button variant="outline" size="lg">
                      Learn More About Us
                      <ArrowRight size={20} className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>

              <Card className="gradient-card border-0 shadow-luxury">
                <CardContent className="p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/5 opacity-50" />
                  <div className="relative z-10">
                    <h3 className="text-2xl font-semibold text-primary mb-6">
                      Our Mission
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      At SYNKWARE Solutions, we empower governments, businesses,
                      and visionary founders with secure, intelligent, and
                      scalable digital systems — built to elevate Africa's
                      digital future.
                    </p>
                    <p className="text-muted-foreground">
                      We bridge the gap between cutting-edge global technology
                      and practical African business solutions.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="gradient-hero text-primary-foreground shadow-luxury border-0 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent opacity-30" />
              <CardContent className="p-12 text-center relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                  Let's discuss how we can help you leverage technology to
                  achieve your goals and drive sustainable growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button
                      size="lg"
                      className="gradient-luxury text-accent-foreground shadow-glow hover:scale-105 transition-all duration-300"
                    >
                      <Calendar className="mr-2" size={20} />
                      Get Started Today
                    </Button>
                  </Link>
                  <Link to="/services">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-primary-foreground/30 text-primary hover:bg-primary-foreground/10 hover:border-primary-foreground backdrop-blur-sm transition-all duration-300"
                    >
                      Explore Our Services
                      <ArrowRight size={20} className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
