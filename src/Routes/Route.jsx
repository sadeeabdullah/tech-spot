import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout"
import Login from "../Pages/AuthRelatedPage/Login"
import Register from "../Pages/AuthRelatedPage/Register";
import Home from "../Pages/AuthRelatedPage/Home/Home";
import ProductDetails from "../Pages/Productdetails/ProductDetails";
import Product from "../Pages/Product/Product";

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
        
    }
])

export default Route;