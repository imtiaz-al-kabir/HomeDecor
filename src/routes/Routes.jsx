import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Wishlist from "../pages/Wishlist";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    hydrateFallbackElement: <p>Loading........</p>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/products",
        Component: Products,
      },
      { path: "/wishlist", Component: Wishlist },
      { path: "*", Component: ErrorPage },
    ],
  },
]);
export default router;
