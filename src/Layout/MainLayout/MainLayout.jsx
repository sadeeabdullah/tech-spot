import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Shared/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="pt-16">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;