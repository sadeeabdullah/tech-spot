
import Swal from "sweetalert2";
import profileImage from "../../../assets/Logo/Orange Modern Letter A Icon Design Template  Logo .png"
import { MdWorkspacePremium } from "react-icons/md";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import UseAuth from "../../../Hooks/UseAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import React from 'react';


const MyProfile = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = UseAuth();

    const { data:details} = useQuery({
      queryKey:['payments'],
      queryFn:async () => {
        const res = axiosSecure.get(`/payments/${user?.email}`);
        return (await res).data;
      },
    })
    console.log(details)
    
    return (
        <div>
          <SectionTitle title={"My Profile"}></SectionTitle>
            {/* div for the  */}
            <div className="bg-slate-500 rounded-sm lg:w-1/2 mx-auto p-4 flex flex-col justify-center items-center">
                <img className=" w-[100px] h-[100px] lg:w-[200px] rounded-full lg:h-[200px]" src={profileImage} alt="" />
                <p>example Name</p>
                <p>example@gmail.com</p>

                <h2 className="font-semibold text-xl">Membership status:</h2>
                
               {
                details &&
                (
                  details[0]?.status === "paid" ?
                  <p><span className="font-semibold">Status : </span> Verified</p> :
                  <Link to='/payment'>
                <button 
                
                className="btn btn-sm text-md text-main-color bg-black w-fit shadow-inner border-0 shadow-black hover:bg-gray-600"><MdWorkspacePremium />
                99$  Membership Subscribe</button>
                </Link>

    )
               }
            </div>
        </div>
    );
};

export default MyProfile;