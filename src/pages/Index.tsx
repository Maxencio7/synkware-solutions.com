import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";
import { Link } from "react-router-dom";
import {
  BarChart3,
  Users,
  Zap,
  TrendingUp,
  Shield,
  Clock,
  Cpu,
  Target,
  ArrowRight,
  Download,
  Phone,
  CheckCircle,
  Star,
  Globe,
  Award,
  Calendar,
  Quote,
} from "lucide-react";
import heroVideo from "@/assets/hero-automation.mp4";
import heroImage from "@/assets/hero-automation.jpg";
import serviceBIImage from "@/assets/service-bi.jpg";
import serviceLogisticsImage from "@/assets/service-logistics.jpg";
import serviceAutomationImage from "@/assets/service-automation.jpg";
import teamImage from "@/assets/team-collaboration.jpg";
import techBgImage from "@/assets/tech-background.jpg";
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

const services = [
  {
    icon: Cpu,
    title: "AI Automation Platforms",
    description:
      "Custom-built intelligent systems that streamline your business operations, reduce manual work, and increase efficiency by up to 80%.",
    image: serviceAutomationImage,
    features: [
      "Process Automation",
      "AI Integration",
      "Custom Workflows",
      "Real-time Monitoring",
    ],
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description:
      "Transform your data into actionable insights with powerful analytics, predictive modeling, and comprehensive reporting tools.",
    image: serviceBIImage,
    features: [
      "Data Analytics",
      "Predictive Modeling",
      "Custom Dashboards",
      "Real-time Reports",
    ],
  },
  {
    icon: TrendingUp,
    title: "Logistics Solutions",
    description:
      "Optimize your supply chain with smart tracking, route optimization, inventory management, and automated shipping systems.",
    image: serviceLogisticsImage,
    features: [
      "Supply Chain Optimization",
      "Route Planning",
      "Inventory Management",
      "Shipment Tracking",
    ],
  },
];

const stats = [
  { number: "10+", label: "Projects Completed", icon: Target },
  { number: "99%", label: "Client Satisfaction", icon: Star },
  { number: "5+", label: "Countries Served", icon: Globe },
  { number: "24/7", label: "Support Available", icon: Clock },
];

const features = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-level encryption and security protocols to protect your sensitive business data.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Optimized performance ensuring your systems run at peak efficiency with minimal latency.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Dedicated professionals with decades of experience in automation and business intelligence.",
  },
  {
    icon: Award,
    title: "Proven Results",
    description:
      "Track record of delivering measurable ROI and business transformation for our clients.",
  },
];

