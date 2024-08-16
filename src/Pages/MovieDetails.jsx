import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import AddReview from './AddReview';
import { selectMovieById } from '../redux/slices/movieSlice';

function MovieDetails() {
  const { movieId } = useParams();
  const navigate = useNavigate();

  // Fetch the movie based on the movieId
  const movie = useSelector((state) => selectMovieById(state, parseInt(movieId)));

  const [userReviews, setUserReviews] = useState([]);

  useEffect(() => {
    if (movie) {
      // Filter reviews by the user (assuming userId is 1)
      const reviews = movie.reviews ? movie.reviews.filter((review) => review.userId === 1) : [];
      setUserReviews(reviews);
    }
  }, [movie]);

  if (!movie) {
    return <div className="text-center text-gray-700">Movie not found</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8">
      <div className="flex flex-col items-center">
        <img 
          src={movie.posterUrl} 
          alt={movie.title} 
          className="w-full h-64 object-cover rounded-t-lg mb-4"
        />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{movie.title}</h1>
        <p className="text-lg font-semibold text-gray-600 mb-2">Rating: {movie.rating} / 5</p>
        <p className="text-gray-700 mb-6">{movie.description}</p>
        <div className="text-left w-full">
          <p className="text-lg text-gray-700 mb-2"><strong>Director:</strong> {movie.director}</p>
          <p className="text-lg text-gray-700 mb-2"><strong>Release Date:</strong> {new Date(movie.releaseDate).toLocaleDateString()}</p>
          <p className="text-lg text-gray-700 mb-2"><strong>Genre:</strong> {movie.genre}</p>
          <p className="text-lg text-gray-700 mb-2"><strong>Cast:</strong> {movie.cast.join(', ')}</p>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Reviews</h2>
        {userReviews.length > 0 ? (
          userReviews.map((review) => (
            <div key={review.id} className="mb-4 p-4 border rounded-lg shadow-sm bg-gray-50">
              <p className="text-gray-700 mb-2">{review.text}</p>
              <p className="text-gray-600">Rating: {review.rating} / 5</p>
              <button
                onClick={() => navigate(`/reviews/edit/${review.id}`, { state: { movieId: movie.id } })}
                className="mt-2 py-1 px-4 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition-colors duration-200"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(review.id)}
                className="ml-2 mt-2 py-1 px-4 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition-colors duration-200"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-700">No reviews yet.</p>
        )}
      </div>
      <AddReview />
    </div>
  );
}

export default MovieDetails;
