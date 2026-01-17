import React from "react";
import { Star } from "lucide-react";

const StarRating = ({
  rating,
  maxRating = 5,
  size = "md",
  showNumber = false,
  interactive = false,
  onRatingChange,
}) => {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8",
  };

  const handleClick = (selectedRating) => {
    if(interactive && onRatingChange){
        onRatingChange(selectedRating);
    }
  };

    return (
    <div className="flex items-center gap-1">
      {[...Array(maxRating)].map((_, index) => {
        const starRating = index + 1;
        const isFilled = starRating <= Math.floor(rating);
        const isPartial = starRating === Math.ceil(rating) && rating % 1 !== 0;
        
        return (
          <div
            key={index}
            onClick={() => handleClick(starRating)}
            className={interactive ? 'cursor-pointer' : ''}
          >
            <Star
              className={`${sizes[size]} ${
                isFilled
                  ? 'text-yellow-400 fill-current'
                  : isPartial
                  ? 'text-yellow-400 fill-current opacity-50'
                  : 'text-gray-300'
              } ${interactive ? 'hover:text-yellow-400 hover:fill-current transition' : ''}`}
            />
          </div>
        );
      })}
      {showNumber && (
        <span className="text-sm text-gray-600 ml-1">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
};

export default StarRating;


