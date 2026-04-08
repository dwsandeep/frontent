import { Metadata } from 'next'
import Header from '@/components/Header.simple'
import AppStoreFooter from '@/components/AppStoreFooter'
import { Search, Calendar, Car, CheckCircle, ArrowRight, Clock, Shield, Users, CreditCard } from 'lucide-react';
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How It Works - Drivr | Book Professional Drivers in 4 Simple Steps',
  description: 'Learn how to book professional drivers with Drivr in 4 easy steps. Simple booking process, vetted drivers, and reliable service for all your transportation needs.',
  keywords: ['how to book driver', 'driver booking process', 'professional driver rental', 'chauffeur booking steps', 'hire driver online', 'drivr booking guide'],
  openGraph: {
    title: 'How It Works - Drivr | Book Professional Drivers in 4 Simple Steps',
    description: 'Learn how to book professional drivers with Drivr in 4 easy steps. Simple booking process, vetted drivers, and reliable service.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How It Works - Drivr | Book Professional Drivers in 4 Simple Steps',
    description: 'Learn how to book professional drivers with Drivr in 4 easy steps. Simple booking process and reliable service.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function HowItWorksPage() {
  const steps = [
    {
      icon: Search,
      title: "1. Search & Book",
      description: "Enter your requirements, choose your rental duration, and select a driver that matches your needs.",
      details: [
        "Specify pickup location and time",
        "Choose hourly, daily, or weekly rental",
        "Filter by driver experience and language",
        "Book online or through our mobile app"
      ]
    },
    {
      icon: Calendar,
      title: "2. Confirm Schedule",
      description: "Review your booking details, confirm the schedule, and receive instant driver assignment.",
      details: [
        "Review driver profile and ratings",
        "Confirm pickup location and timing",
        "Receive driver contact information",
        "Get real-time booking confirmation"
      ]
    },
    {
      icon: Car,
      title: "3. Driver Arrives",
      description: "Your professional driver arrives at the scheduled time, ready to drive your vehicle.",
      details: [
        "Driver arrives 10 minutes early",
        "Professional appearance and uniform",
        "Vehicle inspection and documentation check",
        "Brief introduction and route discussion"
      ]
    },
    {
      icon: CheckCircle,
      title: "4. Enjoy Your Journey",
      description: "Sit back, relax, and enjoy a comfortable, safe ride with your professional driver.",
      details: [
        "Safe and comfortable transportation",
        "Real-time GPS tracking available",
        "Flexible stops and route changes",
        "Professional and courteous service"
      ]
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "Flexible Duration",
      description: "Choose from hourly, daily, or weekly rental options to suit your specific needs."
    },
    {
      icon: Shield,
      title: "Verified Drivers",
      description: "All drivers undergo thorough background checks and professional training."
    },
    {
      icon: Users,
      title: "Personalized Service",
      description: "Drivers familiar with your preferences provide consistent, personalized service."
    },
    {
      icon: CreditCard,
      title: "Easy Payment",
      description: "Secure online payment with multiple options including corporate billing."
    }
  ];

  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="text-center max-w-4xl mx-auto mb-20">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                How It Works
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Book professional drivers in four simple steps. Our streamlined process ensures 
                you get the right driver, at the right time, for any occasion.
              </p>
            </div>
 {/* Steps Section */}
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Simple Steps to Book Your Driver
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Our streamlined process makes it easy to get a professional driver when you need one
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative">
                    {/* Connection Line */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/20 to-transparent" />
                    )}
                    
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                      <p className="text-slate-600 mb-4">{step.description}</p>
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-slate-600">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Why Choose Drivr?
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Experience the difference with our premium driver rental service
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary to-primary/90">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience Professional Driver Service?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Book your driver today and travel in comfort and style
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup" 
                className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-slate-100 transition-colors"
              >
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/pricing" 
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-slate-600">
                Common questions about our driver rental service
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: "How far in advance should I book a driver?",
                  answer: "We recommend booking at least 24 hours in advance for best availability. However, we also accept last-minute bookings subject to driver availability."
                },
                {
                  question: "Can I make changes to my booking?",
                  answer: "Yes, you can modify your booking up to 12 hours before the scheduled time through our app or by contacting customer support."
                },
                {
                  question: "What if my driver is late?",
                  answer: "Our drivers are trained to arrive 10 minutes early. In case of any delay, we'll notify you immediately and, if needed, arrange an alternative driver."
                },
                {
                  question: "Do you provide drivers for long-distance trips?",
                  answer: "Yes, we offer drivers for both local and long-distance trips. Additional charges may apply for extended distances."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg border border-slate-200 p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.question}</h3>
                  <p className="text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
          <div className="max-w-4xl mx-auto text-center">
            <Link 
              href="/" 
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
          </div>
        </div>
      </main>
      <AppStoreFooter />
    </>
  )
}
