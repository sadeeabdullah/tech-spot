import { useForm } from "react-hook-form";
import Card from "../../Components/Shared/Card/card";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import React from 'react';


const Product = () => {
    const { register, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic();
    const { data: products = [], refetch } = useQuery({
      queryKey: ["products"],
      queryFn: async () => {
        const res = axiosPublic.get("/products");
        return (await res).data;
      },
    });

  const onSubmit = data => {
    console.log(data)
  };
    return (
        <div className="my-8">
          <Helmet>
                <title>Tech Spot | Products</title>
            </Helmet>
            {/* here should be the search bar */}
            <form onSubmit={handleSubmit(onSubmit)} className="flex w-1/2 mb-8 rounded-full mx-auto border-gray-300 border-[0.5px]">
      <input className="border-1 pl-4 w-full rounded-l-full"
        type="text"
        placeholder="Search Product"
        {...register('query')} // Register 'query' field with react-hook-form
      />
      <button className="btn bg-main-color text-white rounded-r-full" type="submit">Search</button>
    </form>
            {/* div for the card */}

            {/* todo pagination with tanstack query */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {
                    products?.map(f=>(
                      f?.productStatus === 'accepted' && (
                          <Card refetch={refetch} id={f._id} image={f.productImage} name={f.productName} vote={f.upvoteCount} tags={f.tags}  key={f._id}/>
                      )
                  )
                    )
                }
            </div>
            
        </div>
    );
};

export default Product;