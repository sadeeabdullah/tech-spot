import { AiFillDelete } from "react-icons/ai";
import { HiMiniViewfinderCircle } from "react-icons/hi2";
import Swal from "sweetalert2";


const Reported = () => {



    const handleDeleteUser=( user )=>{
    
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          })
        // .then((result) => {
        //     if (result.isConfirmed) {
        //       axiosSecure.delete(`/users/${user._id}`).then((res) => {
        //         console.log(res.data);
        //         if (res.data.deletedCount > 0) {
        //           refetch();
        //           Swal.fire({
        //             title: "Deleted!",
        //             text: "Your file has been deleted.",
        //             icon: "success",
        //           });
        //         }
        //       }
        // );
        //     }
        //   });
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
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>
        <button className="btn text-main-color bg-black w-fit btn-sm shadow-inner border-0 shadow-black hover:bg-gray-600"><HiMiniViewfinderCircle />View Details</button>
        </td>
        <td>
        <button onClick={() => handleDeleteUser()} className="btn text-main-color bg-secondary-color w-fit btn-sm shadow-inner border-0 shadow-black hover:bg-red-600"><AiFillDelete />Delete </button>
        </td>
       
      </tr>
     
    </tbody>
  </table>
</div>
    );
};

export default Reported;