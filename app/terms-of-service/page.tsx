import { Metadata } from 'next'
import Header from '@/components/Header'
import AppStoreFooter from '@/components/AppStoreFooter'
import { FileText, Users, Car, Shield, AlertCircle, CreditCard } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service - Drivr | Professional Driver Services',
  description: 'Read Drivr\'s terms of service for professional driver rentals. Understand your rights, responsibilities, and service agreements when booking drivers through our platform.',
  keywords: ['terms of service', 'service agreement', 'driver rental terms', 'drivr terms', 'user agreement', 'professional driver services'],
  openGraph: {
    title: 'Terms of Service - Drivr | Professional Driver Services',
    description: 'Read Drivr\'s terms of service for professional driver rentals. Understand your rights and responsibilities.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service - Drivr | Professional Driver Services',
    description: 'Read Drivr\'s terms of service and understand your rights when using our driver platform.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsOfServicePage() {
  const sections = [
    {
      icon: FileText,
      title: 'Service Agreement',
      content: [
        'Drivr provides a platform connecting customers with professional drivers',
        'Service is subject to availability and driver acceptance',
        'Booking confirmation constitutes a binding agreement',
        'Services are provided on an as-available basis',
        'Platform reserves right to modify service offerings',
        'Users must comply with all applicable laws and regulations'
      ]
    },
    {
      icon: Users,
      title: 'User Responsibilities',
      content: [
        'Provide accurate and complete booking information',
        'Ensure vehicle is in safe operating condition',
        'Treat drivers with respect and professionalism',
        'Pay for services as agreed upon booking',
        'Follow safety guidelines and instructions',
        'Report any issues or concerns promptly'
      ]
    },
    {
      icon: Car,
      title: 'Driver Responsibilities',
      content: [
        'Maintain valid driver license and insurance',
        'Arrive on time for scheduled assignments',
        'Provide professional and courteous service',
        'Follow traffic laws and safety regulations',
        'Maintain vehicle cleanliness and care',
        'Respect customer privacy and confidentiality'
      ]
    },
    {
      icon: Shield,
      title: 'Safety and Insurance',
      content: [
        'Drivers must maintain adequate insurance coverage',
        'Customers must have valid vehicle insurance',
        'Platform provides liability coverage where applicable',
        'Safety guidelines must be followed at all times',
        'Emergency procedures must be clearly communicated',
        'Incident reporting required for all accidents'
      ]
    },
    {
      icon: CreditCard,
      title: 'Payment and Billing',
      content: [
        'Payment required at time of booking confirmation',
        'Additional charges may apply for extended services',
        'Refund policy varies by service type',
        'Disputed charges investigated within 5 business days',
        'Late cancellation fees may apply',
        'Corporate billing available for qualified accounts'
      ]
    },
    {
      icon: AlertCircle,
      title: 'Limitations and Disclaimers',
      content: [
        'Service availability not guaranteed in all areas',
        'Platform acts as intermediary, not direct service provider',
        'Not responsible for third-party driver actions',
        'Weather and traffic conditions may affect service',
        'Force majeure events may suspend service',
        'User assumes certain risks inherent in transportation'
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
                Terms of Service
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                These terms govern your use of Drivr&apos;s professional driver services. 
                By booking through our platform, you agree to these terms and conditions.
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

            {/* Legal Notice */}
            <div className="mt-16 bg-amber-50 border-2 border-amber-200 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-amber-900 mb-3">
                    Important Legal Notice
                  </h3>
                  <p className="text-amber-800 leading-relaxed">
                    These terms of service constitute a legally binding agreement. 
                    Please read them carefully before using our services. If you do not 
                    agree to these terms, you should not use Drivr&apos;s platform or services.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Questions About Our Terms?</h2>
              <p className="text-blue-100 mb-6">
                If you need clarification on any aspect of our terms of service, 
                our legal team is here to help.
              </p>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="font-medium mb-2">Legal contact:</p>
                <p className="text-blue-100">Email: legal@drivr.co.in</p>
                <p className="text-blue-100">Phone: +91-XXX-XXX-XXXX</p>
              </div>
            </div>

            {/* Footer Info */}
            <div className="mt-12 text-center text-slate-500 text-sm">
              <p>
                By using Drivr&apos;s services, you acknowledge that you have read, 
                understood, and agree to be bound by these terms of service. 
                These terms may be updated periodically, and continued use constitutes 
                acceptance of any changes.
              </p>
            </div>
          </div>
        </div>
      </main>
      <AppStoreFooter />
    </>
  )
}
