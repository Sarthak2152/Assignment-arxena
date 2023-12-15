import Home from "./components/home";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
     <Home/>
    ),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  
]);
export default function App() {
  return (
    <>
      {/* <FormContainer /> */}
      <RouterProvider router={router} />
    </>
  );
}
