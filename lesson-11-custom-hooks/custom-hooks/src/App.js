import React from "react";

import BackwardCounter from "./components/BackwardCounter/BackwardCounter";
import ForwardCounter from "./components/ForwardCounter/ForwardCounter";

function App() {
  return (
    <React.Fragment>
      <ForwardCounter />
      <BackwardCounter />
    </React.Fragment>
  );
}

export default App;
