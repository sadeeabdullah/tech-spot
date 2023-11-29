

const MyProduct = () => {
    return (
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
            <button>
                helrlo
            </button>
        </td>
        <td>pending</td>
      </tr>
     
    </tbody>
  </table>
</div>
    );
};

export default MyProduct;