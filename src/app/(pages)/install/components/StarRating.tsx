import React from 'react'

const StarRating = ({ rating }: { rating: number }) => {
    const totalStars = 5;

    return (
      <div className="flex space-x-1">
        {Array.from({ length: totalStars }).map((_, index) => {
          const fillColor =
            rating >= index + 1
              ? "text-yellow-400" 
              : rating > index
              ? "text-yellow-100" 
              : "text-gray-400"; 
  
          const fillPercentage = Math.min(Math.max(rating - index, 0), 1);
  
          return (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <defs>
                <linearGradient id={`grad-${index}`} x1="0" x2="1" y1="0" y2="0">
                  <stop offset={`${fillPercentage * 100}%`} stopColor="#FACC15" />
                  <stop offset={`${fillPercentage * 100}%`} stopColor="#E5E7EB" />
                </linearGradient>
              </defs>
              <path
                d="M12 17.27l6.18 3.73-1.64-7.03L21 8.74l-7.19-.61L12 2 10.19 8.13 3 8.74l5.46 5.23L6.82 21z"
                fill={`url(#grad-${index})`}
              />
            </svg>
          );
        })}
      </div>
  
  )
}

export default StarRating
