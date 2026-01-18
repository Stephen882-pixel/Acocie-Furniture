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
};
