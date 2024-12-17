import React from 'react';
import { Clock, Truck, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Your Health, Our Priority
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Get your medicines delivered at your doorstep. Fast, reliable, and secure pharmacy services.
            </p>
            <button className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors">
              Shop Now
            </button>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=800"
              alt="Pharmacy"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            { icon: Clock, title: '24/7 Service', desc: 'Round the clock support' },
            { icon: Truck, title: 'Fast Delivery', desc: 'Free delivery on orders above $50' },
            { icon: Shield, title: 'Secure Shopping', desc: '100% secure checkout' },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-teal-100 p-3 rounded-full">
                <Icon className="text-teal-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}