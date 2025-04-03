import { Outlet } from "react-router-dom"
import Nav from "../Components/Navbar/Nav"
import Footer from "../Components/Footer/Footer"

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout