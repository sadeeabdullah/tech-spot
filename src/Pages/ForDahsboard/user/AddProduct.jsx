import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
import { IoBagAdd } from "react-icons/io5";
import TagInputComponent from "../../../Components/TagInputComponent/TagInputComponent"
import { useState } from "react";
import UseAuth from "../../../Hooks/UseAuth";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;



const AddItem = () => {

  const { user } = UseAuth();
  const [selected, setSelected] = useState('');
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    // image upload to imgb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // now send the menu item data to the server with the image
      const menuItem = {
        name: data.name,
        price: data.price,
        ownerName: data.ownerName,
        ownerEmail: data.ownerEmail,
        ownerImage: data.ownerImage,
        description: data.description,
        image: res.data.data.display_url,
        tags: selected,
        productStatus : "pending",
        status:""
        // Product : data.Product,
        // image: res.data.data.display_url
      };
      console.log(menuItem)
        const menuRes = await axiosSecure.post('/products',menuItem)
        console.log(menuRes.data)
        if(menuRes.data.insertedId){
          // show success pop up
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${data.name} is added to the menu.`,
            showConfirmButton: false,
            timer: 1500
          });
        }
    }
  };
  return (
    <div>
      <SectionTitle title={"Add Product"}></SectionTitle>
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
              className="textarea textarea-bordered "
              placeholder="Paste the exernal link"
            ></textarea>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">
                Tags ( after writing tap enter to make tag )<span className="text-red-700">*</span>
              </span>
            </label>
            <TagInputComponent selected={selected} setSelected={setSelected}></TagInputComponent>

          </div>

       
          {/* for image */}
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">
                Product Image
                <span className="text-red-700">*</span>
              </span>
            </label>
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>

          <button className="btn bg-black text-main-color hover:bg-slate-700">
            Add Item <IoBagAdd />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
