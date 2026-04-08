import React from 'react';
import Header from './Header';
import AppStoreFooter from './AppStoreFooter';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
       <>
       <Header />
       {children}
      <AppStoreFooter />
       </>
          
  );
}
