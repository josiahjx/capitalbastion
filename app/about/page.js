'use client';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CTA from '../components/CTA';

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      position: "Chief Executive Officer",
      bio: "Former FBI cybercrime investigator with 15+ years in blockchain forensics. Led recovery of over $200M in stolen cryptocurrency assets.",
      expertise: ["Blockchain Forensics", "Cybercrime Investigation", "Digital Asset Recovery"],
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Michael Rodriguez",
      position: "Chief Technology Officer",
      bio: "Cryptography expert with PhD from MIT. Developed proprietary recovery algorithms used by law enforcement agencies worldwide.",
      expertise: ["Cryptography", "Algorithm Development", "Hardware Forensics"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Jennifer Park",
      position: "Head of Legal Operations",
      bio: "International law specialist with focus on digital asset inheritance and cross-border recovery cases.",
      expertise: ["International Law", "Digital Asset Law", "Inheritance Cases"],
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "David Thompson",
      position: "Senior Recovery Specialist",
      bio: "Former NSA cryptanalyst with expertise in hardware wallet recovery and advanced forensic techniques.",
      expertise: ["Hardware Recovery", "Cryptanalysis", "Forensic Analysis"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const locations = [
    {
      city: "New York",
      country: "United States",
      address: "350 5th Avenue, Suite 2000",
      zip: "NY 10118",
      phone: "+1 (212) 555-0123",
      email: "nyc@CapitalBastionforensics.com",
      hours: "Mon-Fri: 9AM-6PM EST",
      services: ["Private Key Recovery", "Exchange Recovery", "Legal Cases"]
    },
    {
      city: "London",
      country: "United Kingdom",
      address: "30 St Mary Axe, Level 20",
      zip: "EC3A 8BF",
      phone: "+44 20 7123 4567",
      email: "london@CapitalBastionforensics.com",
      hours: "Mon-Fri: 9AM-6PM GMT",
      services: ["International Recovery", "Cross-border Cases", "European Operations"]
    },
    {
      city: "Singapore",
      country: "Singapore",
      address: "50 Raffles Place, #32-01",
      zip: "048623",
      phone: "+65 6789 0123",
      email: "singapore@CapitalBastionforensics.com",
      hours: "Mon-Fri: 9AM-6PM SGT",
      services: ["APAC Operations", "Exchange Partnerships", "Regional Recovery"]
    },
    {
      city: "Dubai",
      country: "United Arab Emirates",
      address: "Sheikh Zayed Road, Floor 25",
      zip: "Dubai 00000",
      phone: "+971 4 123 4567",
      email: "dubai@CapitalBastionforensics.com",
      hours: "Sun-Thu: 9AM-6PM GST",
      services: ["Middle East Operations", "Islamic Finance", "Regional Cases"]
    }
  ];

  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description: "CapitalBastionForensics established by former law enforcement and cybersecurity experts."
    },
    {
      year: "2019",
      title: "First Major Recovery",
      description: "Successfully recovered $2.3M in stolen cryptocurrency from a major exchange hack."
    },
    {
      year: "2020",
      title: "International Expansion",
      description: "Opened offices in London and Singapore to serve global clients."
    },
    {
      year: "2021",
      title: "100th Recovery",
      description: "Reached milestone of 100 successful recoveries with $15M+ in assets recovered."
    },
    {
      year: "2022",
      title: "Law Enforcement Partnership",
      description: "Formal partnerships with FBI, Interpol, and Europol for cybercrime investigations."
    },
    {
      year: "2023",
      title: "Dubai Office",
      description: "Expanded to Middle East with Dubai office to serve regional markets."
    },
    {
      year: "2024",
      title: "Industry Recognition",
      description: "Named 'Top Cryptocurrency Recovery Firm' by Blockchain Security Association."
    }
  ];

  const values = [
    {
      icon: "fas fa-shield-alt",
      title: "Security First",
      description: "We maintain the highest standards of data protection and confidentiality in all our operations."
    },
    {
      icon: "fas fa-handshake",
      title: "Trust & Transparency",
      description: "We believe in complete transparency with our clients and only charge fees when we succeed."
    },
    {
      icon: "fas fa-graduation-cap",
      title: "Continuous Innovation",
      description: "Our team constantly develops new techniques and tools to stay ahead of evolving threats."
    },
    {
      icon: "fas fa-globe",
      title: "Global Reach",
      description: "We serve clients worldwide with offices in major financial centers across the globe."
    }
  ];

  return (
    <div className="font-sans bg-gray-50">
    
      
      {/* Hero Section */}
      <section className="page-hero text-white">
        <div className="site-wrap py-16 text-left md:py-20">
          <p className="eyebrow">About</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold text-white md:text-5xl">About CapitalBastion</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/75">
            Leading the world in cryptocurrency recovery with cutting-edge technology, 
            proven expertise, and unwavering commitment to our clients.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2018 by former law enforcement and cybersecurity experts, 
                CapitalBastionForensics has become the world's premier cryptocurrency recovery firm. 
                Our team combines decades of experience in blockchain forensics, cryptography, 
                and cybercrime investigation.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We've successfully recovered over $5M in digital assets across 141+ cases, 
                helping individuals, businesses, and institutions regain access to their 
                lost or stolen cryptocurrency holdings.
              </p>
              <p className="text-lg text-gray-600">
                Our mission is simple: to provide hope and solutions when all seems lost. 
                We believe that no one should lose their digital wealth due to technical 
                issues, human error, or malicious attacks.
              </p>
            </div>
            <div className="bg-gray-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Statistics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Successful Recoveries</span>
                  <span className="text-2xl font-bold text-blue-600">140+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Assets Recovered</span>
                  <span className="text-2xl font-bold text-blue-600">$5M+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Success Rate</span>
                  <span className="text-2xl font-bold text-blue-600">95%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Global Offices</span>
                  <span className="text-2xl font-bold text-blue-600">4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${value.icon} text-blue-600 text-2xl`}></i>
                </div>
                <h3 className="text-xl text-gray-800 font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="space-y-1">
                  {member.expertise.map((skill, skillIndex) => (
                    <span key={skillIndex} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-1 mb-1">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="w-1/2 px-8">
                    <div className={`bg-white rounded-xl p-6 shadow-lg ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl text-gray-800 font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Global Offices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <i className="fas fa-map-marker-alt text-blue-600"></i>
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-800 font-semibold">{location.city}</h3>
                    <p className="text-gray-600">{location.country}</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <p className="text-gray-600">{location.address}</p>
                  <p className="text-gray-600">{location.zip}</p>
                  <p className="text-gray-600">{location.phone}</p>
                  <p className="text-gray-600">{location.email}</p>
                  <p className="text-gray-600">{location.hours}</p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="font-semibold mb-2">Services Offered:</h4>
                  <div className="space-y-1">
                    {location.services.map((service, serviceIndex) => (
                      <span key={serviceIndex} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-1 mb-1">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
 
    </div>
  );
}
