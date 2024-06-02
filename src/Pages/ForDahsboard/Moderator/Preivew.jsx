import { RiFolderReceivedFill } from "react-icons/ri";
import { HiMiniViewfinderCircle } from "react-icons/hi2";
import { MdOutlineFeaturedVideo } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { TbPlayerEjectFilled } from "react-icons/tb";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import React from 'react';


const Preivew = () => {

  const axiosSecure = useAxiosSecure()

   // for products
   const { data: products=[], refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosSecure.get('/products');
      return res.data;
    },
  });



    const handleAccept = async(id)=>{
      const featureRes = await axiosSecure.patch(`/acceptReject/${id}`,{productStatus:"accepted"})
      if(featureRes.data.modifiedCount>0){
        // show success pop up
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `your accepted the products`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    }

    const handleMakeFeatured = async(id)=>{
      const featureRes = await axiosSecure.patch(`/feature/${id}`,{status:"featured"})
      if(featureRes.data.modifiedCount>0){
        // show success pop up
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `your review is added`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
    const handleReject = async(id)=>{
      const featureRes = await axiosSecure.patch(`/acceptReject/${id}`,{productStatus:"rejected"})
      if(featureRes.data.modifiedCount>0){
        // show success pop up
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `your rejected the products`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    }


    

    products.sort((a, b) => {
      const statusPriority = {
        'pending': 1,
        'accepted': 2,
        'rejected': 3
      };
    
      const statusA = statusPriority[a.productStatus];
      const statusB = statusPriority[b.productStatus];
    
      return statusA - statusB;
    });


    return (
        <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Product Name</th>
        <th> View Details</th>
        <th>Action/accept</th>
        <th>Action/make featured</th>
        <th>Action3</th>
      </tr>
    </thead>
    <tbody>
      {
        products?.map((product,idx)=>(
          <tr key={product?._id}>
        <th>{idx+1}</th>
        <td>{product?.productName}</td>
        <Link to={`/productDetails/${product._id}`}>
        <td>
        <button className="btn text-main-color bg-black w-fit btn-sm shadow-inner border-0 shadow-black hover:bg-gray-600"><HiMiniViewfinderCircle />View Details</button>
        </td>
        </Link>
        <td>
        {
          product?.productStatus === "pending" ? 
          <button onClick={()=>handleAccept(product?._id)} className="btn text-main-color bg-black w-fit btn-sm shadow-inner border-0 shadow-black hover:bg-gray-600"><RiFolderReceivedFill />
  Accept </button>
  : product?.productStatus  === 'rejected' ? <p>Rejected</p>:
  <p>Accepted</p>
        }
        </td> 
        <td>
        {
          
          product?.status === "featured" ? <p>Featured</p> 
          : product?.productStatus  === 'rejected' ? <p>Rejected</p>:
          <button onClick={()=>handleMakeFeatured(product?._id)} className="btn text-main-color bg-black w-fit btn-sm shadow-inner border-0 shadow-black hover:bg-gray-600"><MdOutlineFeaturedVideo />
Make Featured </button>

        }
        </td>
        
        <td>
        {
          product?.productStatus === "pending" ? 
          <button onClick={()=>handleReject(product?._id)} className="btn text-main-color bg-black w-fit btn-sm shadow-inner border-0 shadow-black hover:bg-gray-600"><TbPlayerEjectFilled />

          Reject </button>
  :product?.productStatus  === 'rejected' ? <p>Rejected</p>:
  <p>Already Accepted</p>
        }
        </td>
      </tr>
        ))
      }
     
    </tbody>
  </table>
</div>
    );
};

export default Preivew;