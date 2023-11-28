import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import image1 from "../../../assets/Logo/Orange Modern Letter A Icon Design Template  Logo .png"
const Banner = () => {
    return (
        <div className='text-center '>
            <Carousel autoPlay>
                <div>
                    <img className='' src={image1} />
                </div>
                <div>
                    <img src={image1}/>
                </div>
                <div>
                    <img src={image1} />
                </div>
                <div>
                    <img src={image1} />
                </div>
                <div>
                    <img src={image1} />
                </div>
                <div>
                    <img src={image1} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;