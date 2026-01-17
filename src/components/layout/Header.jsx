import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, Menu, X, User } from 'lucide-react';
import { useCart } from "../../context/CartContext";
import { useUser } from "../../context/UserContext";

const Header = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getCartCount } = useCart();
  const { isAuthenticated } = useUser();

  const handleNavigation = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => handleNavigation("/")}
          >
            <h1 className="text-2xl font-bold text-gray-900">
              Acocie <span className="text-orange-500">Furnitures</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => handleNavigation("/")}
              className="text-gray-900 font-medium hover:text-orange-500 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation("/products")}
              className="text-gray-600 hover:text-orange-500 transition-colors"
            >
              Products
            </button>
            <a
              href="#"
              className="text-gray-600 hover:text-orange-500 transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-orange-500 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Right Side - Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Cart Button */}
            <button
              onClick={() => handleNavigation("/cart")}
              className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                  {getCartCount()}
                </span>
              )}
            </button>

            {/* Account Button */}
            {isAuthenticated ? (
              <button
                onClick={() => handleNavigation("/account")}
                className="hidden md:flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-orange-500 transition-colors"
              >
                <User className="w-5 h-5" />
                <span>Account</span>
              </button>
            ) : (
              <button
                onClick={() => handleNavigation("/login")}
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors"
              >
                <User className="w-5 h-5" />
                <span>Login</span>
              </button>
            )}

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => handleNavigation("/")}
                className="text-gray-900 font-medium hover:text-orange-500 text-left transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation("/products")}
                className="text-gray-600 hover:text-orange-500 text-left transition-colors"
              >
                Products
              </button>
              <a
                href="#"
                className="text-gray-600 hover:text-orange-500 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-orange-500 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
