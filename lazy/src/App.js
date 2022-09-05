import React, { Fragment, lazy } from "react";
import { Route } from "react-router-dom";

import TheHeader from "./components/TheHeader/TheHeader";
import Homepage from "./pages/Homepage";
// import About from "./pages/About"; // uncomment to see the difference in dev tools -> network
import Contact from "./pages/Contact";

const About = lazy(() => import("./pages/About")); // comment to see the difference in dev tools -> network

const App = () => {
  return (
    <Fragment>
      <TheHeader />
      <main>
        <Route exact path="/" component={Homepage} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </main>
    </Fragment>
  );
};

export default App;
