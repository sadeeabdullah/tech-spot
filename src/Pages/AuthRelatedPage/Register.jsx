import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../../Components/Shared/Navbar/GoogleLogin";
import { Helmet } from "react-helmet-async";
import UseAuth from "../../Hooks/UseAuth";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";


const Register = () => {
    
  const navigate = useNavigate();
  const axiosPublic =  useAxiosPublic();
    const { createUser, updateUserProfile } = UseAuth();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        createUser( data.email, data.password )
        .then( result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            updateUserProfile(data.name, data.PhotoURL)
            .then(()=>{
              // create user entry in the database
              const  userInfo ={
                name: data.name,
                email: data.email,
                role : "user"
              }
              axiosPublic.post('/users', userInfo)
              .then((res)=>{
                console.log('user added to the database')
                if(res.data.insertedId){
                  reset();
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User created successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/')
                }
              })
             
            })
            .catch(err => console.log(err))
            
        } )
      };
    
    
    
      return (
        <div className="">
          <Helmet>
            <title>Tech Spot | Sign Up</title>
          </Helmet>
          <div className="hero-content flex-col ">
            <div className="text-center md:w-1/2 lg:text-center text-main-color">
              <h1 className="text-5xl  font-bold">SignUp now!</h1>
              
            </div>
            <div className="card w-full max-w-xl shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                    {...register("name", { required: true })}
                    name="name"
                  />
                  {errors.name && <span className="text-red-500 text-xs mt-2">Name is required</span>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">PhotoURL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="PhotoURL"
                    className="input input-bordered"
                    {...register("PhotoURL", { required: true })}
                    name="PhotoURL"
                  />
                  {errors.PhotoURL && <span className="text-red-500 text-xs mt-2">PhotoURL is required</span>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    name="email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && <span className="text-red-500 text-xs mt-2">Email is required</span>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    name="password"
                    {...register("password", { required: true,
                        minLength:6,
                         maxLength: 16,
                         pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}/
                         })}
                  />
                  {errors.password?.type === 'required' && <span className="text-red-500 text-xs mt-2">Password is required</span>}
                  {errors.password?.type === 'minLength' && <span className="text-red-500 text-xs mt-2">Password must be longer than 6 character </span>}
                  {errors.password?.type === 'maxLength' && <span className="text-red-500 text-xs mt-2">Password should not be longer than 16 character </span>}
                  {errors.password?.type === 'pattern' && <span className="text-red-500 text-xs mt-2">Password must have one uppercase, one lowercase , one number and one special character </span>}
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
    
                <div className="form-control mt-6">
                  <input className="btn btn-primary bg-main-color border-0 text-white font-semibold" type="submit" value="Sign Up" />
                </div>
              </form>
              <p className="text-center mb-4">
                <small className="text-sky-900">
                  Already have an account? <Link to="/login">Login</Link>
                </small>
              </p>
              <div className="divider"></div>
                <div className="flex justify-center items-center mb-8">
                <GoogleLogin className="text-red-700"></GoogleLogin>
                </div>
            </div>
          </div>
        </div>
      );
    
};

export default Register;