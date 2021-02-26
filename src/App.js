import "./App.css";
import { Header } from "./components/Header";
import Watchlist from "./components/Watchlist";
import Watched from "./components/Watched";
import Add from "./components/Add";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div className='App'>
      {/* <i class='fa fa-fighter-jet' aria-hidden='true'></i> */}
      <GlobalProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Watchlist />
            </Route>
            <Route path='/watched'>
              <Watched />
            </Route>
            <Route path='/add'>
              <Add />
            </Route>
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
