import React from 'react';
import Link from 'next/link';

const SimpleHeader = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-slate-900">
            drivr<span className="text-blue-600">.</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-slate-600 hover:text-blue-600">Home</Link>
            <Link href="/about" className="text-sm font-medium text-slate-600 hover:text-blue-600">About</Link>
            <Link href="/pricing" className="text-sm font-medium text-slate-600 hover:text-blue-600">Pricing</Link>
            <Link href="/faq" className="text-sm font-medium text-slate-600 hover:text-blue-600">FAQ</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default SimpleHeader;
