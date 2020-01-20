import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import Homepage from "./pages/homepage/homepage.component";

function HatsPage() {
  return <h1>Hats Page</h1>;
}

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/shop/hats" component={HatsPage} />
    </Switch>
  );
}

export default App;
