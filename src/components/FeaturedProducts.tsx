import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: '1',
    name: "Pain Relief Tablets",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    description: "Fast-acting pain relief medication"
  },
  {
    id: '2',
    name: "Vitamin C Complex",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1616671276441-2f2c277b8bf6?auto=format&fit=crop&q=80&w=800",
    description: "Immune system support supplements"
  },
  {
    id: '3',
    name: "First Aid Kit",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=800",
    description: "Complete emergency medical kit"
  },
  {
    id: '4',
    name: "Digital Thermometer",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1584308666999-b85cdf62a0dc?auto=format&fit=crop&q=80&w=800",
    description: "Accurate temperature measurement"
  }
];

export default function FeaturedProducts() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}