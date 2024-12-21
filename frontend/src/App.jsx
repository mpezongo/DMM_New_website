import React from "react";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "./page/Home";

function App() {
  const path = createBrowserRouter([
    {
      path:'/',
      element:<Home />
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={path} />
    </div>
  );
}

export default App;
