import { GrUserManager } from "react-icons/gr";
import { RiAdminFill } from "react-icons/ri";
import useAxiosSecure from "../../../Hooks/useAxiosSecure"
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import React from 'react';



const ManageUser = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = axiosSecure.get("/users");
      return (await res).data;
    },
  });
console.log(users)

    const handleAdmin = (user)=>{
      axiosSecure.patch(`/users/admin/${user._id}`)
      .then(res => {
          if(res.data.modifiedCount>0){
              refetch();
              Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `${user.name} is admin now!`,
                  showConfirmButton: false,
                  timer: 1500
                });
              }
            })
            
            
            
            
          }
          const handleModerator = (user)=>{
            axiosSecure.patch(`/users/moderator/${user._id}`)
            .then(res => {
                if(res.data.modifiedCount>0){
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is moderator now!`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
          }



    return (
        <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>User Name</th>
        <th> User Email</th>
        <th>Make Moderator</th>
        <th>Make Admin</th>
      </tr>
    </thead>
    <tbody>
      {
        users?.map( (user, idx)=>
        <tr key={user._id}>
        <th>{idx + 1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>
        {
          user?.role === "moderator" ?  <p>Moderator</p> : <button onClick={()=> handleModerator(user)} className="btn text-main-color bg-black w-fit btn-sm shadow-inner border-0 shadow-black hover:bg-gray-600"><GrUserManager />
          </button>
        }

            
        </td>
        <td>
          {
            user?.role === "admin" ? <p>Admin</p> : <button onClick={()=> handleAdmin(user)} className="btn text-main-color bg-black w-fit btn-sm shadow-inner border-0 shadow-black hover:bg-gray-600"><RiAdminFill />
            </button>
          }
        
        </td>
      </tr>)
      }
      
     
    </tbody>
  </table>
</div>
    );
};

export default ManageUser;