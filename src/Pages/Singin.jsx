import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/Authprovider";

const Singin = () => {
  const {SignInUser}=useContext(AuthContext)
  const handleSignIn =e=>{
    e.preventDefault()
   const form =e.target
   const email =form.email.value
   const password =form.password.value
   const logInUser ={email,password}
   console.log(logInUser);
   SignInUser(email,password)
   .then(result=>{
    console.log(result.user)
    const lastSignInTime =result?.user?.metadata?.lastSignInTime
    console.log(lastSignInTime)
    const logInInfo ={email,lastSignInTime}
    fetch('http://localhost:5000/users',{
      method:'PATCH',
      headers:{
        'content-type':'application/json'},
      body:JSON.stringify(logInInfo)
    })
    .then(res=>res.json())
    .then(data=>console.log('last sign in time update',data))

   })
   .catch(error=>console.log(error))
  }
  return (
    <div>
      <div className="  py-5 flex justify-center gap-3 border w-10/12 mx-auto">
        <div>
          <Link
            className="border border-orange-300 px-2 py-1 rounded-sm my-4 mx-auto"
            to={"/"}
          >
            Home
          </Link>
        </div>
        <div>
          <Link
            className="border border-orange-300 px-2 py-1 rounded-sm my-4 mx-auto"
            to={"/add"}
          >
            Add Coffee
          </Link>
        </div>
        <div>
          <Link
            className="border border-orange-300 px-2 py-1 rounded-sm my-4 mx-auto"
            to={"/login"}
          >
            Sign In
          </Link>
        </div>
      </div>
      
      <div className="flex flex-col gap-3  items-center justify-center pt-10 ">
        <div className="text font-bold text-3xl">Sign In</div>
        <div className="card bg-[#131313] text-[#ffffff] w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#ffffff]">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input text-[#131313] input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#ffffff]">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered text-[#131313]"
                required
              />
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt text-[#ffffff] link link-hover"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary hover:bg-none bg-[#ba6063]">
                Login
              </button>
            </div>
          </form>
        <p className="text-lg ml-6 mb-4 ">If New to coffee please <Link className="font-semibold" to={'/register'}>Sign Up</Link></p>
          
        </div>
      </div>
    </div>
  );
};

export default Singin;
