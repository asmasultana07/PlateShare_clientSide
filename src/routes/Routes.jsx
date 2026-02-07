import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home";
import AvailableFoods from "../pages/Foods/AvailableFoods";
import Profile from "../pages/Profile";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import ErrorPage from "../pages/Error/ErrorPage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
        {
            index: true,
            element: <Home />,
        },
        {
            path: "/available-foods",
            element: <AvailableFoods />,
        },
        {
            path: "/profile",
            element: <Profile />,
        },
        {
            path: "/registration",
            element: <Register />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/food/:id",
            element: <FoodDetails />,
        },
        {
            path: "/create-food",
            element: <AddNewFoods />,
        },
        {
            path: "/manage-food",
            element: <ManageFood />,
        },
        {
            path: "/food-request",
            element: <FoodRequest />,
        },
    ]
  },
  {
     path: '*',
    element: <ErrorPage />,
        
  }
]);

export default router;