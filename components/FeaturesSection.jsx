
import React from 'react';
import { Car, CalendarCheck, MapPin, ShieldCheck } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Car,
      title: 'Professional Driver Rental',
      description: 'Hire vetted, experienced chauffeurs for your personal vehicle by the hour or day.'
    },
    {
      icon: CalendarCheck,
      title: 'Easy Booking',
      description: 'Schedule a driver in seconds through our intuitive app or web platform.'
    },
    {
      icon: MapPin,
      title: 'Real-time Tracking',
      description: 'Track your driver\'s arrival and monitor your vehicle\'s journey in real-time.'
    },
    {
      icon: ShieldCheck,
      title: 'Secure Payments',
      description: 'Cashless, transparent, and secure payment processing for peace of mind.'
    }
  ];

  return (
    <div className="py-16 w-full max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-slate-900 mb-4">What to Expect</h3>
        <p className="text-slate-600 max-w-2xl mx-auto">
          We are building the ultimate platform for professional driver rentals, designed to give you back your time and ensure a premium experience.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div 
              key={index} 
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-[#E8F0F8] flex items-center justify-center mb-6 group-hover:bg-[#3B82F6] transition-colors">
                <Icon className="w-7 h-7 text-[#3B82F6] group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturesSection;