const testimonials = [
  {
    name: "Steve Phiri",
    role: "CEO, TechCorp Industries",
    content:
      "SYNKWARE transformed our on prem and cloud operations. We've seen a reduction in workload and increase accuracy in deliveries.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Operations Director, Global Logistics Ltd",
    content:
      "The AI automation platform saved us 40 hours per week in manual processing. ROI was achieved within 3 months.",
    rating: 5,
  },
  {
    name: "Emma Rodriguez",
    role: "CFO, Manufacturing Solutions Inc",
    content:
      "Their business intelligence dashboard gave us insights we never had before. Data-driven decisions are now our standard.",
    rating: 5,
  },
];

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <div className="min-h-screen bg-primary scroll-smooth">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={heroVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 gradient opacity-85" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent" />
          </div>

          <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
            <Badge className="mb-6 btn-gold border-accent/30 shadow-gold">
              Leading Digital Transformation Solutions
            </Badge>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 tracking-tight drop-shadow-2xl">
              <span className="text-accent drop-shadow-glow">Analyze.</span>{" "}
              Accelerate.
            </h1>

            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business with IT solutions, intelligent analytics,
              and seamless system logistics solutions.
            </p>

            <p className="text-lg text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
              Join 10+ companies worldwide who trust SYNKWARE to drive their
              digital transformation and achieve measurable results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="text-lg px-8 py-4 border-accent/50 text-primary-foreground bg-accent/30 hover:bg-accent/20 hover:border-accent backdrop-blur-sm transition-all duration-300 hover:shadow-gold"
              >
                <Calendar className="mr-2" size={20} />
                Contact Us
              </Button>
              {/* <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4 border-accent/50 text-primary-foreground bg-accent/30 hover:bg-accent/20 hover:border-accent backdrop-blur-sm transition-all duration-300 hover:shadow-gold"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '#';
                  link.download = 'SYNKWARE-Solutions-Company-Profile.pdf';
                  link.target = '_blank';
                  link.click();
                }}
              >
                <Download className="mr-2" size={20} />
                Join Us
              </Button> */}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-primary from-muted/30 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="text-center gradient-card border-0 shadow-elegant hover:shadow-glow transition-all duration-500 group animate-fade-in hover:-translate-y-2"
                  style={{
                    animationDelay: `${index * 150}ms`,
                    animationFillMode: "backwards",
                  }}
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 gradient-luxury rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      <stat.icon size={32} className="text-accent-foreground" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2 transition-all duration-300 group-hover:scale-110">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
                Our Solutions
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Comprehensive Digital Solutions
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From AI automation to business intelligence, we deliver
                end-to-end solutions that transform how you operate and compete.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="group gradient-card border-0 shadow-luxury hover:shadow-glow transition-all duration-500 hover:-translate-y-2 overflow-hidden animate-fade-in"
                  style={{
                    animationDelay: `${index * 200}ms`,
                    animationFillMode: "backwards",
                  }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-2 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="w-12 h-12 gradient-luxury rounded-lg flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                        <service.icon
                          size={24}
                          className="text-accent-foreground"
                        />
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <CheckCircle
                            size={16}
                            className="text-accent mr-2 flex-shrink-0"
                          />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Button className="w-full group-hover:gradient-luxury group-hover:text-accent-foreground transition-all duration-300">
                      Learn More
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Link to="/services">
                <Button
                  size="lg"
                  className="gradient-primary text-primary-foreground shadow-elegant hover:scale-105 transition-all duration-300"
                >
                  View All Services
                  <ArrowRight size={20} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <img
              src={techBgImage}
              alt="Technology background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
                Why Choose Us
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Built for Performance
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our solutions are designed with enterprise-grade security,
                lightning-fast performance, and proven results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="group text-center gradient-card border-0 shadow-elegant hover:shadow-glow transition-all duration-500 hover:-translate-y-2 animate-fade-in"
                  style={{
                    animationDelay: `${index * 150}ms`,
                    animationFillMode: "backwards",
                  }}
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 gradient-luxury rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      <feature.icon
                        size={28}
                        className="text-accent-foreground"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-2 transition-colors duration-300 group-hover:text-accent">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-primary from-muted/30 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
                Client Success Stories
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover how we've helped businesses achieve remarkable results
                and transform their operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="gradient-card border-0 shadow-luxury hover:shadow-glow transition-all duration-500 group hover:-translate-y-2 animate-fade-in"
                  style={{
                    animationDelay: `${index * 200}ms`,
                    animationFillMode: "backwards",
                  }}
                >
                  <CardContent className="p-8">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className="text-accent fill-current"
                        />
                      ))}
                    </div>
                    <Quote size={24} className="text-accent mb-4" />
                    <p className="text-muted-foreground mb-6 italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 gradient-luxury rounded-full flex items-center justify-center mr-4">
                        <span className="text-accent-foreground font-semibold">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-primary">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
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

        {/* Team Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
                  Our Team
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                  World-Class Expertise
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Our team combines decades of experience with cutting-edge
                  innovation to deliver solutions that exceed expectations.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    "AI & Machine Learning Specialists",
                    "Enterprise Architecture Experts",
                    "DevOps & Cloud Infrastructure Masters",
                    "Business Intelligence Analysts",
                    "24/7 Dedicated Support Team",
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

                <Link to="/about">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-accent/30 bg-accent/10 hover:bg-accent/10 hover:border-accent transition-all duration-300"
                  >
                    Meet Our Team
                    <ArrowRight size={20} className="ml-2" />
                  </Button>
                </Link>
              </div>

              <div className="relative">
                <img
                  src={teamImage}
                  alt="Professional team collaboration"
                  className="rounded-2xl shadow-luxury w-full h-auto"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/5" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="gradient-hero text-primary-foreground shadow-luxury border-0 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent opacity-30" />
              <CardContent className="p-12 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
                  Join the digital revolution with SYNKWARE. Let's discuss how
                  our solutions can drive your success and accelerate your
                  growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button
                      size="lg"
                      className="btn-gold text-lg px-8 py-4 shadow-glow hover:scale-105 transition-all duration-300"
                    >
                      <Phone className="mr-2" size={20} />
                      Get Started Today
                    </Button>
                  </Link>
                  <Link to="/services">
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg px-8 py-4 border-primary-foreground/30 text-primary-foreground bg-primary-foreground/30 hover:bg-primary-foreground/10 hover:border-primary-foreground backdrop-blur-sm transition-all duration-300"
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
