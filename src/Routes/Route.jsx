import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout"
import Login from "../Pages/AuthRelatedPage/Login"
import Register from "../Pages/AuthRelatedPage/Register";
import Home from "../Pages/AuthRelatedPage/Home/Home";
import ProductDetails from "../Pages/Productdetails/ProductDetails";
import Product from "../Pages/Product/Product";
import Dashboard from "../Dashboard/Dashboard";
import MyProfile from "../Pages/ForDahsboard/user/MyProfile";
import PrivateRoute from "../Routes/PrivateRoute"
import UpdateProduct from "../Pages/ForDahsboard/user/UpdateProduct";
import AddProduct from "../Pages/ForDahsboard/user/AddProduct";
import Preivew from "../Pages/ForDahsboard/Moderator/Preivew";
import Reported from "../Pages/ForDahsboard/Moderator/Reported";
import Statistics from "../Pages/ForDahsboard/Admin/Statistics";
import ManageUser from "../Pages/ForDahsboard/Admin/ManageUser";
import ManageCoupon from "../Pages/ForDahsboard/Admin/ManageCoupon";
import MyProduct from "../Pages/ForDahsboard/user/MyProduct";

const Route = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },{
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/productDetails',
            element:<ProductDetails></ProductDetails>
        },
        {
            path:'/products',
            element:<Product></Product>
        }
]
        
    },
    {
        path: 'dashboard',
        element:<Dashboard></Dashboard>,
        children:[
            // for normal user
            {
                path:'userProfile',
                element:<PrivateRoute><MyProfile></MyProfile></PrivateRoute>
            },
            
            {
                path: 'myProduct',
                element:<PrivateRoute><MyProduct></MyProduct></PrivateRoute>
            },
            {
                path:'addProduct',
                element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path:'updateProduct',
                element:<PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>
            },
            // for moderator
            {
                path:'preview',
                element:<PrivateRoute><Preivew></Preivew></PrivateRoute>
            },
            
            {
                path: 'reported',
                element:<PrivateRoute><Reported></Reported></PrivateRoute>
            },
            // for admin

            {
                path:'statistics',
                element:<PrivateRoute><Statistics></Statistics></PrivateRoute>
            },
            
            {
                path: 'manageUser',
                element:<PrivateRoute><ManageUser></ManageUser></PrivateRoute>
            },
            {
                path:'manageCoupon',
                element:<PrivateRoute><ManageCoupon></ManageCoupon></PrivateRoute>
            },

        ]
    }
])

export default Route;