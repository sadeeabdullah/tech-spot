import { NavLink } from "react-router-dom";
import navLogo from "../../../assets/Logo/Untitled design.svg"
import { useEffect, useState } from "react";
import UseAuth from "../../../Hooks/UseAuth";
import UseUserRole from "../../../Hooks/UseUserRole";

const Navbar = () =>{


  const [scrolled, setScrolled] = useState(false);
  const {user,logOut} = UseAuth();
  const [userRole] = UseUserRole();
  console.log(userRole)
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    const userRoles =  "user";

    const handleLogOut = () =>{
      logOut()
      .then(res=>{
        console.log(res)
      })
    }

  const navItems = <>
    <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'btn bg-[#ff3131]  text-white btn-sm' : 'btn btn-ghost btn-sm'
            }
          >
            Home
          </NavLink>
    <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Products
          </NavLink>
          {
            user &&
          <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Login/Register
        </NavLink>
          }
  </>

    return (
      <div className="mx-auto max-w-screen-xl">
        <div
      className={` ${
        scrolled
          ? "navbar  fixed z-10 bg-base-500  bg-opacity-100 bg-white text-black max-w-screen-xl mx-auto  "
          : "navbar  fixed z-10 bg-base-500 bg-opacity-100 bg-white text-black max-w-screen-xl mx-auto  "
      }`}
    >
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} htmlFor="my-drawer-2"  className="drawer lg:drawer-open drawer-button   btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <div className="">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-48 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <img src={navLogo} alt="" />
      {navItems}
    </ul>
  
  </div>
</div>
        </div>
        <a className="btn btn-ghost text-xl">
        <img className="bg-transparent" src={navLogo} alt="" />
        </a>
      </div>
      
      <div className="navbar-end">
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">
          {navItems}
        </ul>
        
      </div>
      {
        user && <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
          </div>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a className="justify-between pointer-events-none" aria-readonly>
              {user?.displayName}
            </a>
          </li>
          <li>
          <NavLink to={userRoles === "admin" ? '/dashboard/manageUser' : userRoles === "moderator" ? '/dashboard/preview' : '/dashboard/userProfile'}>
              Dashboard
          </NavLink>
          </li>
          <li>
            <button onClick={handleLogOut}>Log Out</button>
          </li>
        </ul>
      </div>
      }
      </div>
    </div>
      </div>
    );
};

export default Navbar;