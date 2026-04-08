"use client";
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Clock, Calendar, CalendarDays, Briefcase, Smartphone, MapPin, CheckCircle, ThumbsUp, ShieldCheck, Zap, DollarSign, Headphones as HeadphonesIcon, ArrowRight, CheckCircle2, Download } from 'lucide-react';
import { getPosts } from '@/service/blogs';

import ServiceCard from '@/components/ServiceCard';
import FeatureCard from '@/components/FeatureCard';
import StepCard from '@/components/StepCard';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import BlogSection from '@/components/BlogSection';
import DownloadAppSection from '@/components/DownloadAppSection';

export default function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data.list || []);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);
  return (
    <main className="flex-1">
        <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
     

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* <img
            src="https://images.unsplash.com/photo-1598195221927-fc335f446870?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Professional driver in a luxury car"
            className="w-full h-full object-cover"
          /> */}
          <img
            // src="https://images.unsplash.com/photo-1598195221927-fc335f446870?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            src="/freepik-chauffeur.png"
            alt="Professional driver in a luxury car"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="max-w-3xl space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium text-white mb-4 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Trust the Drive. Drive Safe
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white drop-shadow-lg">
              Official Launch On<br />
              <span className="text-primary">20 April 2026</span> Akshaya Tritiya.
            </h1>

            <p className="text-lg sm:text-xl text-slate-200 max-w-2xl leading-relaxed drop-shadow-md">
              Book a trusted, experienced driver for your needs. Whether it's for a few hours, a full day, or a dedicated weekly service, we provide the perfect chauffeur for your vehicle.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* <Button
                size="lg"
                onClick={() => document.querySelector('header button:last-child').click()}
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg h-14 px-8 rounded-md shadow-lg hover:shadow-xl transition-all group"
              >
                Book a Driver Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button> */}
              {/* <Button
                size="lg"
                variant="outline"
                onClick={scrollToDownload}
                className="bg-white text-slate-900 hover:bg-slate-100 border-transparent text-lg h-14 px-8 rounded-md transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download App
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      <DownloadAppSection />

      {/* Services Section */}
      <section id="services" className="py-24 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Flexible Driver Rental Options</h2>
            <p className="text-slate-600 text-lg">
              Hire a professional driver tailored to your schedule. You provide the car, we provide the expertise.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={Clock}
              title="Hourly Rental"
              description="Need a driver for a quick meeting or shopping trip? Hire by the hour for ultimate flexibility."
            />
            <ServiceCard
              icon={Calendar}
              title="Daily Rental"
              description="Perfect for outstation trips, full-day events, or when you need a dedicated driver for 8+ hours."
            />
            <ServiceCard
              icon={CalendarDays}
              title="Weekly Rental"
              description="Consistent, reliable service with the same professional driver for your busy work week."
            />
            <ServiceCard
              icon={Briefcase}
              title="Corporate Services"
              description="Dedicated chauffeurs for executives, company fleets, and VIP client transportation."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-slate-50 border-y border-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">How It Works</h2>
            <p className="text-slate-600 text-lg">
              Booking a professional driver is simple, fast, and secure.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6 relative">
            {/* Connecting Line for Desktop */}
            <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-slate-200 z-0">
              <div className="absolute top-0 left-0 h-full bg-primary w-1/3"></div>
            </div>

            <StepCard
              stepNumber="1"
              icon={Clock}
              title="Select Duration"
              description="Choose whether you need a driver for hours, days, or weeks based on your needs."
            />
            <StepCard
              stepNumber="2"
              icon={Calendar}
              title="Choose Date & Time"
              description="Set your meeting location, date, and the exact time you want the driver to arrive."
            />
            <StepCard
              stepNumber="3"
              icon={CheckCircle}
              title="Confirm Booking"
              description="Review your details and confirm. We'll match you with a vetted, experienced driver."
            />
            <StepCard
              stepNumber="4"
              icon={MapPin}
              title="Driver Arrives"
              description="Your professional driver arrives at your location, ready to take the wheel."
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                Why Choose <span className="text-primary">drivr</span>?
              </h2>
              <p className="text-slate-600 text-lg mb-10">
                We provide more than just someone to steer your car. We provide peace of mind, professionalism, and unparalleled reliability.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <FeatureCard
                  icon={ShieldCheck}
                  title="Vetted Professionals"
                  description="Rigorous background checks, driving tests, and behavioral assessments."
                />
                <FeatureCard
                  icon={Zap}
                  title="Instant Matching"
                  description="Our system quickly connects you with available drivers in your area."
                />
                <FeatureCard
                  icon={DollarSign}
                  title="Transparent Rates"
                  description="Clear hourly and daily pricing with no hidden agency fees."
                />
                <FeatureCard
                  icon={HeadphonesIcon}
                  title="24/7 Support"
                  description="Dedicated assistance for both vehicle owners and drivers."
                />
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="relative bg-white border border-slate-200 rounded-2xl p-8 shadow-xl">
                <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-6">
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Service Quality</p>
                    <h3 className="text-2xl font-bold text-primary">Top Rated Drivers</h3>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                </div>

                <div className="space-y-6">
                  {[
                    { label: 'Verified Drivers', value: '50+' },
                    { label: 'Accident-Free Trips', value: '100%' },
                    { label: 'Cities Covered', value: '1' },
                    { label: 'Customer Rating', value: '4.9/5' }
                  ].map((stat, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-slate-600">{stat.label}</span>
                      <span className="font-bold text-lg text-slate-900">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PricingSection />
      <FAQSection />
      <BlogSection posts={posts} />

      {/* Become a Driver Section */}
      <section id="driver" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Are you a professional driver? <br /> Join our elite network.
              </h2>
              <p className="text-slate-300 text-xl mb-8 max-w-lg">
                Earn competitive rates driving clients' vehicles. Enjoy flexible hours and work with premium clientele.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  'Flexible schedule - accept jobs that fit your time',
                  'Guaranteed payouts and weekly settlements',
                  'Drive premium vehicles and build your reputation',
                  'Comprehensive insurance coverage while on duty'
                ].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-medium text-slate-200">
                    <CheckCircle2 className="w-6 h-6 shrink-0 text-primary" />
                    {benefit}
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                onClick={() => window.location.href = '/driver-signup'}
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg h-14 px-10 rounded-md shadow-lg transition-all"
              >
                Apply to Drive
              </Button>
            </div>

            <div className="hidden lg:block relative">
              <img
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional driver smiling"
                className="relative z-10 rounded-2xl shadow-2xl object-cover aspect-[4/3] border-4 border-slate-800"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
    </main>
  );
}
