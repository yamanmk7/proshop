// Router.js

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "../component/Header";
import MainContainer from "../component/mainContainer";
import HomeScreen from "../screens/HomeScreen";
import ProductsScreen from "../screens/ProductsScreen";

const RouterComponent = () => {
  // const root = createRoot(document.getElementById("root"));
  // root.render(
  const router = createBrowserRouter([
    {
      
      element: <MainContainer/>,
      children:[{
        path: "/",
        element:<HomeScreen/>
      }]
    },
    {
      element: <MainContainer/>,
      children:[{
        path: "/products/:id",
        element: <ProductsScreen />,
      }]
    },
  ]);

  return (
    
      <RouterProvider router={router} />
       
  );
};

export default RouterComponent;
