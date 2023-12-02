/* eslint-disable react/prop-types */

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const Banner = ({ bannerImage }) => {
  return (
    <div className="">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {bannerImage?.map((image) => (
          <SwiperSlide key={image._id}>
            <img
              className="h-[85vh] w-full"
              src={image?.productImage}
              alt="bal"
            />
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className="text-white text-4xl font-bold text-center">
                Best Deals on Tech Gadgets
              </h1>
              <p className="text-white text-lg mt-4">
                Shop Now &amp; Save Big!
              </p>
              <Link to='/products'>
                <button className="bg-black text-main-color px-6 py-2 rounded-full shadow-inner mt-6 inline-block hover:bg-slate-900 hover:shadow-inner transition duration-300">
                  Explore Now
                </button>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
