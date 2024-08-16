import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import dummyMovies from './dummy';

// Async action to fetch movies from API or static JSON file
export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async () => {
    try {
      const response = await fetch('/movies.json'); // Update this path
      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }
      const data = await response.json();
      console.log('Fetched movies:', data); // Debugging line
      return data;
    } catch (error) {
      console.error('Error fetching movies:', error);
      throw error;
    }
  }
);

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    list:dummyMovies,
    status: 'idle',
    error: null,
  },
  reducers: {
    setMovies(state, action) {
      state.list = action.payload;
    },
    addReview(state, action) {
      const { movieId, review } = action.payload;
      const movie = state.list.find((movie) => movie.id === movieId);
      if (movie) {
        movie.reviews = [...(movie.reviews || []), review];
      }
    },
    editReview(state, action) {
      const { movieId, review } = action.payload;
      const movie = state.list.find((movie) => movie.id === movieId);
      if (movie) {
        const reviewIndex = movie.reviews.findIndex((r) => r.id === review.id);
        if (reviewIndex !== -1) {
          movie.reviews[reviewIndex] = review;
        }
      }
    },
    deleteReview: (state, action) => {
      const movie = state.list.find((movie) => movie.id === action.payload.movieId);
      if (movie) {
        movie.reviews = movie.reviews.filter((review) => review.id !== action.payload.reviewId);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
        console.log('Movies state updated:', state.list); // Debugging line
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        console.error('Fetch failed:', action.error); // Debugging line
      });
  },
});

export const selectMovieById = (state, movieId) =>
  state.movies.list.find((movie) => movie.id === movieId);

export const { setMovies, addReview, editReview, deleteReview } = movieSlice.actions;

export default movieSlice.reducer;
