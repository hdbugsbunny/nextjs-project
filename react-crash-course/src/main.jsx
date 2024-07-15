import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import NewPost from "./routes/NewPost";
import Posts from "./routes/Posts";
import RootLayout from "./routes/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    exact: true,
    element: <RootLayout />,
    children: [
      {
        path: "/",
        exact: true,
        element: <Posts />,
        children: [{ path: "/create-post", exact: true, element: <NewPost /> }],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
