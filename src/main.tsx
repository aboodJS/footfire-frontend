import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import App from "./App.tsx";
import About from "./About.tsx";
import NotFound from "./NotFound.tsx";
import LaLiga from "./components/LaLiga.tsx";
import PL from "./components/PL.tsx";
import LigueOne from "./components/LigueOne.tsx";
import BundesLiga from "./components/BundesLiga.tsx";
import SerieA from "./components/SerieA.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/about", element: <About></About> },
  { path: "*", element: <NotFound /> },
  { path: "/LaLiga", element: <LaLiga /> },
  { path: "/PL", element: <PL /> },
  { path: "/LigueOne", element: <LigueOne /> },
  { path: "/BundesLiga", element: <BundesLiga /> },
  { path: "/SerieA", element: <SerieA /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
