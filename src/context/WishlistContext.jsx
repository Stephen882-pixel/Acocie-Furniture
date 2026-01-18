import React, { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export const useWishList = () => {
    const context = useContext(WishlistContext);
    if(!context){
        throw new Error('useWishList must be used within WishlistProvider');
    }
    return context;
};

export const WishlistProvider =  ({ children }) => {
    const [wishlistItems,setWishlistItems] = useState([]);


    const addToWishList = (product) => {
        setWishlistItems(prevItems => {
            const exists = prevItems.find(item => item.id === product.id);
            if(exists){
                return prevItems;
            }

            return [...prevItems,{ ...product,addedAt: new Date().toISOString()}];
        });
    };

    const removeFromWishList = (productId) => {
        setWishlistItems(prevItems => prevItems.filter(item => item.id !== productId));
    };

    const isInWishList = (productId) => {
        return wishlistItems.some(item => item.id === productId);
    };

    const clearWishList = () => {
        setWishlistItems([]);
    };

    const getWishListCount = () => {
        return wishlistItems.length;
    };

    const value = {
        wishlistItems,
        addToWishList,
        removeFromWishList,
        isInWishList,
        clearWishList,
        getWishListCount
    };

    return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
}

