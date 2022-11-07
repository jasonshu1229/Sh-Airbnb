import React from 'react';
import {Navigate} from "react-router-dom";

const Home = React.lazy(() => import('@/views/home'));
// import Home from "@/views/home";
const Entire = React.lazy(() => import('@/views/entire'));
const Detail = React.lazy(() => import('@/views/detail'));
const Demo = React.lazy(() => import('@/views/demo'));

const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/detail",
    element: <Detail />
  },
  {
    path: "/entire",
    element: <Entire />
  },
  {
    path: "/demo",
    element: <Demo />
  }
]

export default routes;