import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Contact from "./Contact"
import Services from "./Services"
import About from "./About"
import Header from "../Pages/Header"
import AppLayoutOutlet from "./AppLayoutOutlet"
import ErrorPage from "./ErrorPage"
import HowItWorks from "./HowItWorks"

function Routes() {
   // New React Router Method
   const router = createBrowserRouter([   
    {
      path: "/",
      element: <AppLayoutOutlet />,
      errorElement : <ErrorPage/>,
      children: [
        {
          path: "/",
          element: <Header/>,
        },

        {
          path: "/about",
          element: <About />,
        },

        {
          path: "/services",
          element: <Services />,
        },

        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/work",
          element: <HowItWorks/>,
        },
      ],
    },
  ]);
  return (
    <>
           <RouterProvider router={router}/>
    </>
  )
}

export default Routes
