import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductPages";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import LoginPage from "./pages/LoginPage";
import AccountPage from "./pages/AccountPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <UserProvider>
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

                {/* Login page */}
                <Route path="/login" element={<LoginPage />} />

                {/* Account Page */}
                <Route path="/account" element={<AccountPage />} />

                {/* Contact Page  */}
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </main>

            {/* Footer */}
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
