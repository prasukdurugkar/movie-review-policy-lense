import React from 'react';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, index) => (
        <svg 
          key={`full-${index}`} 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-4 h-4 text-yellow-500"
          viewBox="0 0 24 24" 
          fill="currentColor" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z"/>
        </svg>
      ))}
      {halfStar && (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-4 h-4 text-yellow-500" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z"/>
          <path d="M12 7.27L14.12 11.7 18.68 12.37 15.29 15.07 16.54 18.63 12 17.27z"/>
        </svg>
      )}
      {[...Array(emptyStars)].map((_, index) => (
        <svg 
          key={`empty-${index}`} 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-4 h-4 text-gray-400"
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z"/>
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
