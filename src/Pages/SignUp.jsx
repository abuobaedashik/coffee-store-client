import React, { useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";
import { data } from "react-router-dom";

const SignUp = () => {
     const {createUser} =useContext(AuthContext)
     console.log(createUser);
    const handleSignUp =(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = { name ,email, password };
        console.log(user);
        createUser(email,password)
        .then((result) => {
            // Signed up 
            const user = result.user;
            console.log(user);
            const createdAt =result?.user?.metadata?.creationTime;
            console.log(createdAt);


             const newUser ={name,email,createdAt}
            fetch('http://localhost:5000/users',{
              method:'POST',
              headers:{
                'content-type' : 'application/json'},
              body:JSON.stringify(newUser)
            })
            .then(res=>res.json())
            .then(data=>console.log(data))
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log({errorCode,errorMessage});
          });

    }

    return (
    <div className="flex flex-col gap-3  items-center justify-center pt-10 ">
        <div className="text font-bold text-3xl">Sign Up</div>
      <div className="card bg-[#131313] text-[#ffffff] w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSignUp} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#ffffff]">name</span>
            </label>
            <input
              type="name"
              name="name"
              placeholder="name"
              className="input input-bordered text-[#131313]"
              required
            />
          </div>
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
              <a href="#" className="label-text-alt text-[#ffffff] link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary hover:bg-none bg-[#ba6063]">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
