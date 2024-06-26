import React from 'react';

import { FaArrowUp } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Card = ({image,name,vote,tags ,refetch,id}) => {
  const axiosPublic = useAxiosPublic();

  const handleUpVote = async(id)=>{
    const updateVote = {upvotePlus: vote+1}
    const res = await axiosPublic.patch(`/products/${id}`,updateVote)
    if(res.data.modifiedCount>0){
      // show success pop up
      refetch();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Upvoted successfully`,
        showConfirmButton: false,
        timer: 1500
      });
      
    }
  }

    return (
        <div className="card rounded-sm shadow-2xl bg-base-500 ">
        <figure className="h-[200px] lg:h-[250px]"><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
          {/* TOdo : set the onclick on the name of the product */}
          <Link to = {`/productDetails/${id}`}>
          <h2 className="card-title hover:text-main-color">{name}</h2>
          </Link>
          <h2 className="text-sm text-sky-700 ">#{tags}</h2>
          <button onClick={()=>handleUpVote(id)} className="btn text-main-color bg-black w-fit shadow-inner border-0 shadow-black hover:bg-gray-600"><FaArrowUp/>Upvote {vote} </button>
        </div>
      </div>
    );
};

export default Card;