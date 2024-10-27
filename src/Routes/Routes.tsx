import React from "react";

import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export type IRoute = {
  path: string;
  page: React.ReactNode;
};

export const routesList: IRoute[] = [
  {
    path: "/",
    page: <Home />,
  },
  {
    path: "/login",
    page: <Login />,
  },
  {
    path: "/register",
    page: <Register />,
  },
];
