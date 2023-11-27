
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import GoogleLogin from "../../Components/Shared/Navbar/GoogleLogin";


const Login = () => {
    const {signIn} = UseAuth();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();

      const onSubmit = ( data ) =>{
        console.log(data)
        signIn(data.email,data.password)
        .then(res =>{
     
          console.log(res)
        })
        .then(err=>{
          console.log(err)
        })
        reset();
       
      }
    
    return (
        <div>
            <Helmet>
            <title>Tech Spot | Login</title>
            </Helmet>
            <div className="hero-content flex-col">
        <div className="text-center md:w-1/2 lg:text-center text-main-color">
          <h1 className="text-4xl  font-bold">Login now!</h1>
          
        </div>
        <div className="card  w-full max-w-xl shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            
            
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
            <small className="text-sky-900 ">
              New here? <Link to="/register">register</Link>
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

export default Login;