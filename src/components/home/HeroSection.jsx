import React from 'react';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
               New Year Sale - Up to 40% Off
            </span>
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Transform Your Space with Quality Furniture
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Discover our curated collection of modern office and home furniture designed for comfort, style, and productivity.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition flex items-center">
                Shop Now <ChevronRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-lg font-semibold transition">
                View Catalog
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop" 
              alt="Modern furniture"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;