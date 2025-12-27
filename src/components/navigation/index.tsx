import type { JSX } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Experience from "../../pages/Experience";

export interface RouteElement {
  path: string;
  element: JSX.Element;
}

export default function CoreRouter() {
  const routes: RouteElement[] = [
    { path: "/", element: <Home /> },
    { path: "/experience", element: <Experience /> },
  ];

  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}
