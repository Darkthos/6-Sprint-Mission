import { createBrowserRouter } from "react-router-dom";
import { ROUTER_LINKS } from "../utils/constant";
import { Home } from "./Home";

export const router = createBrowserRouter([
  {
    path: ROUTER_LINKS.home,
    element: <Home />,
  },
]);
