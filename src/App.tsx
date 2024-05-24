import { RouterProvider } from "react-router-dom";
import { router } from "./pages/router";
import "./css/style.css";

const App: React.FC = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
