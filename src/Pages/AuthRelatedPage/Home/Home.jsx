import { Helmet } from "react-helmet-async";
import Banner from "../../../Components/Shared/Banner/Banner";
import FeaturedProduct from "../../../Components/ForHome/FeaturedProduct/FeaturedProduct";
import TrendingProduct from "../../../Components/ForHome/TrendingProduct/TrendingProduct";


const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Tech Spot | Home</title>
            </Helmet>
            <Banner/>
            <FeaturedProduct/>
            <TrendingProduct/>
        </div>
    );
};

export default Home;