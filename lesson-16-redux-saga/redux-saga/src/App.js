import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { globalActions } from "./store";

import "./App.css";

const { movies: actions } = globalActions;

const App = () => {
  const { movies } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movies.length) {
      dispatch(actions.initMovies());
    }
  }, [movies, dispatch]);

  return <div className="App">App</div>;
};

export default App;
