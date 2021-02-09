import Login from "../pages/Login"
import Terraces from "../pages/Terraces"

const Routes = [
  {
    exact: true,
    path: "/",
    name: "Home",
    component: Terraces,
  },
  {
    exact: true,
    path: "/terraces",
    name: "Terraces",
    component: Terraces,
  },
  {
    exact: true,
    path: "/login",
    name: "Login",
    component: Login,
  },
];

export default Routes;
