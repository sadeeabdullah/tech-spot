import { Helmet } from "react-helmet-async";
import Banner from "../../../Components/Shared/Banner/Banner";
import FeaturedProduct from "../../../Components/ForHome/FeaturedProduct/FeaturedProduct";
import TrendingProduct from "../../../Components/ForHome/TrendingProduct/TrendingProduct";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import React from 'react';

const Home = () => {
    const axiosPublic = useAxiosPublic();

    const { data: products = [], refetch } = useQuery({
      queryKey: ["products"],
      queryFn: async () => {
        const res = axiosPublic.get("/products");
        return (await res).data;
      },
    });
  const filterFeatured = products.filter( product =>product?.status === "featured")
  const filterTrending = products.filter( product =>product?.status === "trending")
    return (
        <div>
             <Helmet>
                <title>Tech Spot | Home</title>
            </Helmet>
            <Banner bannerImage={filterTrending}/>
            <FeaturedProduct featured={filterFeatured} refetch={refetch}/>
            <TrendingProduct trending={filterTrending}  refetch={refetch}/>
        </div>
    );
};

export default Home;