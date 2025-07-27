import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Linkedin,Instagram, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "info@synkware.com",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+260 7766 14614",
      description: "Call us during business hours",
    },
    {
      icon: MapPin,
      title: "Address",
      details: "Lusaka, Zambia",
      description: "Visit our office",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Fri: 8:00 AM - 6:00 PM",
      description: "Central Africa Time (CAT)",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in required fields",
        description: "Name, email, and message are required.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);

    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      message: "",
    });
  };

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
                Get In Touch
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                Ready to transform your business with cutting-edge technology?
                Let's start the conversation.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-gradient-to-b from-primary-dark/50 to-primary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="text-center shadow-luxury gradient-card border-accent/20 hover:shadow-glow hover:scale-105 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 gradient-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                      <info.icon size={24} className="text-accent-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      {info.title}
                    </h3>
                    <p className="text-primary font-medium mb-1">
                      {info.details}
                    </p>
                    <p className="text-card-foreground text-sm">
                      {info.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form & Additional Info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="shadow-luxury gradient-card border-accent/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    Send us a Message
                  </CardTitle>
                  <p className="text-card-foreground">
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="service">Service of Interest</Label>
                      <Input
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        placeholder="e.g., Cybersecurity, Cloud Infrastructure, AI Solutions"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="mt-1"
                        placeholder="Tell us about your project or requirements..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full gradient-accent text-accent-foreground shadow-elegant"
                    >
                      <Send size={16} className="mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Additional Information */}
              <div className="space-y-8">
                <Card className="shadow-luxury gradient-card border-accent/20">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">
                      Why Choose SYNKWARE?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4 text-card-foreground">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 gradient-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          Government-grade security and compliance standards
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 gradient-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          Deep understanding of African market challenges
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 gradient-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>Cutting-edge AI and automation solutions</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 gradient-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>Proven track record with enterprise clients</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 gradient-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>24/7 support and maintenance services</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="gradient-hero text-primary-foreground shadow-glow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Ready for a Consultation?
                    </h3>
                    <p className="text-primary-foreground/90 mb-6">
                      Schedule a free 30-minute consultation to discuss your
                      technology needs and how we can help.
                    </p>
                    <Button
                      variant="secondary"
                      className="w-full shadow-elegant"
                    >
                      Book Free Consultation
                    </Button>
                  </CardContent>
                </Card>

                <Card className="shadow-luxury gradient-card border-accent/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary mb-4">
                      Follow Us
                    </h3>
                    <div className="flex items-center space-x-4">
                      <a
                        href="https://www.linkedin.com/company/synkware-solutions"
                        className="flex items-center space-x-2 text-card-foreground hover:text-accent transition-colors"
                      >
                        <Linkedin size={20} />
                        <span>LinkedIn</span>
                      </a>
                    </div>
                    <div className="flex items-center space-x-4">
                      <a
                        href="https://www.instagram.com/synkware?igsh=N2tsOXhxNHlqcDI4"
                        className="flex items-center space-x-2 text-card-foreground hover:text-accent transition-colors"
                      >
                        <Instagram size={20} />
                        <span>Instagram</span>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
