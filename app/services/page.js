import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CTA from '../components/CTA';

export default function ServicesPage() {
  const services = [
    {
      icon: "fas fa-key",
      title: "Lost Private Keys Recovery",
      description: "Recover access to wallets when private keys are lost, damaged, or forgotten through advanced cryptographic techniques.",
      details: [
        "Advanced cryptographic analysis and brute force techniques",
        "Hardware wallet recovery from damaged devices",
        "Seed phrase reconstruction and recovery",
        "Multi-signature wallet recovery",
        "Cold storage access restoration"
      ],
      process: "Our team uses specialized software and hardware tools to attempt recovery of your private keys through various methods including cryptographic analysis, hardware forensics, and advanced recovery techniques."
    },
    {
      icon: "fas fa-user-lock",
      title: "Hacked Account Recovery",
      description: "Trace and recover funds stolen through phishing attacks, exchange hacks, or malware infections.",
      details: [
        "Blockchain transaction tracing and analysis",
        "Exchange account recovery assistance",
        "Phishing attack investigation and recovery",
        "Malware-infected device analysis",
        "Stolen funds tracking and recovery"
      ],
      process: "We employ blockchain forensics to trace stolen funds across multiple addresses and exchanges, working with law enforcement and exchanges to freeze and recover assets when possible."
    },
    {
      icon: "fas fa-exchange-alt",
      title: "Wrong Transaction Recovery",
      description: "Attempt recovery of funds sent to wrong addresses or incorrect networks through blockchain analysis.",
      details: [
        "Cross-chain transaction recovery",
        "Wrong network transfer assistance",
        "Recipient negotiation and recovery",
        "Exchange listing assistance for recovery",
        "Legal documentation for recovery claims"
      ],
      process: "When funds are sent to incorrect addresses, we analyze the transaction and attempt to contact the recipient for voluntary return, or assist with legal recovery processes."
    },
    {
      icon: "fas fa-hard-hat",
      title: "Hardware Wallet Issues",
      description: "Recover assets from damaged, lost, or malfunctioning hardware wallets using specialized techniques.",
      details: [
        "Damaged hardware wallet recovery",
        "Lost device recovery techniques",
        "Firmware corruption repair",
        "Physical damage assessment and recovery",
        "Backup restoration services"
      ],
      process: "Our hardware specialists can often recover data from damaged devices using specialized equipment and techniques, even when devices appear completely non-functional."
    },
    {
      icon: "fas fa-database",
      title: "Exchange Recovery",
      description: "Assist with recovering funds from defunct or frozen exchange accounts through legal channels.",
      details: [
        "Bankruptcy claim assistance",
        "Legal documentation preparation",
        "Exchange communication and negotiation",
        "Regulatory complaint assistance",
        "Asset recovery coordination"
      ],
      process: "We help navigate the complex legal processes involved in recovering funds from exchanges that have frozen accounts or gone bankrupt, including preparing necessary documentation."
    },
    {
      icon: "fas fa-gavel",
      title: "Inheritance & Legal Recovery",
      description: "Navigate inheritance laws and recover digital assets for estate beneficiaries.",
      details: [
        "Estate planning for digital assets",
        "Inheritance law compliance",
        "Legal documentation preparation",
        "Court-appointed executor assistance",
        "Beneficiary claim processing"
      ],
      process: "We work with legal professionals to ensure proper documentation and compliance with inheritance laws while recovering digital assets for beneficiaries."
    }
  ];

  return (
    <div className="font-sans bg-gray-50">
    
      
      {/* Hero Section */}
      <section className="page-hero text-white">
        <div className="site-wrap py-16 md:py-20">
          <p className="eyebrow">Services</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold text-white md:text-5xl">Recovery services</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/75">
            Comprehensive cryptocurrency recovery solutions backed by blockchain forensics expertise and proven success rates.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-white py-20">
        <div className=" px-6 w-full">
          <div className="w-full text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Vision & Mission</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              At CapitalBastionForensics, we believe that no one should lose access to their digital wealth due to technical issues, 
              human error, or malicious attacks. Our mission is to provide hope and solutions when all seems lost.
            </p>
            <div className="flex flex-col md:flex-row justify-between gap-8 mt-12 w-[100%]">
              <div className="text-left md:max-w-[30vw]"  >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center   mb-4">
                  <i className="fas fa-shield-alt text-blue-600 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Trust & Security</h3>
                <p className="text-gray-600">Your privacy and security are our top priorities. All consultations and recovery attempts are conducted with the highest standards of confidentiality.</p>
              </div>
                <div className="text-left md:max-w-[30vw]">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center  mb-4">
                  <i className="fas fa-chart-line text-blue-600 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Proven Success</h3>
                <p className="text-gray-600">With over 141 successful recoveries and $5M+ in assets recovered, our track record speaks for itself.</p>
              </div>
              <div className="text-left md:max-w-[30vw]">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center  mb-4">
                  <i className="fas fa-handshake text-blue-600 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">No Recovery, No Fee</h3>
                <p className="text-gray-600">We only charge if we successfully recover your assets. Initial consultations are always free with no obligation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Our Recovery Services</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            We specialize in various types of cryptocurrency recovery scenarios, each requiring unique expertise and techniques.
          </p>
          
          <div className="space-y-12">
            {services.map((service, index) => (
              <div key={index} id={["private-keys", "hacked-accounts", "wrong-transactions", "hardware-wallets", "exchange", "inheritance"][index]} className="soft-card scroll-mt-28 p-8">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="md:w-1/3">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                      <i className={`${service.icon} text-blue-600 text-3xl`}></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                  </div>
                  
                  <div className="md:w-2/3">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-4">What We Cover</h4>
                        <ul className="space-y-2">
                          {service.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start">
                              <i className="fas fa-check text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                              <span className="text-gray-600">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-4">Our Process</h4>
                        <p className="text-gray-600">{service.process}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
     

   <CTA />
    </div>
  );
}
