import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import App from "./App.tsx";
import About from "./About.tsx";
import NotFound from "./NotFound.tsx";
import LeaguePage from "./components/LeaguePage.tsx";
import Login from "./Login.tsx";
import Signup from "./Signup.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/about", element: <About></About> },
  { path: "*", element: <NotFound /> },
  { path: "/leagues/:id", element: <LeaguePage /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
