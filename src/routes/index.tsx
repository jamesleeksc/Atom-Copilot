import { lazy, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LazyLoad from "../components/UI/LazyLoad";

const Login = lazy(() => import("../pages/Auth/Login"));
const MainPage = lazy(() => import("../pages/MainPage"));

const Routes = () => {
  const publicRoutes = [{ path: "/", element: <Login /> }];
  const authRoutes = [
    {
      path: "/dashboard",
      element: <MainPage />,
    },
  ];

  const router = createBrowserRouter([...publicRoutes, ...authRoutes]);

  return (
    <Suspense fallback={<LazyLoad />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default Routes;
