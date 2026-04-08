import React from 'react';
import { Car, Users, Clock, Shield, MapPin, Phone, CreditCard, Star } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Car,
      title: 'Personal Driver Services',
      description: 'Hire a professional driver for your personal vehicle for daily commutes, errands, or special occasions.',
      features: ['Flexible hourly and daily rates', 'Experienced chauffeurs', 'Door-to-door service'],
      popular: true
    },
    {
      icon: Users,
      title: 'Corporate Driver Solutions',
      description: 'Professional driver services for businesses, executive transport, and client hospitality.',
      features: ['Corporate billing', 'Regular driver assignments', 'Priority scheduling'],
      popular: false
    },
    {
      icon: Clock,
      title: 'Event Transportation',
      description: 'Dedicated drivers for weddings, parties, concerts, and other special events.',
      features: ['Event-specific planning', 'Multiple vehicle coordination', 'Extended hours available'],
      popular: false
    },
    {
      icon: MapPin,
      title: 'Airport Transfer Services',
      description: 'Reliable airport transfers with professional drivers who handle your luggage and navigation.',
      features: ['Flight tracking', 'Wait time included', 'Meet and greet service'],
      popular: false
    },
    {
      icon: Shield,
      title: 'Long Distance Travel',
      description: 'Professional drivers for intercity travel and road trips with your personal vehicle.',
      features: ['Experienced long-haul drivers', 'Overnight options', 'Route planning'],
      popular: false
    },
    {
      icon: Phone,
      title: 'On-Demand Driver',
      description: 'Book a driver on short notice for immediate transportation needs.',
      features: ['30-minute arrival guarantee', '24/7 availability', 'Real-time tracking'],
      popular: false
    }
  ];

  const additionalServices = [
    {
      title: 'Vehicle Maintenance Coordination',
      description: 'Our drivers can coordinate with your preferred service centers for routine maintenance while you work.',
      icon: '🔧'
    },
    {
      title: 'Personal Shopping Assistant',
      description: 'Drivers can assist with grocery shopping, package pickup, and other errands.',
      icon: '🛒'
    },
    {
      title: 'Child Transportation',
      description: 'Specially trained drivers for school runs and children\'s activities with enhanced safety protocols.',
      icon: '👨‍👩‍👧‍👦'
    },
    {
      title: 'Elderly Care Transport',
      description: 'Patient, experienced drivers providing safe and comfortable transportation for seniors.',
      icon: '👴'
    }
  ];

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Our Services</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Comprehensive driver rental solutions tailored to your specific needs. 
            From daily commutes to special events, we have the perfect service for every occasion.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className={`bg-white rounded-2xl p-8 shadow-sm border ${
                  service.popular 
                    ? 'border-blue-200 ring-2 ring-blue-100' 
                    : 'border-slate-100'
                } hover:shadow-md transition-all relative`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      </div>
                      <span className="text-slate-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Additional Services</h2>
            <p className="text-slate-600 text-lg">
              Going beyond traditional driver services to meet all your transportation needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="font-semibold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Process */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-slate-600 text-lg">
              Book a professional driver in four simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Choose Service', desc: 'Select the service that matches your needs' },
              { step: '2', title: 'Book Driver', desc: 'Schedule your driver with date and time' },
              { step: '3', title: 'Confirm Details', desc: 'Review booking and driver details' },
              { step: '4', title: 'Enjoy Ride', desc: 'Your professional driver arrives on time' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Ready to Experience Premium Driver Services?
          </h2>
          <p className="text-slate-600 mb-8">
            Join thousands of satisfied customers who trust Drivr for their transportation needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors">
              Book a Driver Now
            </button>
            <button className="border border-slate-300 text-slate-700 px-8 py-3 rounded-xl font-medium hover:bg-slate-50 transition-colors">
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
