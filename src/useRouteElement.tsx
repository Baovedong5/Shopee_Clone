import RegisterLayout from "layouts/RegisterLayout/RegisterLayout";
import Login from "pages/Auth/Login";
import Register from "pages/Auth/Register";
import ProductList from "pages/Product/ProductList";
import { useRoutes } from "react-router-dom";

const useRouteElement = () => {
  const routeElement = useRoutes([
    {
      path: "/",
      element: <ProductList />,
    },
    {
      path: "/login",
      element: (
        <RegisterLayout>
          <Login />
        </RegisterLayout>
      ),
    },
    {
      path: "/register",
      element: (
        <RegisterLayout>
          <Register />
        </RegisterLayout>
      ),
    },
  ]);

  return routeElement;
};

export default useRouteElement;
