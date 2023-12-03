import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://tech-spot-server.vercel.app'

})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;