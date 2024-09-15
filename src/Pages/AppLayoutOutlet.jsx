
import { Outlet } from "react-router-dom";
import Navbars from "../Components/Navbars";
import Footer from "./Footer";


export default function AppLayoutOutlet() {
  return (
    <>
      <Navbars/>
        <Outlet/>
      <Footer/>
    </>
  )
}
