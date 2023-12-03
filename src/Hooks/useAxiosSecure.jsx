import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/UseAuth"

const axiosSecure  = axios.create({
    baseURL:'https://tech-spot-server.vercel.app'
})
const useAxiosSecure = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();
    // request interceptor to add headers for every secure call to the api
    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        // console.log('request stopped by interceptors',token )
        config.headers.authorization = `bearer ${token}`
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      });
    
    // intercepts 401 and 403
    axiosSecure.interceptors.response.use(function(response){
        return response;
    }, async(error)=>{
        const status = error.response?.status
        // console.log('status error in the interceptors', status)
        if(status === 401 || status === 403){
            // for 401 and 403 log out the user and move user to the login page
            await logOut();
            navigate('/login')
        }
        return Promise.reject( error )
    })

    return axiosSecure;
};

export default useAxiosSecure;