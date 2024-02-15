import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";

import Home from "./Pages/Home";
import Users from "./Pages/Users";
import SingleUsers from "./Pages/SingleUsers";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Outlet />}>
      <Route index element={<Home />} />
      <Route path="users" element={<Users />} />
      <Route path="users/:userId" element={<SingleUsers />} />
    </Route>
  )
);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
