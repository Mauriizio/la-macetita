
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ShopPage from '@/pages/ShopPage';
import TipsPage from '@/pages/TipsPage';
import GalleryPage from '@/pages/GalleryPage';
import ContactPage from '@/pages/ContactPage';
import { Toaster } from '@/components/ui/toaster';
import { CartProvider } from '@/contexts/CartContext'; 
import NewsletterPopup from '@/components/NewsletterPopup';

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre-nosotros" element={<AboutPage />} />
            <Route path="/tienda" element={<ShopPage />} />
            <Route path="/consejos-diy" element={<TipsPage />} />
            <Route path="/galeria" element={<GalleryPage />} />
            <Route path="/contacto" element={<ContactPage />} />
          </Routes>
          <Toaster />
          <NewsletterPopup />
        </Layout>
      </Router>
    </CartProvider>
  );
}

export default App;
  