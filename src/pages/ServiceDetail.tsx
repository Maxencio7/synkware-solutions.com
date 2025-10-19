import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const serviceData: Record<
  string,
  {
    title: string;
    description: string;
    fullDescription: string;
    features: string[];
    benefits: string[];
    technologies?: string[];
  }
> = {
  "logistics-warehouse": {
    title: "Logistics & Warehouse Management",
    description:
      "Advanced solutions for optimizing your supply chain and warehouse operations.",
    fullDescription:
      "Our comprehensive logistics and warehouse management solutions leverage cutting-edge technology to streamline your operations, reduce costs, and improve efficiency. From inventory tracking to automated picking systems, we provide end-to-end solutions tailored to your business needs.",
    features: [
      "Real-time Inventory Tracking",
      "Automated Picking Systems",
      "Warehouse Management System (WMS)",
      "Route Optimization",
      "Integration with ERP Systems",
    ],
    benefits: [
      "Reduce operational costs by up to 30%",
      "Improve inventory accuracy to 99%+",
      "Increase warehouse productivity",
      "Real-time visibility across supply chain",
      "Better customer satisfaction",
    ],
    technologies: ["SAP", "Oracle WMS", "RFID", "IoT Sensors"],
  },
  "business-intelligence": {
    title: "Business Intelligence & Analytics",
    description:
      "Transform your data into actionable insights for better decision-making.",
    fullDescription:
      "Harness the power of your data with our comprehensive BI and analytics solutions. We help you collect, analyze, and visualize data to uncover trends, patterns, and opportunities that drive business growth.",
    features: [
      "Data Warehousing",
      "Interactive Dashboards",
      "Predictive Analytics",
      "Custom Reports",
      "Data Integration",
    ],
    benefits: [
      "Data-driven decision making",
      "Identify new revenue opportunities",
      "Improve operational efficiency",
      "Competitive advantage",
      "Better forecast accuracy",
    ],
    technologies: ["Power BI", "Tableau", "SAP Analytics", "Google BigQuery"],
  },
  "business-automation": {
    title: "Business Automation",
    description:
      "Automate repetitive tasks and workflows to boost productivity.",
    fullDescription:
      "Streamline your business processes with intelligent automation solutions. From robotic process automation to workflow optimization, we help you eliminate manual tasks and focus on strategic initiatives.",
    features: [
      "Process Automation",
      "Workflow Management",
      "Document Automation",
      "Email & Communication Automation",
      "Integration Services",
    ],
    benefits: [
      "Reduce manual errors",
      "Increase processing speed",
      "Lower operational costs",
      "Improve employee satisfaction",
      "Scale operations efficiently",
    ],
    technologies: [
      "Microsoft Power Automate",
      "UiPath",
      "Zapier",
      "Custom Solutions",
    ],
  },
  "sap-erp": {
    title: "SAP ERP Solutions",
    description:
      "Enterprise resource planning implementation and optimization.",
    fullDescription:
      "As a certified SAP partner, we provide comprehensive ERP solutions that integrate all aspects of your business. From implementation to optimization, our experts ensure you maximize your SAP investment.",
    features: [
      "SAP S/4HANA Implementation",
      "SAP Business One",
      "Module Customization",
      "Migration & Upgrade",
      "SAP Training & Support",
    ],
    benefits: [
      "Unified business processes",
      "Real-time business insights",
      "Improved collaboration",
      "Reduced IT complexity",
      "Scalable platform",
    ],
    technologies: ["SAP S/4HANA", "SAP Business One", "SAP FICO", "SAP MM"],
  },
  "cloud-platform": {
    title: "Cloud Platform Services",
    description:
      "Multi-cloud solutions for optimal performance and reliability.",
    fullDescription:
      "Navigate the cloud with confidence. Our multi-cloud expertise spans AWS, Azure, and Google Cloud, ensuring you choose the right platform and architecture for your specific needs.",
    features: [
      "AWS Cloud Architecture",
      "Microsoft Azure Solutions",
      "Google Cloud Platform",
      "Hybrid Cloud Setup",
      "Multi-Cloud Management",
    ],
    benefits: [
      "Reduce infrastructure costs",
      "Improve scalability",
      "Enhanced security",
      "Better disaster recovery",
      "Global reach",
    ],
    technologies: ["AWS", "Microsoft Azure", "Google Cloud", "Kubernetes"],
  },
  "hardware-infrastructure": {
    title: "Hardware & Infrastructure",
    description: "Enterprise hardware solutions from industry leaders.",
    fullDescription:
      "Build a robust IT infrastructure with enterprise-grade hardware from Dell, HP, and Huawei. Our solutions ensure reliability, performance, and longevity for your critical business operations.",
    features: [
      "Server Infrastructure",
      "Storage Solutions",
      "Workstation Deployment",
      "Hardware Maintenance",
      "Technology Refresh",
    ],
    benefits: [
      "High availability",
      "Improved performance",
      "Reduced downtime",
      "Better ROI",
      "Future-proof technology",
    ],
    technologies: [
      "Dell PowerEdge",
      "HP ProLiant",
      "Huawei Servers",
      "EMC Storage",
    ],
  },
  "microsoft-solutions": {
    title: "Microsoft Solutions",
    description: "Complete Microsoft ecosystem services.",
    fullDescription:
      "Maximize productivity with Microsoft's comprehensive suite of tools. From Office 365 to Azure infrastructure, we help you leverage the full power of Microsoft technologies.",
    features: [
      "Microsoft 365 Deployment",
      "Windows Server Solutions",
      "Active Directory Services",
      "Microsoft Teams Integration",
      "License Management",
    ],
    benefits: [
      "Improved collaboration",
      "Enhanced security",
      "Simplified management",
      "Cost-effective licensing",
      "Seamless integration",
    ],
    technologies: ["Microsoft 365", "Azure", "Windows Server", "Dynamics 365"],
  },
  "networking-telecom": {
    title: "Networking & Telecommunications",
    description: "Advanced networking solutions for modern businesses.",
    fullDescription:
      "Build a secure, reliable network infrastructure with our comprehensive networking solutions. From design to implementation and ongoing support, we ensure your network meets current and future demands.",
    features: [
      "Network Design & Setup",
      "Wireless Infrastructure",
      "Security & Firewall",
      "VPN & Remote Access",
      "Network Monitoring",
    ],
    benefits: [
      "Enhanced security",
      "Improved connectivity",
      "Better performance",
      "Reduced downtime",
      "Scalable infrastructure",
    ],
    technologies: ["Cisco", "Huawei", "Fortinet", "Aruba"],
  },
  "industrial-automation": {
    title: "Industrial Automation",
    description: "Smart manufacturing and Industry 4.0 solutions.",
    fullDescription:
      "Transform your manufacturing operations with ABB-powered industrial automation. From robotics to SCADA systems, we bring Industry 4.0 capabilities to your facility.",
    features: [
      "Robotics Integration",
      "Process Automation",
      "SCADA Systems",
      "IoT Solutions",
      "Predictive Maintenance",
    ],
    benefits: [
      "Increased production efficiency",
      "Reduced operational costs",
      "Improved quality control",
      "Better asset utilization",
      "Enhanced safety",
    ],
    technologies: ["ABB Robotics", "Siemens PLC", "SCADA", "IoT Platforms"],
  },
  "software-licensing": {
    title: "Software Licensing & Support",
    description: "Authorized licensing for enterprise software.",
    fullDescription:
      "Simplify software procurement and management with our comprehensive licensing services. As authorized partners, we provide competitive pricing and expert guidance on software asset management.",
    features: [
      "License Procurement",
      "Volume Licensing",
      "Software Asset Management",
      "Renewal Management",
      "Technical Support",
    ],
    benefits: [
      "Cost optimization",
      "Compliance assurance",
      "Simplified management",
      "Better vendor relationships",
      "Expert support",
    ],
    technologies: ["Microsoft", "SAP", "Google", "Adobe", "Oracle"],
  },
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const service = serviceId ? serviceData[serviceId] : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <Button onClick={() => navigate("/services")}>
            Back to Services
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Service Inquiry: ${service.title} - ${
      formData.company || formData.name
    }`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Service Interest: ${service.title}

Message:
${formData.message}
    `.trim();

    window.location.href = `mailto:maxenciombewe@synkwaresolutions.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    toast({
      title: "Email client opened",
      description: "Please send the email from your email client.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <Button
          variant="ghost"
          onClick={() => navigate("/services")}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Services
        </Button>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
              <p className="text-xl text-muted-foreground">
                {service.description}
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                {service.fullDescription}
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Key Features</h2>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Business Benefits</h2>
              <ul className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {service.technologies && (
              <div className="bg-card p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Technologies We Use</h2>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-card p-8 rounded-lg sticky top-24">
              <h2 className="text-2xl font-bold mb-4">Request Information</h2>
              <p className="text-muted-foreground mb-6 text-sm">
                Interested in this service? Fill out the form and we'll get back
                to you shortly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Full Name *
                  </label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Email *
                  </label>
                  <Input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Phone
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Company
                  </label>
                  <Input
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Message *
                  </label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about your needs..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Inquiry
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-xs text-muted-foreground mb-2">
                  Direct Contact:
                </p>
                <a
                  href="mailto:maxenciombewe@synkwaresolutions.com"
                  className="text-xs text-primary hover:underline block break-all"
                >
                  maxenciombewe@synkwaresolutions.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
