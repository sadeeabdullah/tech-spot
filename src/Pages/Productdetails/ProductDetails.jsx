
import { FaArrowUp } from 'react-icons/fa';
import { MdReportProblem } from "react-icons/md";
import Marquee from "react-fast-marquee";
import productImage from '../../assets/Logo/Orange Modern Letter A Icon Design Template  Logo .png'
import SectionTitle from '../../Components/Shared/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
const ProductDetails = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm()
    
    const onSubmit = (data) =>{
        console.log(data)
    }
    return (
        <div>
            <div className='flex md:flex-row flex-col mt-8 gap-6 p-4 '>
            {/* div for the image */}
            <div className="md:w-1/2  ">
                <img className='w-full' src={productImage} alt="" />
            </div>

            {/* div for the data */}
            <div className='border-black border-[0.5px] md:w-1/2  bg-slate-100 p-8'>
                <p className='text-4xl'> example product</p>
                <p className='text-sky-700'>#tag here</p>
                <button className="btn text-main-color bg-black w-fit shadow-inner border-0 shadow-black hover:bg-gray-600"><FaArrowUp/>Upvote 25 </button>
                <button className="btn  text-secondary-color bg-black w-fit shadow-inner border-0 shadow-black hover:bg-gray-600"><MdReportProblem />Report </button>
            </div>
            
        </div>
        {/* div for show review */}
        <div className=''>
            <SectionTitle title={"Reviews"}></SectionTitle>
        <Marquee pauseOnHover>
            <div>
                {/* Todo : design */}
                {/* reviews design */}
                <img src={productImage} alt="" />
            </div>
  </Marquee>
        </div>
        {/* div for post review  */}
        <div>
        <SectionTitle title={"Post a review"}></SectionTitle>
        <div className="card  w-full max-w-xl shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Reviewer Name</span>
              </label>
              <input
                type="text"
                placeholder="Reviewer Name"
                className="input input-bordered"
                value={"value set korbe backend theke ene eta ekta read only field"} readOnly
                name="email"
                {...register("name", { required: true })}
              />
              
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Reviewer Image</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="text"
                {...register("image", { required: true, })}
              />
              
              
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Reviewer Image</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="text"
                {...register("image", { required: true, })}
              />
              
              
            </div>

            <div className="form-control mt-6">
              <input className="btn btn-primary bg-main-color border-0 text-white font-semibold" type="submit" value="Sign Up" />
            </div>
          </form>
          
          
        </div>
        </div>
        </div>
    );
};

export default ProductDetails;