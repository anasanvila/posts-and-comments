import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import RootLayout from "./layouts/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import PostDetail, { postLoader } from "./pages/PostDetail";
import PostList, { postListLoader } from "./pages/PostList";

function text(message) {
  console.log("Hello from ", message);
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout text={text} />,
    errorElement: <ErrorPage text={text} />,
    children: [
      {
        index: true,
        path: "posts",
        element: <PostList text={text} />,
        errorElement: <ErrorPage text={text} />,
        loader: postListLoader,
      },
      {
        path: `posts/:id`,
        element: <PostDetail text={text} />,
        loader: postLoader,
      },
    ],
  },
]);

function App() {
  useEffect(() => text("App"));
  return <RouterProvider router={router} />;
}

export default App;
