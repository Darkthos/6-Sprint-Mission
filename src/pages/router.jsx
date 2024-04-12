import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { SignUp } from "./SignUp";
import { SignIn } from "./SignIn";
import { Home } from "./Home";
import { Items } from "./Items";
import { ROUTER_LINKS } from "~/utils/constant";

export const router = createBrowserRouter([
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
]);
