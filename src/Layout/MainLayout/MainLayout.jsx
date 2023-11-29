import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Shared/Navbar/Navbar";
import Footer from "../../Components/Shared/Footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='mx-auto lg:max-w-screen-xl pt-16'>
            <Outlet></Outlet>
            <Footer/>
            </div>
        </div>
    );
};

export default MainLayout;