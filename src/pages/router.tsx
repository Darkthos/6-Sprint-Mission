import { createBrowserRouter, RouteObject } from "react-router-dom";
import { SignUp } from "./SignUp";
import { SignIn } from "./SignIn";
import { Home } from "./Home";
import { Items } from "./Items";
import { ROUTER_LINKS } from "~/utils/constant";
import { AddItem } from "./AddItem";
import { ItemDetail } from "./ItemDetail";

const routes: RouteObject[] = [
  {
    path: ROUTER_LINKS.home,
    element: <Home />,
  },
  {
    path: ROUTER_LINKS.signup,
    element: <SignUp />,
  },
  {
    path: ROUTER_LINKS.signin,
    element: <SignIn />,
  },
  {
    path: ROUTER_LINKS.items,
    element: <Items />,
  },
  {
    path: ROUTER_LINKS.itemsId,
    element: <ItemDetail />,
  },
  {
    path: ROUTER_LINKS.additem,
    element: <AddItem />,
  },
];

export const router = createBrowserRouter(routes);
