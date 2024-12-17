import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import DoctorsSection from './components/doctors/DoctorsSection';
import Footer from './components/Footer';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Hero />
          <FeaturedProducts />
          <DoctorsSection />
          <Footer />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;