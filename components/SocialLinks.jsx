
import React from 'react';
import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const SocialLinks = () => {
  const socials = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <div className="flex items-center justify-center gap-4 mt-12">
      {socials.map((social, index) => {
        const Icon = social.icon;
        return (
          <a
            key={index}
            href={social.href}
            aria-label={social.label}
            className="w-10 h-10 rounded-full bg-[#E8F0F8] flex items-center justify-center text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white transition-all shadow-sm"
          >
            <Icon className="w-5 h-5" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
