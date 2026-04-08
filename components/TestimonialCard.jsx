import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ name, role, quote, rating, profileImage }) => {
  return (
    <div className="bg-card border border-border rounded-2xl p-8 relative mt-8 hover:border-primary/50 transition-colors duration-300">
      <div className="absolute -top-8 left-8">
        <img 
          src={profileImage} 
          alt={name} 
          className="w-16 h-16 rounded-full border-4 border-background object-cover"
        />
      </div>
      
      <div className="flex gap-1 mb-4 mt-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-4 h-4 ${i < rating ? 'text-accent fill-accent' : 'text-muted'}`} 
          />
        ))}
      </div>
      
      <blockquote className="text-foreground/90 text-lg italic mb-6">
        {quote}
      </blockquote>
      
      <div>
        <h4 className="font-bold text-primary">{name}</h4>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;