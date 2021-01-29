import React from "react";
import Input from "./components/Input";
import Label from "./components/Label";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route path="/" exact>
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
