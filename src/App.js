import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import PostDetail, { postLoader } from "./pages/PostDetail";
import PostList, { postListLoader } from "./pages/PostList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "posts",
        element: <PostList />,
        errorElement: <ErrorPage />,
        loader: postListLoader,
      },
      {
        path: `posts/:id`,
        element: <PostDetail />,
        loader: postLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
