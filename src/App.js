import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import Welcome from "./pages/Welcome";
import "./App.css";
import MainHeader from "./components/MainHeader";
import { fetchQuotesData } from "./store/quotes-actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchQuotesData());
  }, [dispatch]);

  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/welcome" exact>
            <Welcome />
          </Route>
          <Route path="/allQuotes">
            <AllQuotes />
          </Route>
          <Route path="/newQuote">
            <NewQuote />
          </Route>
          <Route path="*">
            <Redirect to="/welcome" />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
