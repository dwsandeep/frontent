import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from './contexts/AuthContext';
import { DriverAuthProvider } from './contexts/DriverAuthContext';
import ScrollToTop from '@/components/ScrollToTop';
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Drivr - Professional Driver Services",
  description: "Connect with professional drivers for your transportation needs. Safe, reliable, and comfortable driver rental services.",
  keywords: ["professional driver", "driver rental", "chauffeur service", "car driver hire", "transportation service"],
  openGraph: {
    title: "Drivr - Professional Driver Services",
    description: "Connect with professional drivers for your transportation needs. Safe, reliable, and comfortable driver rental services.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drivr - Professional Driver Services",
    description: "Connect with professional drivers for your transportation needs",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AuthProvider>
          <DriverAuthProvider>
            <ScrollToTop />
            {children}
            <Toaster />
          </DriverAuthProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
