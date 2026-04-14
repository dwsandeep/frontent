import { Metadata } from 'next'
import Header from '@/components/Header'
import AppStoreFooter from '@/components/AppStoreFooter'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Become a Driver - Drivr | Join Our Professional Driver Network',
  description: 'Join Drivr as a professional driver. Fill out our simple application form to start your driving career with competitive earnings and flexible hours.',
  keywords: ['become a driver', 'drivr careers', 'professional driver jobs', 'chauffeur jobs', 'driver recruitment', 'driving jobs India', 'car driver employment'],
  openGraph: {
    title: 'Become a Driver - Drivr | Join Our Professional Driver Network',
    description: 'Join Drivr as a professional driver. Fill out our simple application form to start earning.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Become a Driver - Drivr | Professional Driver Network',
    description: 'Join Drivr as a professional driver and start earning today.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function BecomeADriverPage() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <div className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                Become a Driver
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Join our professional driver network. Fill out the form below to start your journey with Drivr.
              </p>
            </div>

            {/* Application Form */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="Enter your city"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Years of Driving Experience *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  >
                    <option value="">Select experience</option>
                    <option value="0-2">0-2 years</option>
                    <option value="2-5">2-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Do you have your own vehicle?
                  </label>
                  <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none">
                    <option value="">Select option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Tell us about yourself *
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="Brief description about your driving experience and why you want to join Drivr..."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                  />
                  <label className="text-sm text-slate-600">
                    I agree to the terms and conditions and understand that my information will be used for driver recruitment purposes.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Submit Application
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Need Help?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center justify-center gap-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span className="text-slate-600">+91 9203602209</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="text-slate-600">drivers@drivr.co.in</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="text-slate-600">Indore, 452010</span>
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
