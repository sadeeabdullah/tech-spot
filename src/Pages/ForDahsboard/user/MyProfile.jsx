
import Swal from "sweetalert2";
import profileImage from "../../../assets/Logo/Orange Modern Letter A Icon Design Template  Logo .png"
import { MdWorkspacePremium } from "react-icons/md";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";


const MyProfile = () => {
    const subscribed = false;

    const handlePayment = () =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
    }
    
    return (
        <div>
          <SectionTitle title={"My Profile"}></SectionTitle>
            {/* div for the  */}
            <div className="bg-slate-500 rounded-sm lg:w-1/2 mx-auto p-4 flex flex-col justify-center items-center">
                <img className=" w-[100px] h-[100px] lg:w-[200px] rounded-full lg:h-[200px]" src={profileImage} alt="" />
                <p>example Name</p>
                <p>example@gmail.com</p>

                <h2 className="font-semibold text-xl">Membership status:</h2>
                {
                    subscribed ? 
                    <p><span className="font-semibold">Status : </span> Verified</p>:
                    <button 
                    onClick={handlePayment}
                    className="btn btn-sm text-md text-main-color bg-black w-fit shadow-inner border-0 shadow-black hover:bg-gray-600"><MdWorkspacePremium />
                    99$  Membership Subscribe</button>

                }
            </div>
        </div>
    );
};

export default MyProfile;