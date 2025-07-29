import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Cloud,
  Bot,
  Code,
  Settings,
  ChevronRight,
  CheckCircle,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description:
        "Protecting your infrastructure, data, and systems with modern risk-based solutions aligned to ISO 27001 standards.",
      features: [
        "Security Risk Assessments",
        "Penetration Testing",
        "Compliance Frameworks",
        "Incident Response",
        "Security Training",
      ],
      badge: "Government Grade",
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure & DevOps",
      description:
        "Migrate, deploy, and scale applications using agile, cost-efficient cloud infrastructure.",
      features: [
        "Cloud Migration Strategy",
        "AWS/Azure Implementation",
        "DevOps Pipeline Setup",
        "Infrastructure as Code",
        "Monitoring & Optimization",
      ],
      badge: "Scalable",
    },
    {
      icon: Bot,
      title: "AI & Automation Tools",
      description:
        "From task automation to data modeling — we build custom tools powered by open-source intelligence and machine learning.",
      features: [
        "Process Automation",
        "Predictive Analytics",
        "Chatbot Development",
        "Data Processing",
        "ML Model Development",
      ],
      badge: "Intelligent",
    },
    {
      icon: Code,
      title: "Custom Software & Web3 Development",
      description:
        "Bespoke software solutions and blockchain applications tailored to your specific business requirements.",
      features: [
        "Web Application Development",
        "Mobile App Development",
        "Blockchain Solutions",
        "Smart Contracts",
        "DeFi Applications",
      ],
      badge: "Future-Ready",
    },
    {
      icon: Settings,
      title: "IT Consulting",
      description:
        "Strategic technology consulting to align your IT infrastructure with business objectives and industry best practices.",
      features: [
        "Digital Strategy",
        "Technology Assessment",
        "Vendor Selection",
        "Project Management",
        "Training & Support",
      ],
      badge: "Strategic",
    },
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
                Our Services
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to secure, scale,
                and synchronize your business operations.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-gradient-to-b from-primary-dark/50 to-primary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="shadow-luxury gradient-card border-accent/20 hover:shadow-glow hover:scale-105 transition-all duration-300 group"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 gradient-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <service.icon
                            size={24}
                            className="text-accent-foreground"
                          />
                        </div>
                        <div>
                          <CardTitle className="text-xl text-primary">
                            {service.title}
                          </CardTitle>
                          <Badge variant="secondary" className="mt-1">
                            {service.badge}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-card-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircle
                            size={16}
                            className="text-accent flex-shrink-0"
                          />
                          <span className="text-sm text-card-foreground">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    >
                      Learn More
                      <ChevronRight size={16} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gradient-to-b from-primary/30 to-primary-dark/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary-foreground mb-4">
                Our Approach
              </h2>
              <p className="text-primary-foreground/80 text-lg">
                A proven methodology that ensures successful project delivery
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description:
                    "We analyze your needs and understand your business objectives.",
                },
                {
                  step: "02",
                  title: "Strategy",
                  description:
                    "We develop a comprehensive solution strategy tailored to your requirements.",
                },
                {
                  step: "03",
                  title: "Implementation",
                  description:
                    "We execute the solution using agile methodologies and best practices.",
                },
                {
                  step: "04",
                  title: "Support",
                  description:
                    "We provide ongoing support and optimization to ensure continued success.",
                },
              ].map((process, index) => (
                <Card
                  key={index}
                  className="text-center shadow-luxury gradient-card border-accent/20"
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-gold">
                      <span className="text-accent-foreground font-bold text-lg">
                        {process.step}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-3">
                      {process.title}
                    </h3>
                    <p className="text-card-foreground text-sm">
                      {process.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-b from-primary-dark/50 to-primary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="gradient-hero text-primary-foreground shadow-glow">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold mb-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our services can help you achieve your
                  technology goals and drive your business forward.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="shadow-elegant"
                  >
                    Book a Consultation
                  </Button>
                  <a href="https://drive.google.com/file/d/1d-GA8Qhi7rpOp6f-5a-D1E6dziEN3f8v/view?usp=sharing">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-primary-foreground text-primary hover:bg-primary-foreground hover:text-primary"
                    >
                      Download Company Profile
                    </Button>
                  </a>
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

export default Services;
