import { useQuery } from "@tanstack/react-query";
import useAuth from "./UseAuth";
import useAxiosSecure from "./useAxiosSecure";


const UseUserRole = () => {
    const { user,loading }  = useAuth();
    const axiosSecure = useAxiosSecure();
    
    const { data: userRole, isLoading:isRoleLoading } = useQuery({
        queryKey:[ user?.email, 'isAdmin'],
        enabled: !loading && !!user?.email,
        queryFn:async()=>{
            if(user?.email){
                const res = await axiosSecure.get(`/users/userRole/${user?.email}`)
                console.log(res.data)
            return (res?.data?.role)
            }
        }
    })
    // console.log(userRole, isRoleLoading)
    return [ userRole, isRoleLoading ]
};

export default UseUserRole;