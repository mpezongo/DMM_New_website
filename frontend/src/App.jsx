import React from "react";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "./page/Home";
import Blog from "./page/Blog";
import ArticleDetail from "./component/ArticleDetail";
import Offres from "./page/Offres";
import Services from "./page/Services";

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
    },
    {
      path:'/services',
      element: <Services />
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={path} />
    </div>
  );
}

export default App;
