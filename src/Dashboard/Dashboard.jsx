import { NavLink, Outlet } from "react-router-dom";
import { FcStatistics } from "react-icons/fc";
import { MdManageAccounts, MdRateReview, MdReportProblem } from "react-icons/md";
import { RiCoupon2Fill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { IoAddCircleSharp } from "react-icons/io5";
import { RiShoppingCartFill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
// import useModerator from "../Hooks/useModerator";
import UseUserRole from "../Hooks/UseUserRole";
import { Helmet } from "react-helmet-async";





const Dashboard = () => {
    const [userRole,isRoleLoading] = UseUserRole();
    // console.log(userRole)
    if(isRoleLoading){
        <div>jsdhfdhs</div>
    }

   
   
    return(
        <div className="flex lg:flex-row flex-col">
            <Helmet>
                <title>Tech Spot | Dashboard</title>
            </Helmet>
        {/* for side drawer */}
        <div className=" lg:w-1/5 lg:min-h-screen  text-white font-semibold   bg-main-color">
            <ul className="flex flex-col  gap-3 p-4">
                {
                    userRole === "admin" &&<>
                    <li className="">
                    
                    <NavLink to="/dashboard/statistics" className="flex items-center"
                    >
                    <FcStatistics />
                    Statistics Page
                        </NavLink>
                </li>
                <li>
                    
                    <NavLink to="/dashboard/manageUser"
                     className="flex items-center"
                  >
                    <MdManageAccounts />
                        Manage Users
                        </NavLink>
                </li>
                <li>
                    
                    <NavLink to="/dashboard/manageCoupon"
                     className="flex items-center"
                    >
                    <RiCoupon2Fill />
                    Manage Coupons
                        </NavLink>
                </li>
                
                    </>
                    
                    
                }
                {
                    userRole === "moderator" &&
                    <>
                    <li>
                    
                    <NavLink to="/dashboard/preview"
                     className="flex items-center"
                   >
                    <MdRateReview />
                    Product Review Queue
                        </NavLink>
                </li>
            <li>
                    
                    <NavLink to="/dashboard/reported"
                     className="flex items-center"
                    >
                    <MdReportProblem />
                    Reported Contents
                        </NavLink>
                </li>
                    </>
                }
                {
                   userRole === "user" && <>
                    <li>
                    
                    <NavLink to="/dashboard/userProfile"
                     className="flex items-center"
                    >
                    <CgProfile />
                     Profile
                        </NavLink>
                </li>
                <li>
                    
                    <NavLink to="/dashboard/addProduct"
                     className="flex items-center"
                    >
                    <IoAddCircleSharp />
                    Add Product
                        </NavLink>
                </li>
                <li>
                    
                    <NavLink to="/dashboard/myProduct"
                     className="flex items-center"
                    >
                    <RiShoppingCartFill />
                    My Products
                        </NavLink>
                </li>
               
                    </>
                }
                {/* shared navlink */}
            <div className="divider"></div>

            <li>
                    
                    <NavLink to="/"
                     className="flex items-center"
                    >
                    <FaHome></FaHome>
                        Home
                        </NavLink>
                </li>
            
            </ul>
        </div>

        {/* for content */}
        <div className="flex-1 p-8">
            <Outlet></Outlet>
        </div>

    </div>
    );
};

export default Dashboard;