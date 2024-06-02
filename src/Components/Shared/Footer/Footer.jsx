
import { FaHome, FaPhoneAlt,} from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { GoDot } from "react-icons/go";
import { ImFacebook2, ImInstagram, ImYoutube } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";
import React from 'react';

import FooterImage from "../../../assets/Logo/Untitled design.svg"
const Footer = () => {
    return (
         <div >
            <div className="w-full mt-12 bg-gray-900 p-16 text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {/* div for the first */}
            <div>
                <img src={FooterImage} alt="" />
                <p className="flex my-1 items-center"><FaPhoneAlt className="text-red-500  mr-2"/>+88 0168245114</p>
                <p className="flex my-1 items-center"><MdMarkEmailUnread  className="text-red-500  mr-2" ></MdMarkEmailUnread>hello@techspot.com</p>
                <p className="flex my-1 "><FaHome  className="text-red-500 text-4xl mr-2"/>TechSpot 2/1/E, Eden Center, Arambagh
Motijheel, Dhaka-1000
Bangladesh</p>
            </div>

            {/* div for the Home */}
            <div>
                <h2 className="text-xl font-bold">Home</h2>
                <p className="flex my-1 items-center"><GoDot /> UpComing Product </p>
                <p className="flex my-1 items-center"><GoDot /> On Stock Product </p>
                <p className="flex my-1 items-center"><GoDot /> Blog </p>
            </div>
            
            {/* div for the policies and get to know us */}
            <div>
                <h2 className="text-xl font-bold">Policies</h2>
                <p className="flex my-1 items-center"><GoDot /> UpComing Product </p>
                <p className="flex my-1 items-center"><GoDot /> On Stock Product </p>
                <p className="flex my-1 items-center"><GoDot /> Blog </p>

                <div>
                <h2 className="text-xl font-bold mt-6">Get us know</h2>
                <p  className="flex my-1 items-center"><GoDot /> About us </p>
                </div>
            </div>

            {/* div for the support */}
            <div>
                <h2 className="text-xl font-bold">Support</h2>
                <p className="flex my-1 items-center"><GoDot /> Contact us </p>
                <p className="flex my-1 items-center"><GoDot /> Technical assistance </p>
                <p className="flex my-1 items-center"><GoDot /> FAQ </p>
        </div>
        <div >
        <h2 className="text-xl font-bold mt-12 mb-2">Stay connected with</h2>
       <div className="flex items-center  gap-4  text-3xl text-red-500">
       <p className="flex my-1 items-center"><ImFacebook2 /></p>
        <p className="flex my-1 items-center"><ImInstagram />
</p>
        <p className="flex my-1 items-center"><ImYoutube />
</p>
        <p className="flex my-1 items-center"><ImLinkedin />
</p>
       </div>
        </div>
            </div>
            
        {/* div for teh stay connected */}
        </div>
    );
};

export default Footer;