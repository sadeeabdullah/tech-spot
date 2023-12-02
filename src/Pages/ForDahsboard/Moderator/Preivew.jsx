import { RiFolderReceivedFill } from "react-icons/ri";
import { HiMiniViewfinderCircle } from "react-icons/hi2";
import { MdOutlineFeaturedVideo } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { TbPlayerEjectFilled } from "react-icons/tb";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Preivew = () => {

  const axiosSecure = useAxiosSecure()

   // for products
   const { data: products=[], refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosSecure.get('/products');
      return res.data;
    },
  });



    const handleAccept = (id)=>{
        console.log(id)
    }

    const handleMakeFeatured = async(id)=>{
      const featureRes = await axiosSecure.patch(`/feature/${id}`,{status:"featured"})
      if(featureRes.data.modifiedCount>0){
        // show success pop up
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


    

    products.sort((a, b) => {
      if (a.productStatus === "pending" && b.productStatus === "accepted") {
        return -1;
      } else if (a.productStatus === "accepted" && b.productStatus === "pending") {
        return 1; 
      }
      return 0; 
    });


    return (
        <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Product Name</th>
        <th> View Details</th>
        <th>Action/accept</th>
        <th>Action/make featured</th>
        <th>Action3</th>
      </tr>
    </thead>
    <tbody>
      {
        products?.map((product,idx)=>(
          <tr key={product?._id}>
        <th>{idx+1}</th>
        <td>{product?.productName}</td>
        <Link to={`/productDetails/${product._id}`}>
        <td>
        <button className="btn text-main-color bg-black w-fit btn-sm shadow-inner border-0 shadow-black hover:bg-gray-600"><HiMiniViewfinderCircle />View Details</button>
        </td>
        </Link>
        <td>
        {
          product?.productStatus === "pending" ? 
          <button onClick={()=>handleAccept(product?._id)} className="btn text-main-color bg-black w-fit btn-sm shadow-inner border-0 shadow-black hover:bg-gray-600"><RiFolderReceivedFill />
  Accept </button>
  :
  <p>Accepted</p>
        }
        </td> 
        <td>
        {
          
          product?.status === "featured" ? <p>Featured</p> 
          :
          <button onClick={()=>handleMakeFeatured(product?._id)} className="btn text-main-color bg-black w-fit btn-sm shadow-inner border-0 shadow-black hover:bg-gray-600"><MdOutlineFeaturedVideo />
Make Featured </button>

        }
        </td>
        
        <td>
        <button onClick={() => handleAccept()} className="btn text-main-color bg-black w-fit btn-sm shadow-inner border-0 shadow-black hover:bg-gray-600"><TbPlayerEjectFilled />

Reject</button>
        </td>
      </tr>
        ))
      }
     
    </tbody>
  </table>
</div>
    );
};

export default Preivew;