import { FaHome } from "react-icons/fa";
import errorImage from "../../assets/image/404.gif"


const Error = () => {
    return (
        <div className="flex justify-center flex-col  items-center">
            <img src={errorImage} alt="" />
            <button className="btn text-main-color bg-black w-fit shadow-inner border-0 shadow-black hover:bg-gray-600"><FaHome/>Go Home</button>

        </div>
    );
};

export default Error;