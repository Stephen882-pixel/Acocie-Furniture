import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import { CartProvider } from './context/CartContext'

function App() {

  return (
    <CartProvider>
      <div className='min-h-screen flex flex-col'>
        <Header />
        <main className='flex-grow'>
            <HomePage />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App
