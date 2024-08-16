import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import Navbar from './components/Navbar';
import { AddReview, EditReview, MovieDetails, MovieList } from './Pages';
import { fetchMovies } from './redux/slices/movieSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movies" element={<MovieList />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/add-review" element={<AddReview />} />
          <Route path="/reviews/edit/:id" element={<EditReview />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
