import Card from "../../Shared/Card/card";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";


const TrendingProduct = () => {
    return (
        // Todo: the card should be sort according the vote count and at least 6 card should be here and if there is more then it will show show all product and and after clicking on the product it will redirected to products page
        <div className="">
            <SectionTitle title={"Trending Product"}></SectionTitle>
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

export default TrendingProduct;