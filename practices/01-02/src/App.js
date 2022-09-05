import React from "react";

import Users from "./components/Users/Users";

import styles from "./App.scss";

const App = () => {
  const { App } = styles;

  return (
    <div className={App}>
      <Users />
    </div>
  );
};

export default App;
