import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import NewPost, { action as newPostAction } from "./routes/NewPost";
import PostDetails, { loader as postDetailsLoader } from "./routes/PostDetails";
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
          {
            path: "/:id",
            exact: true,
            element: <PostDetails />,
            loader: postDetailsLoader,
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
