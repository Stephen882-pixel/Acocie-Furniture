import React from "react";
import { useNavigate } from "react-router-dom";
import { useWishList } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { Heart, ShoppingCart, Trash2, ArrowLeft } from "lucide-react";
import StarRating from "../components/product/StarRating";

const WishlistPage = () => {
  const navigate = useNavigate();
  const { wishlistItems, removeFromWishList, clearWishlist } = useWishList();
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    removeFromWishList(product.id);
  };

  const handleMoveAllToCart = () => {
    wishlistItems.forEach((item) => {
      addToCart(item);
    });
    clearWishlist();
    navigate("/cart");
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-12 h-12 text-gray-400" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your Wishlist is Empty
            </h2>
            <p className="text-gray-600 mb-8">
              Save your favorite items here to easily find them later!
            </p>
            <button
              onClick={() => navigate("/products")}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Start Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate("/products")}
            className="flex items-center text-gray-600 hover:text-orange-500 mb-4 transition"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Continue Shopping
          </button>
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">My Wishlist</h1>
              <p className="text-gray-600 mt-2">
                {wishlistItems.length}{" "}
                {wishlistItems.length === 1 ? "item" : "items"} saved
              </p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={handleMoveAllToCart}
                className="hidden md:flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                <ShoppingCart className="w-5 h-5" />
                Add All to Cart
              </button>
              <button
                onClick={clearWishlist}
                className="hidden md:flex items-center gap-2 border-2 border-red-500 text-red-500 hover:bg-red-50 px-6 py-3 rounded-lg font-semibold transition"
              >
                <Trash2 className="w-5 h-5" />
                Clear All
              </button>
            </div>
          </div>
        </div>

        {/* Wishlist Items Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition group"
            >
              {/* Product Image */}
              <div className="relative">
                <div
                  onClick={() => navigate(`/product/${item.id}`)}
                  className="aspect-square overflow-hidden bg-gray-100 cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromWishList(item.id)}
                  className="absolute top-2 right-2 w-10 h-10 bg-white hover:bg-red-50 rounded-full flex items-center justify-center shadow-md transition"
                >
                  <Heart className="w-5 h-5 text-red-500 fill-current" />
                </button>

                {/* Product Tag */}
                {item.tag && (
                  <span className="absolute top-2 left-2 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {item.tag}
                  </span>
                )}

                {/* Out of Stock Badge */}
                {!item.inStock && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="bg-white text-gray-900 px-3 py-1 rounded-lg font-semibold text-sm">
                      Out of Stock
                    </span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3
                  onClick={() => navigate(`/product/${item.id}`)}
                  className="font-semibold text-gray-900 mb-2 hover:text-orange-500 cursor-pointer transition"
                >
                  {item.name}
                </h3>

                <StarRating rating={item.rating} size="sm" />

                <div className="flex items-center justify-between mt-3 mb-4">
                  <span className="text-xl font-bold text-gray-900">
                    ${item.price}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <button
                    onClick={() => handleAddToCart(item)}
                    disabled={!item.inStock}
                    className={`w-full flex items-center justify-center gap-2 py-2 rounded-lg font-semibold transition ${
                      item.inStock
                        ? "bg-orange-500 hover:bg-orange-600 text-white"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    {item.inStock ? "Move to Cart" : "Out of Stock"}
                  </button>

                  <button
                    onClick={() => removeFromWishList(item.id)}
                    className="w-full flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 hover:border-red-500 hover:text-red-500 py-2 rounded-lg font-semibold transition"
                  >
                    <Trash2 className="w-4 h-4" />
                    Remove
                  </button>
                </div>

                {/* Added Date */}
                <p className="text-xs text-gray-500 mt-3 text-center">
                  Added {new Date(item.addedAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Actions */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 space-y-2">
          <button
            onClick={handleMoveAllToCart}
            className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition"
          >
            <ShoppingCart className="w-5 h-5" />
            Add All to Cart
          </button>
          <button
            onClick={clearWishlist}
            className="w-full flex items-center justify-center gap-2 border-2 border-red-500 text-red-500 hover:bg-red-50 py-3 rounded-lg font-semibold transition"
          >
            <Trash2 className="w-5 h-5" />
            Clear Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};


export default WishlistPage;
