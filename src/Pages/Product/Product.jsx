import { useForm } from "react-hook-form";
import Card from "../../Components/Shared/Card/card";


const Product = () => {
    const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data)
  };
    return (
        <div className="my-8">
            {/* here should be the search bar */}
            <form onSubmit={handleSubmit(onSubmit)} className="flex w-1/2 mb-8 rounded-full mx-auto border-gray-500 border-[0.5px]">
      <input className="border-gray-700 border-1 pl-4 w-full rounded-l-full"
        type="text"
        placeholder="Search Product"
        {...register('query')} // Register 'query' field with react-hook-form
      />
      <button className="btn bg-main-color text-white rounded-r-full" type="submit">Search</button>
    </form>
            {/* div for the card */}

            {/* todo pagination with tanstack query */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            
        </div>
    );
};

export default Product;