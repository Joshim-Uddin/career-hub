import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Statistics from "./components/Statistics/Statistics";
import Applied from "./components/Applied/Applied";
import Blog from "./components/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("jobCategory.json"),
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "appliedjob",
        element: <Applied />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
