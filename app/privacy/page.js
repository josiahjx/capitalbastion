'use client';

import { useState } from 'react';
import CTA from '../components/CTA';

export default function PrivacyPage() {
  const [activeTab, setActiveTab] = useState('privacy');

  const tabs = [
    { id: 'privacy', label: 'Privacy Policy' },
    { id: 'terms', label: 'Terms of Service' }
  ];

  return (
    <>
      <section className="page-hero text-white">
        <div className="site-wrap py-16 md:py-20">
          <p className="eyebrow">Legal</p>
          <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">Legal information</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/75">
            How we handle your data, and the terms that apply when you work with us.
          </p>
        </div>
      </section>
      <div className="bg-paper px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-4xl">

          {/* Tab Navigation */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="border-b border-gray-200">
              <nav className="flex" aria-label="Tabs">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 px-6 py-4 text-sm font-medium text-center transition-colors ${
                      activeTab === tab.id
                        ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-700'
                        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="p-8">
              {activeTab === 'privacy' && (
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy Policy</h2>
                  
                  <div className="space-y-6 text-gray-700">
                    <section>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Information We Collect</h3>
                      <p className="mb-3">
                        We collect information you provide directly to us, such as when you:
                      </p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Create an account or register for our services</li>
                        <li>Contact us through our contact forms</li>
                        <li>Subscribe to our newsletters</li>
                        <li>Participate in surveys or promotions</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">2. How We Use Your Information</h3>
                      <p className="mb-3">We use the information we collect to:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Provide, maintain, and improve our services</li>
                        <li>Process transactions and send related information</li>
                        <li>Send technical notices, updates, and support messages</li>
                        <li>Respond to your comments and questions</li>
                        <li>Communicate with you about products, services, and events</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Information Sharing</h3>
                      <p>
                        We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information in the following circumstances:
                      </p>
                      <ul className="list-disc pl-6 space-y-1 mt-3">
                        <li>With your consent</li>
                        <li>To comply with legal obligations</li>
                        <li>To protect our rights and safety</li>
                        <li>In connection with a business transfer</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Data Security</h3>
                      <p>
                        We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Your Rights</h3>
                      <p className="mb-3">You have the right to:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Access your personal information</li>
                        <li>Correct inaccurate information</li>
                        <li>Request deletion of your information</li>
                        <li>Object to processing of your information</li>
                        <li>Withdraw consent at any time</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">6. Contact Us</h3>
                      <p>
                        If you have any questions about this Privacy Policy, please contact us at{' '}
                        <a href="mailto:privacy@CapitalBastion.com" className="text-blue-600 hover:text-blue-800">
                          privacy@CapitalBastion.com
                        </a>
                      </p>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">7. Updates to This Policy</h3>
                      <p>
                        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                      </p>
                      <p className="mt-3 text-sm text-gray-600">
                        <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
                      </p>
                    </section>
                  </div>
                </div>
              )}

              {activeTab === 'terms' && (
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Terms of Service</h2>
                  
                  <div className="space-y-6 text-gray-700">
                    <section>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h3>
                      <p>
                        By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Use License</h3>
                      <p className="mb-3">Permission is granted to temporarily download one copy of the materials (information or software) on CapitalBastion's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Modify or copy the materials</li>
                        <li>Use the materials for any commercial purpose or for any public display</li>
                        <li>Attempt to reverse engineer any software contained on the website</li>
                        <li>Remove any copyright or other proprietary notations from the materials</li>
                        <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Disclaimer</h3>
                      <p>
                        The materials on CapitalBastion's website are provided on an 'as is' basis. CapitalBastion makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Limitations</h3>
                      <p>
                        In no event shall CapitalBastion or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on CapitalBastion's website, even if CapitalBastion or a CapitalBastion authorized representative has been notified orally or in writing of the possibility of such damage.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Accuracy of Materials</h3>
                      <p>
                        The materials appearing on CapitalBastion's website could include technical, typographical, or photographic errors. CapitalBastion does not warrant that any of the materials on its website are accurate, complete, or current. CapitalBastion may make changes to the materials contained on its website at any time without notice.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">6. Links</h3>
                      <p>
                        CapitalBastion has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by CapitalBastion of the site. Use of any such linked website is at the user's own risk.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">7. Modifications</h3>
                      <p>
                        CapitalBastion may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms of Service.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">8. Governing Law</h3>
                      <p>
                        These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">9. Contact Information</h3>
                      <p>
                        If you have any questions about these Terms of Service, please contact us at{' '}
                        <a href="mailto:legal@CapitalBastion.com" className="text-blue-600 hover:text-blue-800">
                          legal@CapitalBastion.com
                        </a>
                      </p>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">10. Updates to Terms</h3>
                      <p>
                        We may update these Terms of Service from time to time. We will notify you of any changes by posting the new Terms of Service on this page and updating the "Last Updated" date.
                      </p>
                      <p className="mt-3 text-sm text-gray-600">
                        <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
                      </p>
                    </section>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <CTA />
    </>
  );
}
