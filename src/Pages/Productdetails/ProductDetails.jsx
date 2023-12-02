
import { FaArrowUp } from 'react-icons/fa';
import { MdReportProblem } from "react-icons/md";
import Marquee from "react-fast-marquee";
import SectionTitle from '../../Components/Shared/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import UseAuth from '../../Hooks/UseAuth';
// import Rating from '../../Components/Rating/Rating';
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating';

const ProductDetails = () => {

  const {user} = UseAuth();
   

    const {
        register,
        handleSubmit,
        // eslint-disable-next-line no-unused-vars
        reset,
      } = useForm()

      const params = useParams();


      const axiosPublic = useAxiosPublic();

    const { data: details = [], refetch } = useQuery({
      queryKey: ["productDetails"],
      queryFn: async () => {
        const res = axiosPublic.get(`/productDetails/${params.id}`);
        return (await res).data;
      },
    });
  

    const handleUpVote = async(id, upvote)=>{
      
      const updateVote = {upvotePlus: upvote}
      const res = await axiosPublic.patch(`/products/${id}`,updateVote)
      if(res.data.modifiedCount>0){
        // show success pop up
        refetch();
        
      }
    }
    
    const onSubmit = async(data) =>{
        console.log(data)
        const {name,image,description,Title}=data;
        const review ={ 
          ownerName: name,
          ownerImage : image,
          description: description,
          rating: Title,
        }
        const reviewsRes = await axiosPublic.patch(`/reviews/${details?._id}`,review)
      if(reviewsRes.data.modifiedCount>0){
        // show success pop up
        reset();
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `your review is added`,
          showConfirmButton: false,
          timer: 1500
        });
      }
         
    }
   


    const handleReport = async ( id) =>{
      const reportProduct = {
        productId: id ,
        productName: details?.productName
      }

      const reportsRes = await axiosPublic.post('/reports',reportProduct)
    if(reportsRes.data.insertedId){
      // show success pop up
      reset();
      refetch();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Successfully reported.`,
        showConfirmButton: false,
        timer: 1500
      });
    }

    }
    return (
        <div>
            <div className='flex md:flex-row flex-col mt-8 gap-6 p-4 '>
            {/* div for the image */}
            <div className="md:w-1/2  ">
                <img className='w-full' src={details?.productImage} alt="" />
            </div>

            {/* div for the data */}
            <div className='border-black border-[0.5px] md:w-1/2  bg-slate-100 p-8'>
                <p className='text-4xl mb-2'>{details?.productName}</p>
                <p className='text-sky-700 mt-2 mb-2'>#{details?.tags}</p>
                <button onClick={()=>handleUpVote(details?._id,details?.upvoteCount +1 )} className="btn lg:mr-4 mr-2 mb-2 text-main-color bg-black w-fit shadow-inner border-0 shadow-black hover:bg-gray-600"><FaArrowUp/>Upvote {details?.upvoteCount} </button>
                <button onClick={()=>handleReport(details?._id)}  className="btn  text-secondary-color bg-black w-fit shadow-inner border-0 shadow-black hover:bg-gray-600"><MdReportProblem />Report </button>
            </div>
            
        </div>
        {/* div for show review */}
       

      <div className=''>
            <SectionTitle title={"Reviews"}></SectionTitle>
        {
         details?.reviews?.length>0? 
         <Marquee  pauseOnHover className=''>
          <div className='flex'>
          {
            details?.reviews?.map((review,idx)=>(
              
                
                <div key={idx} className='mr-48 flex lg:w-[400px] flex-col  justify-center items-center bg-slate-200 p-16 rounded-xl shadow-2xl'>
              <div>
              <img className=' h-[70px] w-[70px] lg:h-[150px] lg:w-[150px] rounded-full border-4 border-main-color' src={review.ownerImage} alt="" />
              </div>
              <div className='text-center'>
                <h2 className='text-2xl'>{review.ownerName}</h2>
              <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />
                <p><span className='font-bold'>What he/she says : </span> {review.description}</p>
              </div>
                
            </div>
           
              
             
               
            
            ))
          }
          </div>
            </Marquee>

  :
  <div className='bg-secondary-color text-center'>
    <h2 className='py-4 text-xl text-main-color'>No reviews yet. Be the first one</h2>

  </div>
        }
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
                value={user?.displayName} readOnly
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
                value={user?.photoURL}
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