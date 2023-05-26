import Footer from "../pages/Footer"
import MainNavigation from "../pages/MainNavigation"
import { Outlet } from "react-router-dom"

const Layout = (props) => {
  return (
    <>
        <MainNavigation/>
        <main>
        <Outlet/>
        </main>
       <Footer/>
    </>
  )
}

export default Layout