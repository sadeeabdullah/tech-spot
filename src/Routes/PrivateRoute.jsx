/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import React from 'react';


const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    const location  = useLocation();

    if( loading ){
        return(
            <div className="h-screen flex justify-center items-center">
                <span className="loading loading-spinner text-error"></span>

            </div>
        )
    }
    if( user ){
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;