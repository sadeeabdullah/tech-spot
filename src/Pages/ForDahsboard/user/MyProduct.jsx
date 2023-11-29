
import { GrDocumentUpdate } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";


const MyProduct = () => {


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
        <div>
          
          <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Product Name</th>
        <th> Number of votes</th>
        <th>Status</th>
        <th>Action</th>
        <th>Action2</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>pending</td>
        <td>
        <button className="btn text-main-color bg-black w-fit btn-sm shadow-inner border-0 shadow-black hover:bg-gray-600"><GrDocumentUpdate /> Update </button>

            
        </td>
        <td>
        <button onClick={() => handleDeleteUser()} className="btn text-main-color bg-secondary-color w-fit btn-sm shadow-inner border-0 shadow-black hover:bg-red-600"><AiFillDelete />Delete </button>
        </td>
      </tr>
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyProduct;