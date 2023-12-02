
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import UseAuth from "../../../Hooks/UseAuth";
import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import { GrDocumentUpdate } from "react-icons/gr";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const ProductUpdate = () => {
    const { user } = UseAuth();
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();

    const params = useParams();

  const { data: details = [], refetch } = useQuery({
    queryKey: ["productDetails"],
    queryFn: async () => {
      const res = axiosPublic.get(`/productDetails/${params.id}`);
      return (await res).data;
    },
  });



    const onSubmit = async (data) => {
        // image upload to imgb and then get an url
        
          // now send the menu item data to the server with the image
          const menuItem = {
            productName: data.name,
            productPrice: data.price,
            description: data.description,
            externalLink:data.link
          };
          console.log(menuItem)
            const menuRes = await axiosPublic.patch(`/update/${params.id}`,menuItem)
            console.log(menuRes.data)
            if(menuRes.data.modifiedCount>0){
              // show success pop up
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} is updated to the menu.`,
                showConfirmButton: false,
                timer: 1500
              });
            
        }
      };



    return (
        <div className="w-[70vw] mx-auto">
            <Helmet>
                <title>Tech Spot | Update Product</title>
            </Helmet>
        <SectionTitle title={"Update Product"}></SectionTitle>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">
                  Product Name <span className="text-red-700">*</span>
                </span>
              </label>
              <input
                type="text"
                placeholder="Product Name"
                defaultValue={details?.productName}
                {...register("name", { required: true })}
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">
                  Product price <span className="text-red-700">*</span>
                </span>
              </label>
              <input
                type="number"
                placeholder="Product price"
                defaultValue={details?.productPrice}
                {...register("price", { required: true })}
                className="input input-bordered w-full "
              />
            </div>
  
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">
                  Owner Name <span className="text-red-700">*</span>
                </span>
              </label>
              <input
                type="text"
                placeholder="Price"
                value={user?.displayName}
                {...register("ownerName", { required: true })}
                readOnly
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">
                  Owner Image
                  <span className="text-red-700">*</span>
                </span>
              </label>
              <input
                type="text"
                placeholder="Price"
                value={user?.photoURL}
                {...register("ownerImage", { required: true })}
                readOnly
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">
                  Owner Email
                  <span className="text-red-700">*</span>
                </span>
              </label>
              <input
                type="text"
                placeholder="Price"
                value={user?.email}
                readOnly
                {...register("ownerEmail", { required: true })}
                className="input input-bordered w-full "
              />
            </div>
  
            {/* Product details */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  Description
                </span>
              </label>
              <textarea
                {...register("description")}
                className="textarea textarea-bordered h-24"
                defaultValue={details?.description}
                placeholder="Write description here"
              ></textarea>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  External Link
                </span>
              </label>
              <textarea
                {...register("link")}
                defaultValue={details?.externalLink}
                className="textarea textarea-bordered "
                placeholder="Paste the exernal link"
              ></textarea>
            </div>
           
  
         
            
  
            <button className="btn mt-4 bg-black text-main-color hover:bg-slate-700">
              Update Item <GrDocumentUpdate />
            </button>
          </form>
        </div>
      </div>
    );
};

export default ProductUpdate;