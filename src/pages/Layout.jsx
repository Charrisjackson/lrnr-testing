import '../App.css'
import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

// adds header and footer to all pages, outlet is the content of all the other pages
const Layout = () => {
    return (
        <>
            <Navbar id="navbar" data-testid="navbar"/>
            <div className="h-full min-h-screen relative">
            <Outlet/>
            </div>
            <Footer id="footer" data-testid="footer"/>
        </>
    )
}

export default Layout;