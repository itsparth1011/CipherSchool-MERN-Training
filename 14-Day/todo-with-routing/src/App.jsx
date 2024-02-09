import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Completed from "./Pages/Completed";
import { useState } from "react";

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



function App() {

  const [todos, setTodos] = useState([{
    id: "1",
    title: "Complete Task A",
    completed: false,
  },
  {
    id: "2",
    title: "Read Book",
    completed: false,
  },
  {
    id: "3",
    title: "Write Code",
    completed: false,
  },
  ])
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
        <Route index element={<Home todos={todos} setTodos={setTodos} />} />
        <Route path="/about" element={<About />} />
        <Route path="/completed" element={<Completed todos={todos} />} />
        <Route />
      </Route>
    )
  );


  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
