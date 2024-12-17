import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Product } from '../types';
import Toast from './ui/Toast';

interface ProductCardProps extends Product {}

export default function ProductCard({ id, name, price, image, description }: ProductCardProps) {
  const { addToCart } = useCart();
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = () => {
    addToCart({ id, name, price, image, description });
    setShowToast(true);
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <p className="text-gray-600 text-sm mt-1">{description}</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xl font-bold text-teal-600">${price.toFixed(2)}</span>
            <button
              onClick={handleAddToCart}
              className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors flex items-center group"
            >
              <ShoppingCart size={18} className="mr-2 transform group-hover:scale-110 transition-transform" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      
      {showToast && (
        <Toast
          message={`${name} added to cart!`}
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
}