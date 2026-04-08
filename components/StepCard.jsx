import React from 'react';

const StepCard = ({ stepNumber, icon: Icon, title, description }) => {
  return (
    <div className="relative flex flex-col items-center text-center group">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[120px] font-black text-slate-100 z-0 pointer-events-none select-none group-hover:text-primary/10 transition-colors duration-500">
        {stepNumber}
      </div>
      
      <div className="relative z-10 w-20 h-20 rounded-2xl bg-white shadow-lg border border-border flex items-center justify-center mb-6 group-hover:border-primary group-hover:-translate-y-2 group-hover:shadow-xl transition-all duration-300">
        <Icon className="w-10 h-10 text-primary" />
        <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm border-4 border-white shadow-sm">
          {stepNumber}
        </div>
      </div>
      
      <h3 className="relative z-10 text-xl font-bold text-slate-900 mb-3">
        {title}
      </h3>
      
      <p className="relative z-10 text-slate-600 max-w-[250px]">
        {description}
      </p>
    </div>
  );
};

export default StepCard;