import { takeLatest } from "redux-saga/effects";

import { initMoviesSaga } from "./movies";

export function* watchInitMovies() {
  yield takeLatest("movies/initMovies", initMoviesSaga);
}
