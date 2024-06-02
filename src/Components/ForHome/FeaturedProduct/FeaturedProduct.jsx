import React from 'react';
import Card from "../../Shared/Card/card";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";



const FeaturedProduct = ({featured,refetch}) => {
    return (
        <div className="">
            <SectionTitle title={"Featured Products"}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-4">
                {
                    featured?.map(f=>(
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

export default FeaturedProduct;