import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import All from "./pages/All";
import Nav from "./components/Nav";
import "./App.css";
import Career from "./pages/Career";

const router = createBrowserRouter([
  {
    path: "/",
    element: <All />,
  },
  {
    path: "/:id",
    element: <All />,
  },
  {
    path: "/career",
    element: (
      <>
        <Career/>
      </>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
