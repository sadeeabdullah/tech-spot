import { Helmet } from "react-helmet-async";
import Banner from "../../../Components/Shared/Banner/Banner";
import FeaturedProduct from "../../../Components/FeaturedProduct/FeaturedProduct";


const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Tech Spot | Home</title>
            </Helmet>
            <Banner/>
            <FeaturedProduct/>
        </div>
    );
};

export default Home;