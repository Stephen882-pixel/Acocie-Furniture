import React, { useState } from "react";
import { Star, CheckCircle } from "lucide-react";
import { useUser } from "../../context/UserContext";

const ReviewForm = ({ productName, onsubmit }) => {
  const { isAuthenticated } = useUser();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    comment: "",
    recommend: true,
  });

  const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]:e.target.value
    });
  };


  
};
