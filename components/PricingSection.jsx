import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: 'Hourly',
      price: '₹179',
      unit: '/hour',
      description: 'Perfect for short errands, shopping, or quick meetings.',
      features: ['Professional driver', 'Flexible routing', 'Standard background check', 'On-demand extension'],
      popular: false,
    },
    {
      name: 'Daily',
      price: '₹899',
      unit: '/day (8 hrs)',
      description: 'Ideal for full-day events, outstation trips, or city tours.',
      features: ['Dedicated driver for 8 hours', 'Outstation travel allowed', 'Priority support', 'Extra hours available at additional cost'],
      popular: true,
    },
    {
      name: 'Weekly',
      price: 'Coming Soon.. 🚀',//'₹6999',
      unit: '',//'/week',
      description: 'Consistent, reliable driving service for your busy week.',
      features: [],//['Same driver all week', 'Up to 10 hours/day', 'Premium driver selection', 'Free replacements'],
      popular: false,
    },
    {
      name: 'Corporate',
      price: 'Coming Soon.. 🚀',//'Custom',
      unit: '',
      description: 'Tailored driver solutions for executives and teams.',
      features: [],//['Fleet management', 'Monthly invoicing', '24/7 Account manager', 'Uniformed chauffeurs'],
      popular: false,
    }
  ];

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Transparent Driver Rental Rates</h2>
          <p className="text-slate-600 text-lg">
            Choose the perfect rental duration that fits your schedule. Professional, vetted drivers ready when you are.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative bg-white border-slate-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${plan.popular ? 'border-primary shadow-lg ring-1 ring-primary/20' : 'shadow-sm'
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold tracking-wide shadow-md">
                  MOST POPULAR
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900">{plan.name}</CardTitle>
                <CardDescription className="text-slate-500 h-10">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-black text-slate-900">{plan.price}</span>
                  <span className="text-slate-500 ml-2 font-medium">{plan.unit}</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              {/* <CardFooter>
                <Button
                  className={`w-full shadow-sm ${plan.popular ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}
                >
                  Select {plan.name}
                </Button>
              </CardFooter> */}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;