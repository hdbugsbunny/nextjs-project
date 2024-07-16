import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import NewPost, { action as newPostAction } from "./routes/NewPost";
import Posts, { loader as postsLoader } from "./routes/Posts";
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
        loader: postsLoader,
        children: [
          {
            path: "/create-post",
            exact: true,
            element: <NewPost />,
            action: newPostAction,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
