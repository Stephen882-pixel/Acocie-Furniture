import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Star,
  Minus,
  Plus,
  ShoppingCart,
  ArrowLeft,
  Truck,
  Shield,
  RotateCcw,
  Heart,
} from "lucide-react";
import { useCart } from "../context/CartContext";
import {
  getProductById,
  productDetails,
  getAvarageRating,
  getTotalReviews,
} from "../data/mockData";
import StarRating from "../components/product/StarRating";
import ReviewSummary from "../components/product/ReviewSummary";
import ReviewList from "../components/product/ReviewList";
import ReviewForm from "../components/product/ReviewForm";
import { useWishList } from "../context/WishlistContext";

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishList } = useWishList();
  const product = getProductById(id);
  const inWishList = isInWishList(product.id);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  
  const details = productDetails[id] || {};
  const averageRating = getAvarageRating(id);
  const totalReviews = getTotalReviews(id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <button
            onClick={() => navigate("/products")}
            className="text-orange-500 hover:text-orange-600"
          >
            Back to products
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setQuantity(1);
  };

  const handleReviewSubmit = (review) => {
    console.log("New review submitted:", review);
    // In a real app, this would call an API
  };

  const handleWishlistToggle = () => {
    if (inWishList) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate("/products")}
          className="flex items-center text-gray-600 hover:text-orange-500 mb-6 transition"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Products
        </button>

        {/* Product Details */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {product.tag && (
                <div className="flex gap-2">
                  <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {product.tag}
                  </span>
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h1>
                <div className="flex items-center gap-4 mb-4">
                  <StarRating
                    rating={parseFloat(averageRating)}
                    size="md"
                    showNumber={true}
                  />
                  <button
                    onClick={() => setActiveTab("reviews")}
                    className="text-orange-500 hover:text-orange-600 text-sm font-medium"
                  >
                    ({totalReviews} reviews)
                  </button>
                </div>
                <p className="text-4xl font-bold text-gray-900">
                  ${product.price}
                </p>
              </div>

              {/* Stock Status */}
              <div>
                {product.inStock ? (
                  <span className="inline-flex items-center text-green-600 font-medium">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                    In Stock
                  </span>
                ) : (
                  <span className="inline-flex items-center text-red-600 font-medium">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                    Out of Stock
                  </span>
                )}
              </div>

              {/* Description */}
              {details.description && (
                <p className="text-gray-700 leading-relaxed">
                  {details.description}
                </p>
              )}

              {/* Quantity Selector */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="font-medium">Quantity:</span>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 hover:bg-gray-100 transition"
                      disabled={!product.inStock}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-6 py-2 font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 hover:bg-gray-100 transition"
                      disabled={!product.inStock}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-semibold transition ${
                    product.inStock
                      ? "bg-orange-500 hover:bg-orange-600 text-white"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  <ShoppingCart className="w-5 h-5" />
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </button>

                <button
                  onClick={handleWishlistToggle}
                  className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-semibold transition border-2 ${
                    inWishList
                      ? "bg-red-50 border-red-500 text-red-500 hover:bg-red-100"
                      : "bg-white border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-500"
                  }`}
                >
                  <Heart
                    className={`w-5 h-5 ${inWishList ? "fill-current" : ""}`}
                  />
                  {inWishList ? "Remove from Wishlist" : "Add to Wishlist"}
                </button>
              </div>

              {/* Features */}
              <div className="border-t pt-6 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <Truck className="w-8 h-8 mx-auto mb-2 text-orange-500" />
                  <p className="text-sm font-medium">Free Shipping</p>
                </div>
                <div className="text-center">
                  <Shield className="w-8 h-8 mx-auto mb-2 text-orange-500" />
                  <p className="text-sm font-medium">2-Year Warranty</p>
                </div>
                <div className="text-center">
                  <RotateCcw className="w-8 h-8 mx-auto mb-2 text-orange-500" />
                  <p className="text-sm font-medium">30-Day Returns</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="border-t">
            <div className="border-b">
              <div className="max-w-7xl mx-auto px-8">
                <div className="flex gap-8">
                  {["description", "specifications", "reviews"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`py-4 px-2 font-medium capitalize transition ${
                        activeTab === tab
                          ? "text-orange-500 border-b-2 border-orange-500"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {tab}
                      {tab === "reviews" && ` (${totalReviews})`}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-8">
              {/* Description Tab */}
              {activeTab === "description" && details.features && (
                <div>
                  <h3 className="text-xl font-bold mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {details.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-orange-500 mr-2">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Specifications Tab */}
              {activeTab === "specifications" && details.specifications && (
                <div>
                  <h3 className="text-xl font-bold mb-4">Specifications</h3>
                  <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(details.specifications).map(
                      ([key, value]) => (
                        <div key={key} className="border-b pb-2">
                          <dt className="font-medium text-gray-900">{key}</dt>
                          <dd className="text-gray-600">{value}</dd>
                        </div>
                      ),
                    )}
                  </dl>
                </div>
              )}

              {/* Reviews Tab */}
              {activeTab === "reviews" && (
                <div className="space-y-8">
                  {/* Review Summary */}
                  {details.ratingBreakdown && (
                    <ReviewSummary
                      ratingBreakdown={details.ratingBreakdown}
                      averageRating={averageRating}
                      totalReviews={totalReviews}
                    />
                  )}

                  {/* Write Review Form */}
                  <ReviewForm
                    productName={product.name}
                    onSubmit={handleReviewSubmit}
                  />

                  {/* Reviews List */}
                  {details.reviews && details.reviews.length > 0 && (
                    <div>
                      <h3 className="text-2xl font-bold mb-6">
                        Customer Reviews
                      </h3>
                      <ReviewList reviews={details.reviews} />
                    </div>
                  )}

                  {/* No Reviews Message */}
                  {(!details.reviews || details.reviews.length === 0) && (
                    <div className="text-center py-12">
                      <p className="text-gray-500 mb-4">No reviews yet</p>
                      <p className="text-sm text-gray-400">
                        Be the first to review this product!
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
