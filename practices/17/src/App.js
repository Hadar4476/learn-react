import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import TheHeader from "./components/TheHeader/TheHeader";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";
import Page404 from "./pages/Page404";

import "./App.css";

const App = () => {
  return (
    <div>
      <TheHeader />
      <main className="main">
        <Switch>
          <Route exact path="/">
            <Redirect to="/quotes" />
          </Route>
          <Route exact path="/quotes" component={AllQuotes} />
          <Route path="/quotes/:id" component={QuoteDetail} />
          <Route path="/new-quote" component={NewQuote} />
          <Route path="*" component={Page404} /> {/* MUST COME LAST */}
        </Switch>
      </main>
    </div>
  );
};

export default App;
