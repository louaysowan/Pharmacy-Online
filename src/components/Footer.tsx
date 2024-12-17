import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">MediCare</h3>
            <p className="text-sm">Your trusted online pharmacy partner for all your healthcare needs.</p>
            <div className="flex space-x-4 mt-4">
              <Facebook className="hover:text-white cursor-pointer" />
              <Twitter className="hover:text-white cursor-pointer" />
              <Instagram className="hover:text-white cursor-pointer" />
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Shop</a></li>
              <li><a href="#" className="hover:text-white">Prescriptions</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Medicines</a></li>
              <li><a href="#" className="hover:text-white">Healthcare</a></li>
              <li><a href="#" className="hover:text-white">Personal Care</a></li>
              <li><a href="#" className="hover:text-white">Medical Devices</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone size={20} className="mr-2" />
                <span>1-800-MEDICARE</span>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-2" />
                <span>support@medicare.com</span>
              </div>
              <div className="flex items-center">
                <MapPin size={20} className="mr-2" />
                <span>123 Health Street, Medical City</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} MediCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}