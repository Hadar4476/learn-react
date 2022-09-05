const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  movies: [],
  isLoading: false,
  error: null,
};

const initMovies = (state) => {
  state.isLoading = true;
};

const initMoviesSuccess = (state, action) => {
  state.isLoading = false;
  state.movies = action.payload;
};

const initMoviesFail = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    initMovies,
    initMoviesSuccess,
    initMoviesFail,
  },
});

export default moviesSlice;
