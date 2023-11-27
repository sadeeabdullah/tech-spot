import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout"
import Login from "../Pages/AuthRelatedPage/Login"
import Register from "../Pages/AuthRelatedPage/Register";

const Route = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[{
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        }
]
        
    }
])

export default Route;