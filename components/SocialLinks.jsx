import React from 'react';
// import { Facebook, Instagram, Play, TwitterX } from 'lucide-react';

const SocialLinks = () => {
  const socials = [
    {  href: '#', label: 'Twitter' },
    {  href: 'https://www.facebook.com/drivrindia/', label: 'Facebook' },
    {  href: 'https://www.instagram.com/drivr.india/', label: 'Instagram' },
    {  href: 'https://www.youtube.com/@DrivrIndia/', label: 'YouTube' }
  ];

  return (
    <div className="flex gap-4">
      {socials.map((social, index) => {
        const Icon = social.icon;
        return (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="text-slate-500 hover:text-primary text-sm font-medium transition-colors flex items-center gap-1"
          >
            {/* <Icon className="w-4 h-4" /> */}
            {social.label}
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
