import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import NewPost from "./components/NewPost";
import "./index.css";

const router = createBrowserRouter([
  { path: "/", exact: true, element: <App /> },
  { path: "/create-post", exact: true, element: <NewPost /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
