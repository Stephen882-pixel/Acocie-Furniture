import React, { useState } from "react";
import { ThumbsUp, ThumbsDown, CheckCircle } from "lucide-react";
import StarRating from "./StarRating";

const ReviewList = ({ reviews }) => {
  const [sortBy, setSortBy] = useState("helpful");
  const [filterRating, setFilterRating] = useState("all");
  const [helpfulVotes, setHelpfulVotes] = useState({});

  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortBy === "helpful") {
      return b.helpful - b.notHelpful - (a.helpful - a.notHelpful);
    } else if (sortBy === "recent") {
      return new Date(b.date) - new Date(a.date);
    } else if (sortBy === "rating-high") {
      return b.rating - a.rating;
    } else if (sortBy === "rating-low") {
      return a.rating - b.rating;
    }
    return 0;
  });

  const filteredReviews =
    filterRating === "all"
      ? sortedReviews
      : sortedReviews.filter(
          (review) => review.rating === parseInt(filterRating),
        );

  const handleHelpfulVote = (reviewId, isHelpfull) => {
    setHelpfulVotes((prev) => ({
      ...prev,
      [reviewId]: isHelpfull ? "helpful" : "not-helpful",
    }));
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div>
      {/* Filters and Sort */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="flex items-center gap-4">
          <label className="text-sm font-medium text-gray-700">Filter:</label>
          <select
            value={filterRating}
            onChange={(e) => setFilterRating(e.target.value)}
            className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="all">All Ratings</option>
            <option value="5">5 Stars</option>
            <option value="4">4 Stars</option>
            <option value="3">3 Stars</option>
            <option value="2">2 Stars</option>
            <option value="1">1 Star</option>
          </select>
        </div>

        <div className="flex items-center gap-4">
          <label className="text-sm font-medium text-gray-700">Sort by:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="helpful">Most Helpful</option>
            <option value="recent">Most Recent</option>
            <option value="rating-high">Highest Rating</option>
            <option value="rating-low">Lowest Rating</option>
          </select>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {filteredReviews.length > 0 ? (
          filteredReviews.map((review) => (
            <div key={review.id} className="border-b border-gray-200 pb-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-semibold text-gray-900">
                      {review.author}
                    </span>
                    {review.verified && (
                      <span className="flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                        <CheckCircle className="w-3 h-3" />
                        Verified Purchase
                      </span>
                    )}
                  </div>
                  <StarRating rating={review.rating} size="sm" />
                </div>
                <span className="text-sm text-gray-500">
                  {formatDate(review.date)}
                </span>
              </div>

              {review.title && (
                <h4 className="font-semibold text-gray-900 mb-2">
                  {review.title}
                </h4>
              )}

              <p className="text-gray-700 leading-relaxed mb-4">
                {review.comment}
              </p>

              {/* Helpful Buttons */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">Was this helpful?</span>
                <button
                  onClick={() => handleHelpfulVote(review.id, true)}
                  disabled={helpfulVotes[review.id]}
                  className={`flex items-center gap-1 px-3 py-1 rounded-lg text-sm transition ${
                    helpfulVotes[review.id] === "helpful"
                      ? "bg-green-100 text-green-700"
                      : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                  } ${helpfulVotes[review.id] ? "cursor-not-allowed" : "cursor-pointer"}`}
                >
                  <ThumbsUp className="w-4 h-4" />
                  Yes (
                  {review.helpful +
                    (helpfulVotes[review.id] === "helpful" ? 1 : 0)}
                  )
                </button>
                <button
                  onClick={() => handleHelpfulVote(review.id, false)}
                  disabled={helpfulVotes[review.id]}
                  className={`flex items-center gap-1 px-3 py-1 rounded-lg text-sm transition ${
                    helpfulVotes[review.id] === "not-helpful"
                      ? "bg-red-100 text-red-700"
                      : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                  } ${helpfulVotes[review.id] ? "cursor-not-allowed" : "cursor-pointer"}`}
                >
                  <ThumbsDown className="w-4 h-4" />
                  No (
                  {review.notHelpful +
                    (helpfulVotes[review.id] === "not-helpful" ? 1 : 0)}
                  )
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No reviews match your filters</p>
          </div>
        )}
      </div>
    </div>
  );
};


export default ReviewList;
