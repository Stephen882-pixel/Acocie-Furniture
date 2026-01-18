import React, { useState, useEffect } from "react";
import { X } from 'lucide-react';
import Newsletter from './Newsletter';

const NewsletterModal = () => {
    const [isOpen,setIsOpen] = useState(false);
    const [hasShown,setHasShown] = useState(false);

    useEffect(() => {
        const modalShown = localStorage.getItem('newsletterModalShown');

        if(!modalShown && !hasShown){
            const timer = setTimeout(() => {
                setIsOpen(true);
                setHasShown(true);
            }, 5000);
            return () => clearTimeout(timer);
        }
    },[hasShown]);

    const handleClose = () => {
        setIsOpen(false);

        localStorage.getItem('newsletterModalShown','true');
    };

    if(!isOpen) return null;

      return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="p-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome! 
            </h2>
            <p className="text-gray-600">
              Get 10% off your first order when you subscribe to our newsletter
            </p>
          </div>
          
          <Newsletter variant="compact" />
          
          <button
            onClick={handleClose}
            className="w-full mt-4 text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            No thanks, I'll pay full price
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterModal;

