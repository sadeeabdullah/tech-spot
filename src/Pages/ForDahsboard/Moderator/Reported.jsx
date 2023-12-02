import { AiFillDelete } from "react-icons/ai";
import { HiMiniViewfinderCircle } from "react-icons/hi2";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const Reported = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  
   // for reports
   const { data: reports=[],refetch } = useQuery({
    queryKey: ["reports"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/reports`);
      return res.data;
    },
  });



    const handleDeleteUser=( id,productId )=>{
    console.log(id , productId)
        Swal.fire({
            title: "Are you sure?",
            text: "Product will be deleted from both reported content and product database",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          })
        .then((result) => {
            if (result.isConfirmed) {
              axiosSecure.delete(`/reports/${id}`).then((res) => {
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                  axiosSecure.delete(`/products/${productId}`).then((result)=>{
                    if (result.data.deletedCount > 0) {
                    refetch();
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                  });
                }
                  })
                  
                }
              }
        );
            }
          });
      }

    return (
        <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Product Name</th>
        <th> View Details</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>

      {
        reports?.map((report,idx)=>(
          <tr key={report._id}>
          <th>{idx+1}</th>
          <td>{report.productName}</td>
          <Link to={`/productDetails/${report?.productId}`}>
          <td>
          <button className="btn text-main-color bg-black w-fit btn-sm shadow-inner border-0 shadow-black hover:bg-gray-600"><HiMiniViewfinderCircle />View Details</button>
          </td>
          </Link>
          <td>
          <button onClick={() => handleDeleteUser(report?._id,report?.productId)} className="btn text-main-color bg-secondary-color w-fit btn-sm shadow-inner border-0 shadow-black hover:bg-red-600"><AiFillDelete />Delete </button>
          </td>
         
        </tr>
       
        ))
      }

     
    </tbody>
  </table>
</div>
    );
};

export default Reported;