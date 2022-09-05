import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./slices/movies";

import createSagaMiddleware from "redux-saga";
import { watchInitMovies } from "./sagas";

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movies: moviesSlice.reducer,
  },
  middleware: [saga],
});

saga.run(watchInitMovies);

export const globalActions = {
  movies: moviesSlice.actions,
};

export default store;
