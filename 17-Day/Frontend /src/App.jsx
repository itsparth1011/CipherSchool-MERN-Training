import React from "react";
import { useEffect } from "react";
import axios from "axios";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(createRoutesFromElements(<Route></Route>));
function App() {
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/todos")
      .then((res) => console.log(res.data));
  }, []);
  return <div></div>;
}

export default App;
