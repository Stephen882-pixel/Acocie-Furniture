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

};
