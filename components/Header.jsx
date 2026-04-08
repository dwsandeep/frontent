'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, X, Smartphone } from 'lucide-react';
import { useDriverAuth } from '../app/contexts/DriverAuthContext';
import BookingModal from './BookingModal';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const pathname = usePathname();
  const { currentDriver, logout, isAuthenticated } = useDriverAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when navigating to a new page
    // This is a valid use case - synchronizing UI state with route changes
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Blog', path: '/blog' },
  ];

  const scrollToDownload = () => {
    const footer = document.getElementById('contact');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open('https://apps.apple.com/app/drivr', '_blank');
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-border py-3 shadow-sm' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              {/* <span className={`text-2xl font-bold tracking-tighter transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                drivr<span className="text-primary">.</span>
              </span> */}
              <img
                src={isScrolled ? "/logo-dark1.png" : "/logo-white1.png"}
                  alt="drivr logo"
                className="h-24 md:h-28 w-auto object-contain transition-all"
                />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.path}
                  className={`text-sm font-medium transition-colors ${
                    isScrolled ? 'text-slate-600 hover:text-primary' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              {!isAuthenticated ? (
                // <Link to="/driver-login" className={`text-sm font-medium mr-2 transition-colors ${
                //   isScrolled ? 'text-slate-600 hover:text-primary' : 'text-white/90 hover:text-white'
                // }`}>
                //   Driver Login1
                // </Link>
                <></>
              ) : (
                <>
                  <Link href="/driver-dashboard" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors mr-2">
                    Dashboard
                  </Link>
                  <button onClick={logout} className={`text-sm font-medium mr-2 transition-colors ${
                    isScrolled ? 'text-slate-600 hover:text-primary' : 'text-white/90 hover:text-white'
                  }`}>
                    Logout
                  </button>
                </>
              )}
              
              <Button 
                variant="outline"
                onClick={scrollToDownload}
                className={`font-semibold px-4 rounded-full transition-all flex items-center gap-2 ${
                  isScrolled 
                    ? 'border-primary text-primary hover:bg-primary/10' 
                    : 'border-white/50 text-white hover:bg-white/20 bg-white/10 backdrop-blur-sm'
                }`}
              >
                <Smartphone className="w-4 h-4" />
                Get App
              </Button>

              {/* <Button 
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                Book a Driver
              </Button> */}
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className={`md:hidden transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-border shadow-2xl py-4 px-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.path}
                className="text-base font-medium text-slate-700 hover:text-primary py-2 border-b border-slate-100"
              >
                {link.name}
              </Link>
            ))}
            
            {!isAuthenticated ? (
              <Link href="/driver-login" className="text-base font-medium text-slate-700 hover:text-primary py-2 border-b border-slate-100">
                Driver Login2
              </Link>
            ) : (
              <>
                <Link href="/driver-dashboard" className="text-base font-medium text-primary py-2 border-b border-slate-100">
                  Driver Dashboard
                </Link>
                <button onClick={logout} className="text-left text-base font-medium text-slate-700 hover:text-primary py-2 border-b border-slate-100">
                  Logout
                </button>
              </>
            )}

            <div className="flex flex-col gap-2 mt-2">
              <Button 
                variant="outline"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  scrollToDownload();
                }}
                className="w-full border-primary text-primary hover:bg-primary/10 font-semibold rounded-full flex items-center justify-center gap-2"
              >
                <Smartphone className="w-4 h-4" />
                Download App
              </Button>
              <Button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsBookingModalOpen(true);
                }}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full"
              >
                Book a Driver
              </Button>
            </div>
          </div>
        )}
      </header>

      <BookingModal open={isBookingModalOpen} onOpenChange={setIsBookingModalOpen} />
    </>
  );
};

export default Header;