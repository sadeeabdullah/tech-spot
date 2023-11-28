import Card from "../../Shared/Card/card";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";



const FeaturedProduct = () => {
    return (
        <div className="">
            <SectionTitle title={"Featured Products"}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-4">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
        </div>
    );
};

export default FeaturedProduct;