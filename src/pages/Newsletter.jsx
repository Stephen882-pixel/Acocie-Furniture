import React, { useState } from "react";
import { Mail, Send, CheckCircle } from "lucide-react";

const NewsLetter = ({ variant = "default" }) => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Mock subscription - in a real app, this would call an API
    setSubscribed(true);
    setError("");

    // Reset after 3 seconds
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 3000);
  };

  // Default variant (for homepage, about page, etc.)
  if (variant === "default") {
    return (
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-8 md:p-12">
        <div className="max-w-4xl mx-auto">
          {subscribed ? (
            <div className="text-center text-white">
              <CheckCircle className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">
                Welcome to Our Community!
              </h3>
              <p className="text-orange-100 text-lg">
                Thanks for subscribing! Check your inbox for exclusive offers.
              </p>
            </div>
          ) : (
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Stay Updated with Our Newsletter
              </h3>
              <p className="text-xl text-orange-100 mb-8">
                Get exclusive deals, new arrivals, and design inspiration
                delivered to your inbox.
              </p>

              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-white text-orange-500 hover:bg-orange-50 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Subscribe
                  </button>
                </div>
                {error && <p className="text-white text-sm mt-2">{error}</p>}
                <p className="text-orange-100 text-sm mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Inline variant (for footer)
  if (variant === "inline") {
    return (
      <div>
        {subscribed ? (
          <div className="flex items-center gap-2 text-green-400 mb-4">
            <CheckCircle className="w-5 h-5" />
            <span>Successfully subscribed!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mb-4">
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                Subscribe
              </button>
            </div>
            {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
          </form>
        )}
      </div>
    );
  }

  // Compact variant (for sidebar, modals)
  if (variant === "compact") {
    return (
      <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
        {subscribed ? (
          <div className="text-center">
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
            <h4 className="font-bold text-gray-900 mb-1">You're In!</h4>
            <p className="text-sm text-gray-600">
              Check your inbox for confirmation.
            </p>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Newsletter</h4>
                <p className="text-sm text-gray-600">
                  Get 10% off your first order
                </p>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-3"
                required
              />
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Subscribe Now
              </button>
              {error && <p className="text-red-600 text-xs mt-2">{error}</p>}
            </form>
          </div>
        )}
      </div>
    );
  }

  return null;
};

export default NewsLetter;
