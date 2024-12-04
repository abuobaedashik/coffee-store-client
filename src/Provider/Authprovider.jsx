import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import React, { createContext, useState } from 'react';
import { auth } from '../Authentication/firebase.config';



export const AuthContext= createContext(null)

const Authprovider = ({children}) => {
//    const [user,setuser]=useState(null)
   const [loading,setloading]=useState(true)
  
  const createUser =(email,password)=>{
    setloading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }
  const SignInUser =(email,password)=>{
    setloading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }
  
  
  
   const userInfo={
    loading,
    createUser,
    SignInUser
   }


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;