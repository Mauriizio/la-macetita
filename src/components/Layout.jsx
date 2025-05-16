
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-cream-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Layout;
  