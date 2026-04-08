import { Metadata } from 'next'
import Header from '@/components/Header'
import AppStoreFooter from '@/components/AppStoreFooter'
import { Users, Award, Clock, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - Drivr | Professional Driver Services',
  description: 'Learn about Drivr - your trusted partner for professional driver services. Discover our mission, values, and commitment to providing safe, reliable transportation solutions.',
  keywords: ['about drivr', 'professional driver services', 'chauffeur service company', 'driver rental mission', 'transportation solutions'],
  openGraph: {
    title: 'About Us - Drivr | Professional Driver Services',
    description: 'Learn about Drivr - your trusted partner for professional driver services. Discover our mission, values, and commitment to providing safe, reliable transportation solutions.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - Drivr | Professional Driver Services',
    description: 'Learn about Drivr - your trusted partner for professional driver services.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function AboutPage() {
   const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Professional Drivers'
    },
    {
      icon: Clock,
      value: '10,000+',
      label: 'Hours Driven'
    },
    {
      icon: MapPin,
      value: '50+',
      label: 'Cities Covered'
    },
    {
      icon: Award,
      value: '4.9/5',
      label: 'Customer Rating'
    }
  ];

  const values = [
    {
      title: 'Safety First',
      description: 'All our drivers undergo rigorous background checks and driving record verification to ensure your safety and peace of mind.'
    },
    {
      title: 'Professional Excellence',
      description: 'We maintain the highest standards of professionalism, from driver training to customer service, ensuring a premium experience every time.'
    },
    {
      title: 'Reliability',
      description: 'Our platform ensures timely arrivals, consistent service quality, and 24/7 support to meet all your transportation needs.'
    },
    {
      title: 'Customer Focus',
      description: 'We prioritize your comfort and convenience, offering flexible booking options and personalized service tailored to your requirements.'
    }
  ];
  return (
    <>
      <Header />

      <main className="flex-1">
        <div className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
          {/* Hero Section */}
         <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">About Drivr</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            We&apos;re revolutionizing personal transportation by connecting you with professional, 
            vetted drivers who can operate your own vehicle. Founded with the mission to make 
            premium driving services accessible to everyone, we combine technology with human 
            expertise to deliver exceptional experiences.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-100 mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-600 leading-relaxed mb-4">
                Drivr was born from a simple observation: many people own great vehicles but need 
                professional drivers for various situations - whether it&apos;s for business meetings, 
                special occasions, or simply to avoid the stress of driving in traffic.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                What started as a small network of trusted drivers has grown into a comprehensive 
                platform that serves hundreds of customers across multiple cities. Our commitment 
                to quality, safety, and customer satisfaction remains at the core of everything we do.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Today, we continue to innovate and expand our services, always keeping our customers&apos; 
                needs at the forefront of our decisions.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Values</h2>
            <p className="text-slate-600 text-lg">
              The principles that guide our decisions and shape our company culture.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Meet Our Team</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Our dedicated team of professionals works tirelessly to ensure you receive the best 
            driver rental service experience possible.
          </p>
        </div>
      </div>

         
        </div>
      </main>
      <AppStoreFooter />
    </>
  )
}
