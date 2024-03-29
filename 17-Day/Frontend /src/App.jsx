import React from "react";
import { useEffect } from "react";
import axios from "axios";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route />
    </Route>
  )
);
function App() {
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/todos")
      .then((res) => console.log(res.data));
  }, []);
  return(
    <div>
      <RouterProvider router={router }/>
    </div>

  )
}

export default App;
