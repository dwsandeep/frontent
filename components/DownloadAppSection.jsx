import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Smartphone, Download, ShieldCheck, Clock } from 'lucide-react';

const DownloadAppSection = () => {
  const benefits = [
    { icon: Clock, text: 'Easy booking in seconds' },
    { icon: Smartphone, text: 'Real-time driver tracking' },
    { icon: ShieldCheck, text: 'Secure payments' },
    { icon: CheckCircle2, text: '24/7 customer support' }
  ];

  return (
    <section className="py-24 bg-primary/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 skew-x-12 transform origin-top-right z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Get the <span className="text-primary">drivr</span> App
              </h2>
              <p className="text-xl text-slate-600">
                Book a driver anytime, anywhere. Experience seamless professional driver rentals right from your smartphone.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium text-slate-700">{benefit.text}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-slate-900 text-white hover:bg-slate-800 h-14 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-3"
                onClick={() => window.open('https://apps.apple.com/app/drivr', '_blank')}
              >
                <Download className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-[10px] leading-none opacity-80">Download on the</div>
                  <div className="text-base font-semibold leading-tight">App Store</div>
                </div>
              </Button>
              
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-3"
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.drivr', '_blank')}
              >
                <Download className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-[10px] leading-none opacity-80">Get it on</div>
                  <div className="text-base font-semibold leading-tight">Google Play</div>
                </div>
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl transform rotate-12"></div>
            <img 
              src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Person using smartphone" 
              className="relative z-10 rounded-3xl shadow-2xl border-8 border-white transform -rotate-3 hover:rotate-0 transition-transform duration-500 object-cover aspect-[4/5]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadAppSection;