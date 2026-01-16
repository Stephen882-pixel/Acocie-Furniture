import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getCartCount } = useCart();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Acocie <span className="text-orange-500">Furnitures</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-900 font-medium hover:text-orange-500 transition">Home</a>
            <a href="/products" className="text-gray-600 hover:text-orange-500 transition">Products</a>
            <a href="/categories" className="text-gray-600 hover:text-orange-500 transition">Categories</a>
            <a href="/about" className="text-gray-600 hover:text-orange-500 transition">About</a>
            <a href="/contact" className="text-gray-600 hover:text-orange-500 transition">Contact</a>
          </nav>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button className="relative p-2 hover:bg-gray-100 rounded-full transition">
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </button>
            
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="/" className="text-gray-900 font-medium hover:text-orange-500">Home</a>
              <a href="/products" className="text-gray-600 hover:text-orange-500">Products</a>
              <a href="/categories" className="text-gray-600 hover:text-orange-500">Categories</a>
              <a href="/about" className="text-gray-600 hover:text-orange-500">About</a>
              <a href="/contact" className="text-gray-600 hover:text-orange-500">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;