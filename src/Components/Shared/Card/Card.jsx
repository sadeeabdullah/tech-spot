import { FaArrowUp } from "react-icons/fa";
import image from "../../../assets/Logo/Orange Modern Letter A Icon Design Template  Logo .png"


const Card = () => {
    return (
        <div className="card rounded-sm shadow-xl bg-base-100 ">
        <figure className="h-[200px] lg:h-[250px]"><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
          {/* TOdo : set the onclick on the name of the product */}
          <h2 className="card-title hover:text-main-color">name here</h2>
          <h2 className="text-sm text-sky-700 ">TAGs</h2>
          <button className="btn text-main-color bg-black w-fit shadow-inner border-0 shadow-black hover:bg-gray-600"><FaArrowUp/>Upvote 25 </button>
        </div>
      </div>
    );
};

export default Card;