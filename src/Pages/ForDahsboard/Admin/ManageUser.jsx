import { GrUserManager } from "react-icons/gr";
import { RiAdminFill } from "react-icons/ri";


const ManageUser = () => {

    const handleAdmin = ()=>{
        console.log('ei je hoye gelo admin')
    }



    return (
        <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>User Name</th>
        <th> User Email</th>
        <th>Make Moderator</th>
        <th>Make Admin</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>
example@gmail.com        </td>
        <td>
        <button className="btn text-main-color bg-black w-fit btn-sm shadow-inner border-0 shadow-black hover:bg-gray-600"><GrUserManager />
 </button>

            
        </td>
        <td>
        <button onClick={ handleAdmin} className="btn text-main-color bg-black w-fit btn-sm shadow-inner border-0 shadow-black hover:bg-gray-600"><RiAdminFill />
</button>
        </td>
      </tr>
     
    </tbody>
  </table>
</div>
    );
};

export default ManageUser;