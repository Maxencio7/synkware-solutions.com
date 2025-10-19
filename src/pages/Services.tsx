import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useState } from 'react';
import { 
  Shield, 
  Cloud, 
  Bot, 
  Code, 
  Settings,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Server,
  Database,
  Network,
  Briefcase,
  Package,
  Cpu,
  HardDrive
} from 'lucide-react';

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const services = [
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Protecting your infrastructure, data, and systems with modern risk-based solutions aligned to ISO 27001 standards.',
      details: 'Our comprehensive cybersecurity services provide end-to-end protection for your digital assets. We conduct thorough security risk assessments to identify vulnerabilities, perform ethical penetration testing to validate defenses, and help you achieve compliance with international frameworks like ISO 27001, NIST, and GDPR. Our incident response team is available 24/7 to contain and remediate security breaches, while our training programs empower your staff to become the first line of defense against cyber threats.',
      features: [
        'Security Risk Assessments',
        'Penetration Testing',
        'Compliance Frameworks',
        'Incident Response',
        'Security Training'
      ],
      technologies: ['ISO 27001', 'NIST', 'SOC 2', 'PCI-DSS'],
      badge: 'Government Grade'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure & DevOps',
      description: 'Migrate, deploy, and scale applications using agile, cost-efficient cloud infrastructure.',
      details: 'Transform your IT infrastructure with cloud-native architecture. We design and implement robust cloud migration strategies that minimize downtime and maximize ROI. Our DevOps expertise enables continuous integration and deployment pipelines, automated infrastructure provisioning using Terraform and CloudFormation, and comprehensive monitoring solutions. We optimize cloud costs while ensuring high availability, disaster recovery, and scalability to meet your growing business demands.',
      features: [
        'Cloud Migration Strategy',
        'AWS/Azure Implementation',
        'DevOps Pipeline Setup',
        'Infrastructure as Code',
        'Monitoring & Optimization'
      ],
      technologies: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Terraform', 'Docker'],
      badge: 'Scalable'
    },
    {
      icon: Bot,
      title: 'AI & Automation Tools',
      description: 'From task automation to data modeling — we build custom tools powered by open-source intelligence and machine learning.',
      details: 'Leverage artificial intelligence to automate complex business processes and gain predictive insights. We develop custom AI solutions including intelligent chatbots for customer service, machine learning models for predictive analytics, and automated data processing pipelines. Our solutions integrate seamlessly with your existing systems, using open-source frameworks like TensorFlow and PyTorch to deliver cost-effective, scalable AI capabilities that drive operational efficiency and competitive advantage.',
      features: [
        'Process Automation',
        'Predictive Analytics',
        'Chatbot Development',
        'Data Processing',
        'ML Model Development'
      ],
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Python', 'Scikit-learn'],
      badge: 'Intelligent'
    },
    {
      icon: Code,
      title: 'Custom Software & Web3 Development',
      description: 'Bespoke software solutions and blockchain applications tailored to your specific business requirements.',
      details: 'We build custom software that perfectly aligns with your unique business processes. From modern web applications using React and Next.js to native mobile apps for iOS and Android, we deliver high-quality, maintainable code. Our Web3 expertise includes blockchain development, smart contract creation on Ethereum and Solana, DeFi protocol implementation, and NFT marketplace development. We follow agile methodologies to ensure rapid iteration and delivery of value.',
      features: [
        'Web Application Development',
        'Mobile App Development',
        'Blockchain Solutions',
        'Smart Contracts',
        'DeFi Applications'
      ],
      technologies: ['React', 'Node.js', 'Solidity', 'Ethereum', 'Solana', 'Web3.js'],
      badge: 'Future-Ready'
    },
    {
      icon: Settings,
      title: 'IT Consulting',
      description: 'Strategic technology consulting to align your IT infrastructure with business objectives and industry best practices.',
      details: 'Our experienced consultants provide strategic guidance to help you make informed technology decisions. We assess your current IT landscape, identify gaps and opportunities, and develop comprehensive digital transformation roadmaps. From vendor selection and contract negotiation to project management and change management, we ensure successful technology initiatives. Our training programs equip your team with the skills needed to leverage new technologies effectively.',
      features: [
        'Digital Strategy',
        'Technology Assessment',
        'Vendor Selection',
        'Project Management',
        'Training & Support'
      ],
      technologies: ['ITIL', 'TOGAF', 'Agile', 'Scrum', 'PMP'],
      badge: 'Strategic'
    },
    {
      id: 'sap-erp',
      icon: Database,
      title: 'SAP ERP Solutions',
      description: 'Enterprise resource planning implementation and optimization to streamline your business processes.',
      details: 'As a certified SAP partner, we deliver comprehensive ERP solutions that unify all aspects of your business operations. We specialize in SAP S/4HANA implementation for large enterprises and SAP Business One for SMEs. Our services include module customization, system integration, data migration, and ongoing support. We help you leverage SAP to achieve real-time visibility, streamline processes, and make data-driven decisions that accelerate growth.',
      features: [
        'SAP S/4HANA Implementation',
        'SAP Business One',
        'Module Customization',
        'Migration & Upgrade',
        'SAP Training & Support'
      ],
      technologies: ['SAP S/4HANA', 'SAP Business One', 'SAP FICO', 'SAP MM', 'SAP SD'],
      badge: 'Enterprise'
    },
    {
      id: 'cloud-platform',
      icon: Server,
      title: 'Cloud Platform Services',
      description: 'Multi-cloud solutions leveraging AWS, Azure, and Google Cloud for optimal performance and reliability.',
      details: 'Navigate the cloud landscape with expert guidance across multiple platforms. We architect scalable, secure cloud solutions using AWS, Microsoft Azure, and Google Cloud Platform. Our multi-cloud approach prevents vendor lock-in while optimizing costs and performance. We implement hybrid cloud strategies that seamlessly integrate on-premises infrastructure with cloud services, ensuring business continuity and flexibility as your needs evolve.',
      features: [
        'AWS Cloud Architecture',
        'Microsoft Azure Solutions',
        'Google Cloud Platform',
        'Hybrid Cloud Setup',
        'Multi-Cloud Management'
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Hybrid Cloud', 'Cloud Migration'],
      badge: 'Multi-Cloud'
    },
    {
      id: 'hardware-infrastructure',
      icon: HardDrive,
      title: 'Hardware & Infrastructure',
      description: 'Enterprise hardware solutions from industry leaders including Dell, HP, and Huawei.',
      details: 'Build a robust IT foundation with enterprise-grade hardware from industry leaders. As authorized partners of Dell, HP, and Huawei, we provide server infrastructure, storage solutions, and workstation deployments backed by manufacturer warranties. Our hardware maintenance services ensure maximum uptime, while our technology refresh programs keep your infrastructure modern and efficient. We design data center solutions that balance performance, reliability, and cost-effectiveness.',
      features: [
        'Server Infrastructure',
        'Storage Solutions',
        'Workstation Deployment',
        'Hardware Maintenance',
        'Technology Refresh'
      ],
      technologies: ['Dell PowerEdge', 'HP ProLiant', 'Huawei Servers', 'EMC Storage', 'NetApp'],
      badge: 'Reliable'
    },
    {
      id: 'microsoft-solutions',
      icon: Briefcase,
      title: 'Microsoft Solutions',
      description: 'Complete Microsoft ecosystem services from Office 365 to enterprise cloud infrastructure.',
      details: 'Maximize productivity and collaboration with Microsoft\'s comprehensive technology suite. We deploy and manage Microsoft 365 environments, including Exchange, SharePoint, and Teams. Our Windows Server expertise covers Active Directory, Group Policy, and infrastructure management. We help you optimize licensing costs through strategic volume agreements and provide ongoing support to ensure your Microsoft investments deliver maximum value.',
      features: [
        'Microsoft 365 Deployment',
        'Windows Server Solutions',
        'Active Directory Services',
        'Microsoft Teams Integration',
        'License Management'
      ],
      technologies: ['Microsoft 365', 'Azure AD', 'Windows Server', 'Exchange', 'SharePoint'],
      badge: 'Productivity'
    },
    {
      id: 'networking-telecom',
      icon: Network,
      title: 'Networking & Telecommunications',
      description: 'Advanced networking solutions powered by Huawei, ABB, and industry-leading technologies.',
      details: 'Design and implement secure, high-performance network infrastructure. We provide end-to-end networking solutions including LAN/WAN design, wireless infrastructure, SD-WAN implementation, and network security. Our expertise spans Cisco, Huawei, and Fortinet technologies. We implement robust VPN solutions for secure remote access, deploy next-generation firewalls, and provide 24/7 network monitoring to ensure optimal performance and security.',
      features: [
        'Network Design & Setup',
        'Wireless Infrastructure',
        'Security & Firewall',
        'VPN & Remote Access',
        'Network Monitoring'
      ],
      technologies: ['Cisco', 'Huawei', 'Fortinet', 'Aruba', 'SD-WAN', 'Wi-Fi 6'],
      badge: 'Connected'
    },
    {
      id: 'industrial-automation',
      icon: Cpu,
      title: 'Industrial Automation',
      description: 'Smart manufacturing and industrial automation solutions leveraging ABB technologies.',
      details: 'Transform your manufacturing operations with Industry 4.0 technologies. As an ABB partner, we integrate industrial robotics, implement SCADA systems for real-time monitoring and control, and deploy IoT sensors for predictive maintenance. Our automation solutions increase production efficiency, reduce downtime, and improve quality control. We design smart factory systems that provide complete visibility and control over your manufacturing processes.',
      features: [
        'Robotics Integration',
        'Process Automation',
        'SCADA Systems',
        'IoT Solutions',
        'Predictive Maintenance'
      ],
      technologies: ['ABB Robotics', 'Siemens PLC', 'SCADA', 'Industrial IoT', 'OPC UA'],
      badge: 'Industry 4.0'
    },
    {
      id: 'software-licensing',
      icon: Package,
      title: 'Software Licensing & Support',
      description: 'Authorized licensing and support for Microsoft, SAP, Google, and enterprise software solutions.',
      details: 'Simplify software procurement and management through our authorized partnerships. We provide competitive pricing on enterprise software licenses from Microsoft, SAP, Google, Adobe, and other leading vendors. Our software asset management services ensure compliance, optimize costs, and track license utilization. We manage renewals proactively and provide technical support to maximize the value of your software investments.',
      features: [
        'License Procurement',
        'Volume Licensing',
        'Software Asset Management',
        'Renewal Management',
        'Technical Support'
      ],
      technologies: ['Microsoft', 'SAP', 'Google Workspace', 'Adobe', 'Oracle', 'Autodesk'],
      badge: 'Certified Partner'
    }
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
                Comprehensive technology solutions designed to secure, scale, and synchronize your business operations.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-gradient-to-b from-primary-dark/50 to-primary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Collapsible
                  key={index}
                  open={expandedIndex === index}
                  onOpenChange={(open) => setExpandedIndex(open ? index : null)}
                >
                  <Card className="shadow-luxury gradient-card border-accent/20 hover:shadow-glow transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 gradient-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <service.icon size={24} className="text-accent-foreground" />
                          </div>
                          <div>
                            <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
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
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle size={16} className="text-accent flex-shrink-0" />
                            <span className="text-sm text-card-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <CollapsibleContent className="space-y-4 animate-accordion-down">
                        <div className="pt-4 border-t border-accent/20">
                          <h4 className="text-sm font-semibold text-primary mb-3">About This Service</h4>
                          <p className="text-sm text-card-foreground/80 leading-relaxed mb-4">
                            {service.details}
                          </p>
                          
                          {service.technologies && (
                            <div>
                              <h4 className="text-sm font-semibold text-primary mb-2">Technologies & Tools</h4>
                              <div className="flex flex-wrap gap-2">
                                {service.technologies.map((tech, techIndex) => (
                                  <Badge key={techIndex} variant="outline" className="text-xs">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </CollapsibleContent>

                      <CollapsibleTrigger asChild>
                        <Button 
                          variant="outline" 
                          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mt-4"
                        >
                          {expandedIndex === index ? 'Show Less' : 'Learn More'}
                          {expandedIndex === index ? (
                            <ChevronUp size={16} className="ml-2" />
                          ) : (
                            <ChevronDown size={16} className="ml-2" />
                          )}
                        </Button>
                      </CollapsibleTrigger>
                    </CardContent>
                  </Card>
                </Collapsible>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gradient-to-b from-primary/30 to-primary-dark/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary-foreground mb-4">Our Approach</h2>
              <p className="text-primary-foreground/80 text-lg">
                A proven methodology that ensures successful project delivery
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery', description: 'We analyze your needs and understand your business objectives.' },
                { step: '02', title: 'Strategy', description: 'We develop a comprehensive solution strategy tailored to your requirements.' },
                { step: '03', title: 'Implementation', description: 'We execute the solution using agile methodologies and best practices.' },
                { step: '04', title: 'Support', description: 'We provide ongoing support and optimization to ensure continued success.' }
              ].map((process, index) => (
                <Card key={index} className="text-center shadow-luxury gradient-card border-accent/20">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-gold">
                      <span className="text-accent-foreground font-bold text-lg">{process.step}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-3">{process.title}</h3>
                    <p className="text-card-foreground text-sm">{process.description}</p>
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
                <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
                <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our services can help you achieve your technology goals and drive your business forward.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="shadow-elegant">
                    Book a Consultation
                  </Button>
                  <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    Download Company Profile
                  </Button>
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