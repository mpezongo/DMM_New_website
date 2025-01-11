import React from "react";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "./page/Home";
import Blog from "./page/Blog";
import ArticleDetail from "./component/ArticleDetail";
import Offres from "./page/Offres";

function App() {
  const path = createBrowserRouter([
    {
      path:'/',
      element:<Home />},
    { path: '/blog',
      element: <Blog />
    },
    {
      path:'/article/:id',
      element: <ArticleDetail />
    },
    {
      path:'/offres',
      element: <Offres />
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={path} />
    </div>
  );
}

export default App;
