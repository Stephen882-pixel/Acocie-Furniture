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

    const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
      bio: 'With over 15 years of experience in furniture design, Sarah founded Acocie to bring quality furniture to every home.'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop',
      bio: 'Michael leads our design team, creating innovative furniture that combines style, comfort, and functionality.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Operations Director',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
      bio: 'Emily ensures smooth operations and exceptional customer service across all our channels.'
    },
    {
      name: 'David Thompson',
      role: 'Sustainability Officer',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
      bio: 'David spearheads our sustainability initiatives, ensuring eco-friendly practices in all our processes.'
    }
  ];
};
