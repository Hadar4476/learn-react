import React from "react";

import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Meals />
      </main>
    </div>
  );
};

export default App;
