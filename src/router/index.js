import ListCustomerPage from "../pages/ListCustomerPage";
import SignUpPage from "../pages/SignUpPage";
export const publicRoutes = [
  {
    path: "/",
    element: ListCustomerPage,
  },
  {
    path: "/signup",
    element: SignUpPage,
  },
];
