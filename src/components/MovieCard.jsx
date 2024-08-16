import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img 
        src={movie.posterUrl} 
        alt={movie.title} 
        className="w-full h-40 object-cover rounded-t-lg mb-4"
      />
      <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
      <p className="text-gray-600 mb-4">{movie.description.slice(0, 100)}...</p>
      <Link to={`/movies/${movie.id}`} className="text-blue-500 hover:underline">Read More</Link>
    </div>
  );
}

export default MovieCard;
