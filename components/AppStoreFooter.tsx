'use client';

import { Download } from "lucide-react";
import Link from "next/link";
import SocialLinks from "./SocialLinks";

export default function AppStoreFooter() {
  return (
     <footer id="contact" className="bg-slate-950 text-slate-400 pt-20 pb-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
              <div className="lg:col-span-2 space-y-6">
                {/* <span className="text-3xl font-bold tracking-tighter text-white">
                  drivr<span className="text-primary">.</span>
                </span> */}
                <img
                    src="/logo-white1.png"
                     alt="drivr logo"
                   className="h-20 w-auto object-contain"
                />
                <p className="text-slate-400 max-w-sm">
                  Redefining personal transportation by providing elite, professional drivers for your vehicle.
                </p>
    
                <div className="pt-4">
                  <h4 className="text-sm font-bold mb-4 text-white uppercase tracking-wider">Download App</h4>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => window.open('https://apps.apple.com/app/drivr', '_blank')}
                      className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg transition-colors border border-slate-700"
                    >
                      <Download className="w-5 h-5" />
                      <div className="text-left">
                        <div className="text-[9px] leading-none text-slate-300">Download on the</div>
                        <div className="text-sm font-semibold leading-tight">App Store</div>
                      </div>
                    </button>
                    <button
                      onClick={() => window.open('https://play.google.com/store/apps/details?id=com.drivr', '_blank')}
                      className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg transition-colors border border-slate-700"
                    >
                      <Download className="w-5 h-5" />
                      <div className="text-left">
                        <div className="text-[9px] leading-none text-slate-300">Get it on</div>
                        <div className="text-sm font-semibold leading-tight">Google Play</div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
    
              <div>
                <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
                <ul className="space-y-4">
                  {[
                    { text: 'About Us', href: '/about' },
                    { text: 'Driver Rental Services', href: '/service' },
                    { text: 'How It Works', href: '/how-it-works' },
                    { text: 'Become a Driver', href: '/become-a-driver' },
                    { text: 'Contact Us', href: '/contact-us' }
                  ].map((link) => (
                    <li key={link.text}>
                      {link.href === '#' ? (
                        <a href={link.href} className="text-slate-400 hover:text-primary transition-colors">
                          {link.text}
                        </a>
                      ) : (
                        <Link href={link.href} className="text-slate-400 hover:text-primary transition-colors">
                          {link.text}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
    
              <div>
                <h4 className="text-lg font-bold mb-6 text-white">Legal</h4>
                <ul className="space-y-4">
                  {[
                    { text: 'Terms of Service', href: '/terms-of-service' },
                    { text: 'Privacy Policy', href: '/privacy-policy' },
                    // { text: 'Insurance Policy', href: '#' },
                    { text: 'Safety Guidelines', href: '/safety-guidelines' }
                  ].map((link) => (
                    <li key={link.text}>
                      {link.href === '#' ? (
                        <a href={link.href} className="text-slate-400 hover:text-primary transition-colors">
                          {link.text}
                        </a>
                      ) : (
                        <Link href={link.href} className="text-slate-400 hover:text-primary transition-colors">
                          {link.text}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
    
              <div>
                <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
                <ul className="space-y-4 text-slate-400">
                  <li>support@drivr.co.in</li>
                  <li>+91 9203602209</li>
                  <li>Indore, 452010</li>
                </ul>
              </div>
            </div>
    
            <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-500 text-sm">
                &copy; {new Date().getFullYear()} drivr labs. All rights reserved.
              </p>      
              <SocialLinks />
            </div>
          </div>
        </footer>
  );
}
