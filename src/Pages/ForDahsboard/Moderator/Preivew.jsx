import { RiFolderReceivedFill } from "react-icons/ri";
import { HiMiniViewfinderCircle } from "react-icons/hi2";
import { MdOutlineFeaturedVideo } from "react-icons/md";


const Preivew = () => {
    const handleAccept = ()=>{
        console.log("hello")
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
        <th>Make Featured</th>
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
        <button className="btn text-main-color bg-black w-fit btn-sm shadow-inner border-0 shadow-black hover:bg-gray-600"><RiFolderReceivedFill />
Accept </button>

            
        </td>
        <td>
        <button onClick={() => handleAccept()} className="btn text-main-color bg-black w-fit btn-sm shadow-inner border-0 shadow-black hover:bg-gray-600"><MdOutlineFeaturedVideo />
Make Featured </button>
        </td>
      </tr>
     
    </tbody>
  </table>
</div>
    );
};

export default Preivew;