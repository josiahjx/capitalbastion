'use client';
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CTA from '../components/CTA';

export default function FAQPage() {
  const [openItem, setOpenItem] = useState(null);

  const faqCategories = [
    {
      title: "General Questions",
      icon: "fas fa-question-circle",
      questions: [
        {
          question: "What is cryptocurrency recovery?",
          answer: "Cryptocurrency recovery is the process of attempting to regain access to lost, stolen, or inaccessible digital assets. This can include recovering private keys, tracing stolen funds, or helping with legal recovery processes."
        },
        {
          question: "How much does recovery cost?",
          answer: "We operate on a 'No Recovery, No Fee' basis. Initial consultations are always free, and we only charge if we successfully recover your assets. Fees are typically a percentage of recovered funds, agreed upon upfront."
        },
        {
          question: "What is your success rate?",
          answer: "Our success rate is approximately 95% for cases we accept. However, not all cases are recoverable. We provide honest assessments during initial consultations about the likelihood of success."
        },
        {
          question: "How long does recovery take?",
          answer: "Recovery time varies significantly based on the complexity of the case. Simple cases might take days, while complex ones can take weeks or months. We provide timeline estimates during initial assessment."
        }
      ]
    },
    {
      title: "Private Key Recovery",
      icon: "fas fa-key",
      questions: [
        {
          question: "Can you recover lost private keys?",
          answer: "Yes, we can attempt recovery of lost private keys through various methods including cryptographic analysis, hardware forensics, and advanced recovery techniques. Success depends on the specific circumstances."
        },
        {
          question: "What if my hardware wallet is damaged?",
          answer: "We have specialized equipment and techniques to recover data from damaged hardware wallets. Even severely damaged devices can often be recovered using advanced forensic methods."
        },
        {
          question: "Can you recover from seed phrases?",
          answer: "Yes, we can help reconstruct or recover seed phrases through various methods. This is often more successful than direct private key recovery."
        },
        {
          question: "Is it safe to share my wallet information?",
          answer: "Absolutely. We maintain the highest standards of confidentiality and security. All information is encrypted and handled with strict privacy protocols. We never store sensitive data unnecessarily."
        }
      ]
    },
    {
      title: "Stolen Funds Recovery",
      icon: "fas fa-user-shield",
      questions: [
        {
          question: "Can you trace stolen cryptocurrency?",
          answer: "Yes, we use blockchain forensics to trace stolen funds across multiple addresses and exchanges. We can often identify where funds have been moved and work with exchanges to freeze assets when possible."
        },
        {
          question: "What if my exchange account was hacked?",
          answer: "We can assist with exchange account recovery by working with the exchange's security teams, providing evidence of the hack, and helping navigate their recovery processes."
        },
        {
          question: "Do you work with law enforcement?",
          answer: "Yes, we work closely with law enforcement agencies when appropriate. We can provide forensic evidence and expert testimony to support criminal investigations."
        },
        {
          question: "Can you recover from phishing attacks?",
          answer: "We can attempt to trace funds stolen through phishing attacks and work with exchanges to freeze accounts when possible. However, recovery success depends on how quickly the attack is reported."
        }
      ]
    },
    {
      title: "Wrong Transactions",
      icon: "fas fa-exchange-alt",
      questions: [
        {
          question: "What if I sent crypto to the wrong address?",
          answer: "We can analyze the transaction and attempt to contact the recipient for voluntary return. If the address is active, we may be able to negotiate recovery of some or all funds."
        },
        {
          question: "Can you recover cross-chain transactions?",
          answer: "Yes, we can assist with cross-chain transaction recovery. This often involves working with multiple exchanges and blockchain networks to trace and recover funds."
        },
        {
          question: "What if I sent to the wrong network?",
          answer: "We can help recover funds sent to incorrect networks by working with exchanges that support both networks or by attempting to access the funds through specialized methods."
        },
        {
          question: "How do you contact recipients?",
          answer: "We use various methods including blockchain analysis, exchange cooperation, and public records to attempt to contact recipients. We always approach this professionally and legally."
        }
      ]
    },
    {
      title: "Legal & Inheritance",
      icon: "fas fa-gavel",
      questions: [
        {
          question: "Can you help with inheritance cases?",
          answer: "Yes, we specialize in digital asset inheritance cases. We work with legal professionals to ensure proper documentation and compliance with inheritance laws."
        },
        {
          question: "What documentation do I need?",
          answer: "For inheritance cases, you'll need death certificates, wills, court orders, and proof of relationship. We'll guide you through the specific requirements for your situation."
        },
        {
          question: "Do you work with lawyers?",
          answer: "Yes, we work closely with legal professionals and can provide expert testimony and forensic evidence to support legal proceedings."
        },
        {
          question: "What about international cases?",
          answer: "We handle international cases and work with legal professionals familiar with cross-border inheritance and recovery laws."
        }
      ]
    },
    {
      title: "Process & Security",
      icon: "fas fa-shield-alt",
      questions: [
        {
          question: "How do I start the recovery process?",
          answer: "Contact us for a free initial consultation. We'll assess your case, explain the recovery process, and provide honest feedback about the likelihood of success."
        },
        {
          question: "What information do you need?",
          answer: "We'll need details about your situation, any relevant transaction hashes, wallet addresses, and documentation. We'll guide you through what's needed for your specific case."
        },
        {
          question: "How do you protect my privacy?",
          answer: "We use enterprise-grade encryption, secure communication channels, and strict confidentiality protocols. Your privacy and security are our top priorities."
        },
        {
          question: "Do you guarantee recovery?",
          answer: "We cannot guarantee recovery as not all cases are recoverable. However, we provide honest assessments and only charge fees if we successfully recover your assets."
        }
      ]
    }
  ];

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="font-sans bg-gray-50">
    
      
      {/* Hero Section */}
      <section className="page-hero text-white">
        <div className="site-wrap py-16 md:py-20">
          <p className="eyebrow">FAQ</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold text-white md:text-5xl">Frequently asked questions</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/75">
            Find answers to common questions about cryptocurrency recovery services and our processes.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-gray-50 rounded-xl p-8 md:w-[60%] mx-auto">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <i className={`${category.icon} text-blue-600 text-xl`}></i>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">{category.title}</h2>
                </div>
                
                <div className="space-y-4">
                  {category.questions.map((item, itemIndex) => {
                    const globalIndex = categoryIndex * 100 + itemIndex;
                    const isOpen = openItem === globalIndex;
                    
                    return (
                      <div key={itemIndex} className="bg-white rounded-lg border border-gray-200">
                        <button
                          className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition"
                          onClick={() => toggleItem(globalIndex)}
                        >
                          <span className="font-semibold text-gray-800">{item.question}</span>
                          <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'} text-blue-600 transition-transform`}></i>
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 pb-4">
                            <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Still Have Questions?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our team is here to help with your specific situation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition">
              Contact Us
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition">
              <i className="fas fa-phone-alt mr-2"></i> (888) 555-TOKEN
            </button>
          </div>
        </div>
      </section> */}

      <CTA />
    </div>
  );
}
