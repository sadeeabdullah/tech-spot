import axios from "axios";
import React from 'react';

const axiosPublic = axios.create({
    baseURL: 'http://api.sadeeabdullah.com/'

})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;