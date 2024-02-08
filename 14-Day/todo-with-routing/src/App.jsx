import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Completed from "./Pages/Completed";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Layout from "./Pages/Layout";

// root route : /

// routes : parent child relationship

// root route : /
// about route (child of root route) : /about
// completed route (child of root route) : /completed

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <>
          <Layout />
        </>
      }
    >
      <Route index element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/completed" element={<Completed/>} />
      <Route />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
