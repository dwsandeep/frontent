import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "How do I book a driver?",
      answer: "You can book a professional driver easily through our website. Simply click 'Book a Driver', enter your meeting location, select your required duration (hourly, daily, or weekly), and confirm your booking."
    },
    {
      question: "What's included in the rental?",
      answer: "Our driver rental service includes a fully vetted, professional driver for the duration you select. The driver's background check, agency fees, and basic insurance are covered. Fuel and vehicle maintenance are the responsibility of the vehicle owner."
    },
    {
      question: "Can I book a driver for multiple days?",
      answer: "Absolutely! We offer daily and weekly rental packages. If you need a driver for an extended period, our weekly or corporate packages provide the best value and consistency."
    },
    {
      question: "Are your drivers insured and vetted?",
      answer: "Yes, safety is our top priority. All our drivers undergo comprehensive background checks, driving history reviews, and are fully insured while operating your vehicle."
    },
    {
      question: "What if I need to cancel my booking?",
      answer: "You can cancel your driver rental free of charge up to 24 hours before the scheduled start time. Late cancellations may incur a fee equivalent to one hour of service."
    },
    {
      question: "Can I request a specific driver?",
      answer: "For weekly and corporate rentals, we strive to provide the same dedicated driver. For hourly or daily rentals, you can request a specific driver, and we will do our best to accommodate based on their availability."
    },
    {
      question: "What if the driver is late?",
      answer: "Our drivers are trained to arrive 15 minutes early. In the rare event of a delay due to unforeseen circumstances, your billing time will only start when the driver arrives at your location."
    },
    {
      question: "Do you provide different vehicle types?",
      answer: "We provide the professional driver; you provide the vehicle. Our drivers are experienced in handling various vehicle types, from standard sedans to luxury SUVs and automatic/manual transmissions. Please specify any special vehicle requirements when booking."
    }
  ];

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
     
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-600 text-lg">
            Got questions about hiring a driver? We&apos;ve got answers. If you can&apos;t find what you&apos;re looking for, our support team is here to help.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="bg-slate-50 border border-slate-200 rounded-lg px-6 data-[state=open]:border-primary data-[state=open]:bg-white transition-all shadow-sm"
            >
              <AccordionTrigger className="text-left text-lg font-medium text-slate-900 hover:text-primary hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQSection;