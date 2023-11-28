
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
        // eslint-disable-next-line no-unused-vars
        reset,
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
        <div className="card  w-full max-w-xl mx-auto shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
            
            
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
                type="text"
                placeholder="text"
                value={'ja paba taiu'}
                className="input input-bordered"
                readOnly
                name="image"
                {...register("image", { required: true, })}
              />
              
              
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Write a Description</span>
              </label>
              <input
                type="text"
                placeholder="description"
                className="input input-bordered"
                name="text"
                {...register("description", { required: true, })}
              />
              
              
            </div>
            {/* div for the rating */}
            <div className='form-control w-1/3' >
            <label className="label">
                <span className="label-text">Rating</span>
              </label>
            <select {...register("Title", { required: true })}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary w-fit bg-main-color border-0 text-white font-semibold" type="submit" value="Post" />
            </div>
          </form>
          
          
        </div>
        </div>
        </div>
    );
};

export default ProductDetails;