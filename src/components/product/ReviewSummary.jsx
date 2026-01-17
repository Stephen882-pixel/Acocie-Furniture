import React from "react";
import StarRating from "./StarRating";

const ReviewSummary = ({ ratingBreakdown, avarageRating, totalReviews }) => {
  const getPercentage = (count) => {
    return totalReviews > 0 ? ((count / totalReviews) * 100).toFixed(0) : 0;
  };

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Customer Reviews</h3>

      {/* Overall Rating */}
      <div className="flex items-center gap-6 mb-6 pb-6 border-b">
        <div className="text-center">
          <div className="text-5xl font-bold text-gray-900 mb-2">
            {averageRating}
          </div>
          <StarRating rating={parseFloat(averageRating)} size="md" />
          <p className="text-sm text-gray-600 mt-2">
            Based on {totalReviews} reviews
          </p>
        </div>

        {/* Rating Distribution */}
        <div className="flex-1">
          {[5, 4, 3, 2, 1].map((rating) => {
            const count = ratingBreakdown[rating] || 0;
            const percentage = getPercentage(count);

            return (
              <div key={rating} className="flex items-center gap-3 mb-2">
                <span className="text-sm font-medium text-gray-700 w-12">
                  {rating} star
                </span>
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-yellow-400 rounded-full transition-all duration-300"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600 w-12 text-right">
                  {percentage}%
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recommendation */}
      <div className="text-center">
        <p className="text-sm text-gray-600">
          <span className="font-semibold text-gray-900">
            {Math.round(
              ((ratingBreakdown[5] + ratingBreakdown[4]) / totalReviews) * 100,
            )}
            %
          </span>{" "}
          of customers recommend this product
        </p>
      </div>
    </div>
  );
};

export default ReviewSummary;

