import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';

function MovieList() {
  // Dummy data for movies
  const movies = useSelector((state) => state.movies.list);
  // console.log(movies)

  return (
    <div className="bg-white text-gray-800 min-h-screen py-6 px-4">
      <h1 className="text-3xl font-bold mb-6">Movies</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
