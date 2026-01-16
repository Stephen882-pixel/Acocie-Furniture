import React from 'react';
import { Truck, Shield, Phone } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'On orders over $500'
    },
    {
      icon: Shield,
      title: '2-Year Warranty',
      description: 'Quality guaranteed'
    },
    {
      icon: Phone,
      title: '24/7 Support',
      description: "We're here to help"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Icon className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;