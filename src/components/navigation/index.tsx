import type { JSX } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Experience from "../../pages/Experience";
import Education from "../../pages/Education";
import Contact from "../../pages/Contact";
import Skills from "../../pages/Skills";
import Projects from "../../pages/Projects";

export interface RouteElement {
  path: string;
  element: JSX.Element;
}

export default function CoreRouter() {
  const routes: RouteElement[] = [
    { path: "*", element: <Home /> },
    { path: "/education", element: <Education /> },
    { path: "/experience", element: <Experience /> },
    { path: "/skills", element: <Skills /> },
    { path: "/contact", element: <Contact /> },
    { path: "/projects", element: <Projects />}
  ];

  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}
