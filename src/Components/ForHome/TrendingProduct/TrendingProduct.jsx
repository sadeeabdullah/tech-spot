/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Card from "../../Shared/Card/card";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";


const TrendingProduct = ({trending , refetch}) => {
    return (





        <div className="">
            <SectionTitle title={"Trending Product"}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-4">
                {
                    trending?.map(f=>(
                        f?.productStatus === 'accepted' && (
                            <Card refetch={refetch} id={f._id} image={f.productImage} name={f.productName} vote={f.upvoteCount} tags={f.tags}  key={f._id}/>
                        )
                    )
                    )
                }



            
        </div>
        <div className="flex justify-center mt-8">
       <Link to="/products">
       <button  className="btn  text-main-color bg-black w-fit shadow-inner border-0 shadow-black hover:bg-gray-600">Show  All Products</button>
       </Link>
        </div>
        </div>
    );
};

export default TrendingProduct;