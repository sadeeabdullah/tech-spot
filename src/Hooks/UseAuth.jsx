import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import React from 'react';



const UseAuth = () => {
    const auth =  useContext(AuthContext)
    return auth;
};

export default UseAuth;