import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { editReview } from '../redux/slices/movieSlice';

function EditReview() {
  const { id } = useParams();
  const { state } = useLocation(); // Contains movieId
  const movie = useSelector((state) =>
    state.movies.list.find((movie) => movie.id === state.movieId)
  );
  const review = movie.reviews.find((review) => review.id === id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const formik = useFormik({
    initialValues: {
      text: review.text,
      rating: review.rating,
    },
    validationSchema: Yup.object({
      text: Yup.string().required('Review is required'),
      rating: Yup.number().required('Rating is required').min(1).max(5),
    }),
    onSubmit: (values) => {
      dispatch(editReview({ movieId: state.movieId, review: { ...values, id } }));
      navigate(`/movies/${state.movieId}`);
    },
  });

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Edit Review</h1>
      <form onSubmit={formik.handleSubmit}>
        <label className="block text-gray-700 font-semibold mb-2">Review:</label>
        <textarea
          name="text"
          value={formik.values.text}
          onChange={formik.handleChange}
          className="w-full p-2 border rounded-lg mb-4"
        />
        {formik.errors.text ? <div className="text-red-600 mb-4">{formik.errors.text}</div> : null}

        <label className="block text-gray-700 font-semibold mb-2">Rating:</label>
        <input
          type="number"
          name="rating"
          value={formik.values.rating}
          onChange={formik.handleChange}
          className="w-full p-2 border rounded-lg mb-4"
        />
        {formik.errors.rating ? <div className="text-red-600 mb-4">{formik.errors.rating}</div> : null}

        <button
          type="submit"
          className="py-2 px-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-200"
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default EditReview;
