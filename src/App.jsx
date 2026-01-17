import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          {/* Header - Sticky Navigation */}
          <Header />
          
          {/* Main Content Area */}
          <main className="flex-grow">
            <Routes>
              {/* Home Page */}
              <Route path="/" element={<HomePage />} />
              
              {/* Products Listing Page */}
              <Route path="/products" element={<ProductsPage />} />
              
              {/* Individual Product Detail Page */}
              <Route path="/product/:id" element={<ProductDetailPage />} />
              
              {/* Shopping Cart Page */}
              <Route path="/cart" element={<CartPage />} />
              
              {/* Checkout Page */}
              <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
          </main>
          
          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;