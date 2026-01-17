import React, { useState } from "react";
import { Star, CheckCircle, Verified } from "lucide-react";
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
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (rating === 0) {
      alert("Please select a rating");
      return;
    }

    const review = {
      ...formData,
      rating,
      date: new Date().toISOString().split("T")[0],
      verified: true,
    };

    if (onsubmit) {
      onsubmit(review);
    }

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setRating(0);
      setFormData({ title: "", comment: "", recommend: true });
    }, 3000);
  };

  if (!isAuthenticated) {
    return (
      <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-8 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Sign in to write a review
        </h3>
        <p className="text-gray-600 mb-4">
          Share your experience with other customers
        </p>
        <button
          onClick={() => (window.location.href = "/login")}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition"
        >
          Sign In
        </button>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Thank You for Your Review!
        </h3>
        <p className="text-gray-700">
          Your review has been submitted and will appear shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Write a Review</h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Rating Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Overall Rating *
          </label>
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                className="focus:outline-none"
              >
                <Star
                  className={`w-8 h-8 transition ${
                    star <= (hoverRating || rating)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              </button>
            ))}
            {rating > 0 && (
              <span className="text-sm text-gray-600 ml-2">
                {rating === 1 && "Poor"}
                {rating === 2 && "Fair"}
                {rating === 3 && "Good"}
                {rating === 4 && "Very Good"}
                {rating === 5 && "Excellent"}
              </span>
            )}
          </div>
        </div>

        {/* Review Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Review Title *
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Sum up your experience"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Review Comment */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your Review *
          </label>
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            placeholder={`Tell us about your experience with ${productName}`}
            required
            rows="5"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
          ></textarea>
          <p className="text-xs text-gray-500 mt-1">
            Minimum 50 characters ({formData.comment.length}/50)
          </p>
        </div>

        {/* Recommendation */}
        <div>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="recommend"
              checked={formData.recommend}
              onChange={(e) =>
                setFormData({ ...formData, recommend: e.target.checked })
              }
              className="w-4 h-4 text-orange-500 focus:ring-orange-500 rounded"
            />
            <span className="text-sm text-gray-700">
              I recommend this product
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={formData.comment.length < 50}
          className={`w-full py-3 rounded-lg font-semibold transition ${
            formData.comment.length >= 50
              ? "bg-orange-500 hover:bg-orange-600 text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};


export default ReviewForm;


