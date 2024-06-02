
import { GrDocumentUpdate } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import UseAuth from "../../../Hooks/UseAuth";
import { Link } from "react-router-dom";
import React from 'react';


const MyProduct = () => {

  const axiosPublic = useAxiosPublic();
  const { user } = UseAuth();


  
  const { data: products = [], refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = axiosPublic.get(`/products/${user?.email}`);
      return (await res).data;
    },
  });

    const handleDeleteUser=( id )=>{
    
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          })
        .then((result) => {
            if (result.isConfirmed) {
              axiosPublic.delete(`/products/${id}`).then((res) => {
                if (res.data.deletedCount > 0) {
                  refetch();
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                  });
                }
              }
        );
            }
          });
      }



    return (
        <div>
          
          <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Product Name</th>
        <th> Number of votes</th>
        <th>Status</th>
        <th>Action</th>
        <th>Action2</th>
      </tr>
    </thead>
    <tbody>
      {
        products?.map((product,idx)=>(
          <tr key={idx} >
        <th>{idx+1}</th>
        <td>{product?.productName}</td>
        <td>{product?.upvoteCount}</td>
        <td>{product?.productStatus}</td>
        <Link to={`/update/${product?._id}`}>
        <td>
        <button className="btn text-main-color bg-black w-fit btn-sm shadow-inner border-0 shadow-black hover:bg-gray-600"><GrDocumentUpdate /> Update </button>
        </td>
        </Link>
        <td>
        <button onClick={() => handleDeleteUser(product?._id)} className="btn text-main-color bg-secondary-color w-fit btn-sm shadow-inner border-0 shadow-black hover:bg-red-600"><AiFillDelete />Delete </button>
        </td>
      </tr>
        ))
      }
      
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyProduct;