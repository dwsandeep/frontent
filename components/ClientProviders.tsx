'use client';

import { AuthProvider } from '../app/contexts/AuthContext';
import { DriverAuthProvider } from '../app/contexts/DriverAuthContext';
import ScrollToTop from './ScrollToTop';
import { Toaster } from "./ui/toaster";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <DriverAuthProvider>
        <ScrollToTop />
        {children}
        <Toaster />
      </DriverAuthProvider>
    </AuthProvider>
  );
}
