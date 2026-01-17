import React from "react";
import {
  Target,
  Heart,
  Award,
  Users,
  TrendingUp,
  Shield,
  Leaf,
  Truck,
} from "lucide-react";

const AboutPage = () => {
  const stats = [
    { number: "10+", label: "Years in Business" },
    { number: "50K+", label: "Happy Customers" },
    { number: "500+", label: "Products Available" },
    { number: "99%", label: "Customer Satisfaction" },
  ];

    const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'We put our customers at the heart of everything we do, ensuring quality products and exceptional service.'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We source only the finest materials and work with skilled craftsmen to deliver superior furniture.'
    },
    {
      icon: Shield,
      title: 'Trust & Integrity',
      description: 'We believe in honest pricing, transparent policies, and building long-term relationships with our customers.'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'We are committed to eco-friendly practices and sustainable sourcing to protect our planet.'
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'We continuously evolve our designs and services to meet the changing needs of modern living.'
    },
    {
      icon: Truck,
      title: 'Reliable Delivery',
      description: 'We ensure timely delivery and professional installation services for a hassle-free experience.'
    }
  ];
};
