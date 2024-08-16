import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addReview } from '../redux/slices/movieSlice';

function AddReview() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.list);

  const [selectedMovieId, setSelectedMovieId] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedMovieId) {
      alert('Please select a movie');
      return;
    }

    const newReview = {
      id: new Date().getTime(),
      userId: 1,
      text: reviewText,
      rating: parseFloat(rating),
    };

    dispatch(addReview({ movieId: parseInt(selectedMovieId), review: newReview }));

    setSelectedMovieId('');
    setReviewText('');
    setRating(1);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg mt-20"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Add Your Review</h2>

      <div className="mb-4">
        <label htmlFor="movieSelect" className="block text-gray-700 font-medium mb-2">
          Select Movie:
        </label>
        <select
          id="movieSelect"
          value={selectedMovieId}
          onChange={(e) => setSelectedMovieId(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
          required
        >
          <option value="">-- Select a Movie --</option>
          {movies.map((movie) => (
            <option key={movie.id} value={movie.id}>
              {movie.title}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="reviewText" className="block text-gray-700 font-medium mb-2">
          Your Review:
        </label>
        <textarea
          id="reviewText"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
          placeholder="Write your review here..."
          rows={4}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="rating" className="block text-gray-700 font-medium mb-2">
          Rating:
        </label>
        <select
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
          required
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring focus:ring-blue-200"
      >
        Submit Review
      </button>
    </form>
  );
}

export default AddReview;
