import React from "react";
import { useNavigate } from "react-router-dom";
import { useWishList } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { Heart, ShoppingCart, Trash2, ArrowLeft } from 'lucide-react';
import StarRating from "../components/product/StarRating";

const WishlistPage = () => {
    const navigate = useNavigate();
    const { wishlistItems, removeFromWishlist, clearWishlist } = useWishList();
    const { addToCart } = useCart();

    const handleAddToCart = (product) => {
        addToCart(product);
        removeFromWishlist(product.id);
    };

    
}