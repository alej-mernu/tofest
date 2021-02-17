import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Routes from "./routes/index.js";
import Layout from "./components/Layout";

const AppRoutes = () => {
  return Routes.map((route) => (
    <Route path={route.path} exact={route.exact}>
      <Layout>
        <route.component
          exact={route.exact}
          key={route.path}
          component={route.component}
          path={route.path}
        />
      </Layout>
    </Route>
  ));
};

function App() {
  return (
    <main>
      <BrowserRouter>
        <div>
          <Switch>
            {AppRoutes()}
            <Redirect to="/" />
          </Switch>
        </div>
      </BrowserRouter>
    </main>
  );
}

export default App;
