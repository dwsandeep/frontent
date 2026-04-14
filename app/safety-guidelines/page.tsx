import { Metadata } from 'next'
import Header from '@/components/Header'
import AppStoreFooter from '@/components/AppStoreFooter'
import { Shield, CheckCircle, AlertCircle, Users, Car, Phone, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Safety Guidelines - Drivr | Professional Driver Services',
  description: 'Read Drivr\'s comprehensive safety guidelines and protocols. Learn about our driver verification process, vehicle safety standards, and emergency procedures to ensure secure transportation.',
  keywords: ['drivr safety guidelines', 'driver safety protocols', 'professional driver safety', 'transportation safety', 'driver verification', 'emergency procedures'],
  openGraph: {
    title: 'Safety Guidelines - Drivr | Professional Driver Services',
    description: 'Read Drivr\'s comprehensive safety guidelines and protocols. Learn about our driver verification process, vehicle safety standards, and emergency procedures.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Safety Guidelines - Drivr | Professional Driver Services',
    description: 'Read Drivr\'s comprehensive safety guidelines and protocols for secure transportation.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function SafetyGuidelinesPage() {
  const safetyProtocols = [
    {
      icon: Shield,
      title: 'Driver Verification',
      description: 'All drivers undergo comprehensive background checks, license verification, and driving record analysis before approval.',
      items: [
        'Criminal background check',
        'Driving record verification',
        'License authentication',
        'Identity verification'
      ]
    },
    {
      icon: Car,
      title: 'Vehicle Safety Standards',
      description: 'We ensure all vehicles used with our drivers meet strict safety and maintenance requirements.',
      items: [
        'Regular maintenance checks',
        'Valid insurance verification',
        'Safety equipment inspection',
        'Clean driving record requirement'
      ]
    },
    {
      icon: Users,
      title: 'Passenger Safety',
      description: 'Your safety is our priority with comprehensive protocols for every journey.',
      items: [
        'GPS tracking on all trips',
        '24/7 customer support',
        'Emergency contact system',
        'Trip sharing options'
      ]
    },
    {
      icon: FileCheck,
      title: 'Service Protocols',
      description: 'Standardized procedures to ensure consistent, safe service delivery.',
      items: [
        'Pre-trip safety checklist',
        'Professional conduct guidelines',
        'Health and safety training',
        'Regular performance reviews'
      ]
    }
  ];

  const emergencySteps = [
    {
      step: '1',
      title: 'Stay Calm',
      description: 'Remain calm and assess the situation. Your safety is the top priority.'
    },
    {
      step: '2',
      title: 'Contact Support',
      description: 'Call our 24/7 emergency hotline at 1-800-DRIVR-HELP for immediate assistance.'
    },
    {
      step: '3',
      title: 'Document Everything',
      description: 'Take photos, note details, and gather witness information if applicable.'
    },
    {
      step: '4',
      title: 'Follow Up',
      description: 'Complete an incident report and cooperate with our safety team investigation.'
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
              <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-blue-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Safety Guidelines</h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                At Drivr, safety is our foundation. We maintain the highest standards in driver verification, 
                vehicle safety, and service protocols to ensure your peace of mind on every journey.
              </p>
            </div>

            {/* Safety Protocols Grid */}
            <div className="mb-20">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Safety Protocols</h2>
                <p className="text-slate-600 text-lg">
                  Comprehensive measures we take to ensure your safety and security.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {safetyProtocols.map((protocol, index) => {
                  const Icon = protocol.icon;
                  return (
                    <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">{protocol.title}</h3>
                      <p className="text-slate-600 mb-4">{protocol.description}</p>
                      <ul className="space-y-2">
                        {protocol.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-slate-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Emergency Procedures */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-100 mb-20">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                    <AlertCircle className="w-8 h-8 text-red-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Emergency Procedures</h2>
                  <p className="text-slate-600 text-lg">
                    If you experience an emergency during your trip, follow these steps immediately.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {emergencySteps.map((step, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                        {step.step}
                      </div>
                      <h4 className="font-semibold text-slate-900 mb-2">{step.title}</h4>
                      <p className="text-sm text-slate-600">{step.description}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 rounded-xl p-6 text-center">
                  <div className="flex items-center justify-center mb-3">
                    <Phone className="w-6 h-6 text-blue-600 mr-2" />
                    <span className="font-semibold text-slate-900">24/7 Emergency Hotline:</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">1-800-DRIVR-HELP</div>
                  <p className="text-sm text-slate-600 mt-2">Available 24 hours a day, 7 days a week</p>
                </div>
              </div>
            </div>

            {/* Safety Tips */}
            <div className="mb-20">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Safety Tips for Passengers</h2>
                <p className="text-slate-600 text-lg">
                  Simple guidelines to enhance your safety during every trip.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <h3 className="font-semibold text-slate-900 mb-3">Before Your Trip</h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>Verify driver details in the app</li>
                    <li>Share trip details with contacts</li>
                    <li>Check vehicle license plate</li>
                    <li>Confirm driver identity</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <h3 className="font-semibold text-slate-900 mb-3">During Your Trip</h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>Wear seatbelt at all times</li>
                    <li>Share location with family</li>
                    <li>Keep personal belongings secure</li>
                    <li>Trust your instincts</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <h3 className="font-semibold text-slate-900 mb-3">After Your Trip</h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>Rate your experience</li>
                    <li>Report any concerns</li>
                    <li>Check for forgotten items</li>
                    <li>Provide feedback</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Commitment Statement */}
            <div className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Safety Commitment</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-6">
                We are continuously improving our safety measures through technology, training, and feedback. 
                Your trust is earned through our unwavering commitment to safety excellence.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  <span>Verified Drivers</span>
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  <span>GPS Tracking</span>
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  <span>Emergency Response</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <AppStoreFooter />
    </>
  )
}
