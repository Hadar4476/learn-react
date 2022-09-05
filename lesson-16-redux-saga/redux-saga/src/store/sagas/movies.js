import { put, all } from "redux-saga/effects";
import axios from "../../my-axios";

import moviesSlice from "../slices/movies";

export function* initMoviesSaga() {
  try {
    const { data } = yield axios.get("/films");
    const movies = data.results;
    const mappedMovies = movies.map((m) => {
      return {
        id: m.episode_id,
        title: m.title,
        description: m.opening_crawl,
        releastDate: m.release_date,
      };
    });

    yield all([yield put(moviesSlice.actions.initMoviesSuccess(mappedMovies))]);
  } catch (error) {
    yield put(moviesSlice.actions.initMoviesFail(error));
  }
}
