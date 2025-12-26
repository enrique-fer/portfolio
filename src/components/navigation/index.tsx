import type { JSX } from "react";
import { Route } from "react-router-dom";
import Home from "../../pages/Home";

export interface RouteElement {
    path: string;
    element: JSX.Element;
}


export default function CoreRouter() {
    const routes: RouteElement[] = [
    { path: "/", element: <Home /> },
  ];

  return (routes.map((route) =>
     
        <Route key={route.path} path={route.path} element={route.element} />
         
    ));
}