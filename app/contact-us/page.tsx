import { Metadata } from 'next'
import Header from '@/components/Header'
import AppStoreFooter from '@/components/AppStoreFooter'
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Users, Building, HelpCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us - Drivr | Professional Driver Services',
  description: 'Get in touch with Drivr for professional driver services. Contact us for bookings, support, or partnerships. Multiple contact options available.',
  keywords: ['contact drivr', 'driver service contact', 'professional driver support', 'chauffeur service contact', 'drivr customer service', 'driver booking support'],
  openGraph: {
    title: 'Contact Us - Drivr | Professional Driver Services',
    description: 'Get in touch with Drivr for professional driver services. Contact us for bookings, support, or partnerships.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - Drivr | Professional Driver Services',
    description: 'Get in touch with Drivr for professional driver services and customer support.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ContactUsPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Support',
      details: ['+91-XXX-XXX-XXXX', '+91-XXX-XXX-XXXX (Business)'],
      description: 'Available 24/7 for emergency bookings and support',
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Support',
      details: ['support@drivr.co.in', 'bookings@drivr.co.in'],
      description: 'Response within 24 hours for all inquiries',
      action: 'Send Email'
    },
    {
      icon: MapPin,
      title: 'Office Locations',
      details: ['Mumbai, Maharashtra', 'Delhi, NCR', 'Bangalore, Karnataka'],
      description: 'Visit our offices for in-person consultations',
      action: 'Get Directions'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon-Fri: 9:00 AM - 8:00 PM', 'Sat-Sun: 10:00 AM - 6:00 PM'],
      description: '24/7 emergency support available',
      action: 'View Schedule'
    }
  ]

  const departments = [
    {
      icon: Users,
      title: 'Customer Support',
      email: 'support@drivr.co.in',
      phone: '+91-XXX-XXX-XXXX',
      description: 'For booking issues, driver concerns, and general inquiries'
    },
    {
      icon: Building,
      title: 'Business Partnerships',
      email: 'partnerships@drivr.co.in',
      phone: '+91-XXX-XXX-XXXX',
      description: 'For corporate accounts, fleet partnerships, and B2B services'
    },
    {
      icon: HelpCircle,
      title: 'Technical Support',
      email: 'tech@drivr.co.in',
      phone: '+91-XXX-XXX-XXXX',
      description: 'For app issues, website problems, and technical assistance'
    }
  ]

  const faqs = [
    {
      question: 'How quickly can I get a driver?',
      answer: 'We offer both advance bookings and on-demand services. On-demand drivers can arrive within 30-60 minutes depending on your location and availability.'
    },
    {
      question: 'What areas do you serve?',
      answer: 'We currently serve major cities including Mumbai, Delhi, Bangalore, Pune, Hyderabad, and Chennai. We are continuously expanding to new locations.'
    },
    {
      question: 'How do I cancel or modify my booking?',
      answer: 'You can cancel or modify your booking through our app or by calling customer support. Free cancellations are available up to 2 hours before the scheduled time.'
    },
    {
      question: 'Are your drivers insured and verified?',
      answer: 'Yes, all our drivers undergo thorough background checks, have valid licenses, and maintain proper insurance coverage. We also provide additional liability coverage.'
    }
  ]

  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 min-h-screen">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Get in Touch
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Have questions about our professional driver services? Need support with your booking? 
                We&apos;re here to help. Contact us through any of the channels below.
              </p>
            </div>

            {/* Contact Information Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow">
                    <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">{info.title}</h3>
                    <div className="space-y-2 mb-4">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-slate-600 text-sm font-medium">
                          {detail}
                        </p>
                      ))}
                    </div>
                    <p className="text-slate-500 text-sm mb-4">{info.description}</p>
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                      {info.action}
                    </button>
                  </div>
                )
              })}
            </div>

            {/* Contact Form and Departments */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="+91-XXX-XXX-XXXX"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Department
                    </label>
                    <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      <option>Customer Support</option>
                      <option>Business Partnerships</option>
                      <option>Technical Support</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>

              {/* Departments */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Departments</h2>
                <div className="space-y-6">
                  {departments.map((dept, index) => {
                    const Icon = dept.icon
                    return (
                      <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-slate-900 mb-2">{dept.title}</h3>
                            <p className="text-slate-600 text-sm mb-3">{dept.description}</p>
                            <div className="space-y-1">
                              <p className="text-slate-700 text-sm font-medium">{dept.email}</p>
                              <p className="text-slate-700 text-sm font-medium">{dept.phone}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 mb-16">
              <div className="text-center mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <p className="text-slate-600">Quick answers to common questions</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-slate-200 pb-4 last:border-0">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.question}</h3>
                    <p className="text-slate-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white mb-16">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Emergency Support</h2>
                <p className="text-red-100 mb-6">
                  For urgent driver needs or emergency situations, call our 24/7 hotline
                </p>
                <div className="bg-white/10 rounded-lg p-4 inline-block">
                  <p className="text-2xl font-bold mb-2">+91-XXX-XXX-XXXX</p>
                  <p className="text-red-100">Available 24/7 for emergencies</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Connect With Us</h2>
              <p className="text-slate-600 mb-8">
                Follow us on social media for updates, offers, and driver tips
              </p>
              <div className="flex justify-center gap-4">
                <button className="w-12 h-12 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </button>
                <button className="w-12 h-12 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </button>
                <button className="w-12 h-12 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <AppStoreFooter />
    </>
  )
}
