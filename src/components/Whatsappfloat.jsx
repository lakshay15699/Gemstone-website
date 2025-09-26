import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  // Replace with your actual WhatsApp number (with country code, no + or spaces)
  const whatsappNumber = "1234567890";
  const defaultMessage = "Hello! I'm interested in your services.";
  
  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        
        <button
          onClick={openWhatsApp}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
        
        
        
      </div>
    </div>
  );
};



export default WhatsAppFloat;