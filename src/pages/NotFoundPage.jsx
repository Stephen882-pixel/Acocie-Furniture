import React from "react";
import { useNavigate } from "react-router-dom";
import { Home, Search, ShoppingBag, ArrowLeft, Phone } from "lucide-react";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const quickLinks = [
    {
      icon: Home,
      title: "Go Home",
      description: "Return to our homepage",
      action: () => navigate("/"),
      color: "orange",
    },
    {
      icon: ShoppingBag,
      title: "Shop Products",
      description: "Browse our catalog",
      action: () => navigate("/products"),
      color: "blue",
    },
    {
      icon: Phone,
      title: "Contact Us",
      description: "Get help from our team",
      action: () => navigate("/contact"),
      color: "green",
    },
  ];


    const popularProducts = [
    {
      name: 'Executive Oak Desk',
      price: 599.99,
      image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=200&h=200&fit=crop',
      link: '/product/1'
    },
    {
      name: 'Ergonomic Pro Chair',
      price: 399.99,
      image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=200&h=200&fit=crop',
      link: '/product/2'
    },
    {
      name: 'Modern L-Sofa',
      price: 1299.99,
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=200&h=200&fit=crop',
      link: '/product/3'
    }
  ];

    return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full">
        
        {/* Main 404 Content */}
        <div className="text-center mb-12">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="relative inline-block">
              <h1 className="text-9xl md:text-[200px] font-bold text-gray-200 select-none">
                404
              </h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 md:w-48 md:h-48 bg-orange-100 rounded-full flex items-center justify-center">
                  <Search className="w-16 h-16 md:w-24 md:h-24 text-orange-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Error Message */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-xl text-gray-600 mb-2">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <p className="text-gray-500">
            Don't worry, it happens to the best of us!
          </p>

          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="mt-8 inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {quickLinks.map((link, index) => {
            const Icon = link.icon;
            const colorClasses = {
              orange: 'bg-orange-100 text-orange-500 hover:bg-orange-500',
              blue: 'bg-blue-100 text-blue-500 hover:bg-blue-500',
              green: 'bg-green-100 text-green-500 hover:bg-green-500'
            };

            return (
              <button
                key={index}
                onClick={link.action}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition group"
              >
                <div className={`w-16 h-16 ${colorClasses[link.color]} rounded-full flex items-center justify-center mx-auto mb-4 transition group-hover:text-white`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {link.title}
                </h3>
                <p className="text-gray-600">
                  {link.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Popular Products Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Or Check Out Our Popular Products
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {popularProducts.map((product, index) => (
              <div
                key={index}
                onClick={() => navigate(product.link)}
                className="group cursor-pointer"
              >
                <div className="aspect-square rounded-lg overflow-hidden bg-gray-100 mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-orange-500 transition">
                  {product.name}
                </h4>
                <p className="text-xl font-bold text-gray-900">
                  ${product.price}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Help Text */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Still can't find what you're looking for?{' '}
            <button
              onClick={() => navigate('/contact')}
              className="text-orange-500 hover:text-orange-600 font-medium underline"
            >
              Contact our support team
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
