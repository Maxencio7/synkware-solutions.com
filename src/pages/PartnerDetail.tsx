import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Mail, Phone, Building } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const partnerData: Record<
  string,
  {
    name: string;
    logo: string;
    description: string;
    services: string[];
    specialization: string;
  }
> = {
  microsoft: {
    name: "Microsoft",
    logo: "/src/assets/partner-microsoft.png",
    description:
      "As an authorized Microsoft partner, Synkware Solutions delivers comprehensive Microsoft ecosystem services.",
    services: [
      "Microsoft 365 Business & Enterprise Licensing",
      "Azure Cloud Infrastructure Setup & Management",
      "Windows Server Deployment & Support",
      "Microsoft Teams & Collaboration Solutions",
      "Power Platform Development (Power Apps, Power BI)",
      "Dynamics 365 Implementation",
      "Microsoft Security Solutions",
    ],
    specialization: "Cloud Productivity & Enterprise Solutions",
  },
  sap: {
    name: "SAP",
    logo: "/src/assets/partner-sap.png",
    description:
      "Certified SAP partner providing end-to-end ERP implementation and optimization services.",
    services: [
      "SAP S/4HANA Implementation & Migration",
      "SAP Business One for SMEs",
      "SAP Module Customization & Development",
      "SAP FICO, MM, SD, PP Modules",
      "SAP Training & Change Management",
      "SAP System Integration",
      "Ongoing SAP Support & Maintenance",
    ],
    specialization: "Enterprise Resource Planning",
  },
  dell: {
    name: "Dell Technologies",
    logo: "/src/assets/partner-dell.png",
    description:
      "Authorized Dell partner offering enterprise-grade hardware and infrastructure solutions.",
    services: [
      "Dell PowerEdge Servers",
      "Dell EMC Storage Solutions",
      "Workstation & Desktop Deployment",
      "Dell Networking Equipment",
      "Data Center Infrastructure",
      "Hardware Warranties & Support",
      "Technology Refresh Programs",
    ],
    specialization: "Enterprise Hardware & Infrastructure",
  },
  hp: {
    name: "HP Inc.",
    logo: "/src/assets/partner-hp.png",
    description:
      "Official HP partner providing business computing and printing solutions.",
    services: [
      "HP ProLiant Server Solutions",
      "HP Elite & Pro Business PCs",
      "HP Enterprise Printers & MFPs",
      "HP Workstation Solutions",
      "HP Networking Products",
      "Print Management Solutions",
      "HP Care Pack Services",
    ],
    specialization: "Business Computing & Printing",
  },
  aws: {
    name: "Amazon Web Services",
    logo: "/src/assets/partner-aws.png",
    description:
      "AWS certified partner delivering scalable cloud infrastructure and migration services.",
    services: [
      "AWS Cloud Architecture Design",
      "EC2, S3, RDS Deployment",
      "Cloud Migration Services",
      "AWS Security & Compliance",
      "Serverless Architecture (Lambda)",
      "AWS Cost Optimization",
      "DevOps & CI/CD on AWS",
    ],
    specialization: "Cloud Infrastructure & Services",
  },
  "4sight": {
    name: "4sight",
    logo: "/src/assets/partner-4sight.png",
    description:
      "Partnership with 4sight for specialized business intelligence and analytics solutions.",
    services: [
      "Business Intelligence Implementation",
      "Data Analytics Solutions",
      "Reporting & Dashboards",
      "Data Warehouse Design",
      "Predictive Analytics",
      "Data Integration Services",
      "BI Training & Support",
    ],
    specialization: "Business Intelligence & Analytics",
  },
  huawei: {
    name: "Huawei",
    logo: "/src/assets/partner-huawei.png",
    description:
      "Authorized Huawei partner for networking, telecommunications, and enterprise solutions.",
    services: [
      "Huawei Enterprise Networking",
      "Data Center Servers & Storage",
      "Wireless & 5G Solutions",
      "Cloud Data Center Infrastructure",
      "Video Conferencing Systems",
      "Security & Firewall Solutions",
      "Smart Campus Solutions",
    ],
    specialization: "Networking & Telecommunications",
  },
  google: {
    name: "Google Cloud",
    logo: "/src/assets/partner-google.png",
    description:
      "Google Cloud partner providing workspace and cloud platform solutions.",
    services: [
      "Google Workspace (Gmail, Drive, Meet)",
      "Google Cloud Platform (GCP)",
      "BigQuery & Data Analytics",
      "Google Kubernetes Engine",
      "Cloud Storage & Computing",
      "AI & Machine Learning Services",
      "Google Cloud Migration",
    ],
    specialization: "Workspace & Cloud Platform",
  },
  abb: {
    name: "ABB",
    logo: "/src/assets/partner-abb.png",
    description:
      "ABB partner specializing in industrial automation and smart manufacturing solutions.",
    services: [
      "Industrial Robotics Integration",
      "Process Automation Solutions",
      "SCADA & DCS Systems",
      "Motor Control & Drives",
      "PLC Programming & Integration",
      "Energy Management Systems",
      "Predictive Maintenance Solutions",
    ],
    specialization: "Industrial Automation & Control",
  },
  logpoint: {
    name: "Logpoint",
    logo: "/src/assets/partner-logpoint.png",
    description:
      "Authorized Logpoint partner delivering advanced SIEM, UEBA, and SOAR security solutions.",
    services: [
      "SIEM (Security Information & Event Management)",
      "UEBA (User & Entity Behavior Analytics)",
      "SOAR (Security Orchestration & Automated Response)",
      "Threat Intelligence Integration",
      "Security Operations Center (SOC) Setup",
      "Compliance & Audit Reporting",
      "24/7 Security Monitoring",
    ],
    specialization: "Cybersecurity & Threat Detection",
  },
};

const PartnerDetail = () => {
  const { partnerId } = useParams<{ partnerId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const partner = partnerId ? partnerData[partnerId] : null;

  if (!partner) {
    return (
      <div className="min-h-screen bg-primary">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Partner Not Found</h1>
          <Button onClick={() => navigate("/")}>Back to Home</Button>
        </div>
        <Footer />
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Partnership Inquiry: ${partner.name} - ${
      formData.company || formData.name
    }`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Partner Interest: ${partner.name}

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
    <div className="min-h-screen bg-primary">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <Button variant="ghost" onClick={() => navigate("/")} className="mb-8">
          <ArrowLeft className="mr-2 h-4 w-4 bg-primary/30" />
          Back to Home
        </Button>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="bg-card p-8 rounded-lg mb-8">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-20 object-contain mb-6"
              />
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm mb-4">
                {partner.specialization}
              </span>
              <h1 className="text-4xl font-bold mb-4">
                {partner.name} Solutions
              </h1>
              <p className="text-muted-foreground text-lg">
                {partner.description}
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Authorized Services</h2>
              <ul className="space-y-3">
                {partner.services.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg h-fit sticky top-24">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <p className="text-muted-foreground mb-6">
              Interested in {partner.name} solutions? Contact us to discuss your
              requirements.
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
                  Phone Number
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
                  Company Name
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
                  placeholder="Tell us about your requirements..."
                  rows={5}
                />
              </div>

              <Button type="submit" className="w-full">
                <Mail className="mr-2 h-4 w-4" />
                Send Inquiry
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-2">
                Direct Contact:
              </p>
              <a
                href="mailto:maxenciombewe@synkwaresolutions.com"
                className="text-sm text-primary hover:underline block"
              >
                maxenciombewe@synkwaresolutions.com
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PartnerDetail;
