import React from 'react';

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex items-start gap-5 p-6 rounded-xl bg-card/50 border border-transparent hover:border-primary/30 hover:bg-card transition-all duration-300 group">
      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div>
        <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h4>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;