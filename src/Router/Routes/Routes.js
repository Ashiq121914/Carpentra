import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import ReviewUpdate from "../../Pages/MyReviews/ReviewUpdate";
import Services from "../../Pages/Services/Services";
import ServicesDetails from "../../Pages/Services/ServicesDetails";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/blogs",
        element: <Blog></Blog>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/addService",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "/myReviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/reviewUpdate/:id",
        element: (
          <PrivateRoute>
            <ReviewUpdate></ReviewUpdate>
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return fetch(
            `https://service-review-server-side-eight.vercel.app/reviewUpdate/${params.id}`
          );
        },
      },
      {
        path: "/services/:id",
        element: <ServicesDetails></ServicesDetails>,
        loader: ({ params }) => {
          return fetch(
            `https://service-review-server-side-eight.vercel.app/services/${params.id}`
          );
        },
      },
    ],
  },
]);

export default router;
