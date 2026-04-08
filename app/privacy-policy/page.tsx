import { Metadata } from 'next'
import Header from '@/components/Header.simple'
import AppStoreFooter from '@/components/AppStoreFooter'
import { Shield, Eye, Database, User, Lock, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy - Drivr | Professional Driver Services',
  description: 'Read Drivr\'s comprehensive privacy policy. Learn how we collect, use, and protect your personal information when you book professional drivers through our platform.',
  keywords: ['privacy policy', 'data protection', 'personal information', 'driver service privacy', 'drivr privacy', 'user data security'],
  openGraph: {
    title: 'Privacy Policy - Drivr | Professional Driver Services',
    description: 'Read Drivr\'s comprehensive privacy policy. Learn how we collect, use, and protect your personal information.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy - Drivr | Professional Driver Services',
    description: 'Read Drivr\'s comprehensive privacy policy and learn about our data protection practices.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicyPage() {
  const sections = [
    {
      icon: Eye,
      title: 'Information We Collect',
      content: [
        'Personal identification information (name, email, phone number)',
        'Location data for pickup and drop-off services',
        'Payment information and billing details',
        'Vehicle information for driver assignments',
        'Communication records and customer support interactions',
        'Usage data and app analytics'
      ]
    },
    {
      icon: Database,
      title: 'How We Use Your Information',
      content: [
        'To process driver bookings and assignments',
        'To provide customer support and service improvements',
        'To process payments and manage billing',
        'To communicate service updates and notifications',
        'To maintain platform security and prevent fraud',
        'To comply with legal and regulatory requirements'
      ]
    },
    {
      icon: Shield,
      title: 'Data Protection Measures',
      content: [
        'SSL encryption for all data transmissions',
        'Secure storage of personal and payment information',
        'Regular security audits and vulnerability assessments',
        'Limited employee access to sensitive data',
        'Compliance with data protection regulations',
        'Secure authentication and access controls'
      ]
    },
    {
      icon: User,
      title: 'Your Rights and Choices',
      content: [
        'Access to your personal data upon request',
        'Correction of inaccurate information',
        'Deletion of your account and associated data',
        'Opt-out of marketing communications',
        'Data portability to other services',
        'Control over location sharing preferences'
      ]
    },
    {
      icon: Lock,
      title: 'Data Sharing and Disclosure',
      content: [
        'Information shared with assigned drivers for service fulfillment',
        'Payment processors for transaction processing',
        'Service providers for platform operations',
        'Legal authorities when required by law',
        'Business partners with explicit consent',
        'Third-party analytics in anonymized form'
      ]
    },
    {
      icon: Globe,
      title: 'International Data Transfers',
      content: [
        'Data may be transferred to servers in different countries',
        'Adequate protection measures for international transfers',
        'Compliance with cross-border data regulations',
        'Standard contractual clauses for international transfers',
        'User consent for international data processing',
        'Regular review of international data practices'
      ]
    }
  ]

  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 min-h-screen">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Your privacy is important to us. This policy explains how we collect, 
                use, and protect your information when you use Drivr's professional driver services.
              </p>
              <div className="text-sm text-slate-500 mt-4">
                Last updated: {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-12">
              {sections.map((section, index) => {
                const Icon = section.icon
                return (
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900">
                        {section.title}
                      </h2>
                    </div>
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                          <span className="text-slate-600 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>

            {/* Contact Section */}
            <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Questions About Your Privacy?</h2>
              <p className="text-blue-100 mb-6">
                If you have any questions about this privacy policy or how we handle your data, 
                please don't hesitate to contact us.
              </p>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="font-medium mb-2">Contact us at:</p>
                <p className="text-blue-100">Email: privacy@drivr.co.in</p>
                <p className="text-blue-100">Phone: +91-XXX-XXX-XXXX</p>
              </div>
            </div>

            {/* Footer Info */}
            <div className="mt-12 text-center text-slate-500 text-sm">
              <p>
                This privacy policy is part of our commitment to transparency and user protection. 
                By using Drivr, you agree to the collection and use of information as described in this policy.
              </p>
            </div>
          </div>
        </div>
      </main>
      <AppStoreFooter />
    </>
  )
}
