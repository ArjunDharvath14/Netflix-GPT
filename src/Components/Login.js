import Header from "./Header";
import { useRef, useState } from "react";
import { CheckValidate } from "../Utils/Validate";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { addUser } from "../Utils/userSlice";
import { useDispatch } from "react-redux";
import { USER_AVATAR } from "../Utils/Constants";
const Login=()=>{
    const [isSignForm,setisSignForm]=useState(true);
    const [errorMessage,seterrorMessage]=useState(null);
    const dispatch=useDispatch();
    const name=useRef(null);
    const email=useRef(null);
    const password=useRef(null);
    const handleSignInForm=()=>{
     const message=CheckValidate(email.current.value,password.current.value);
     seterrorMessage(message);
     if(message) return;
     if(!isSignForm)
     {
        createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
        displayName: name.current.value, photoURL:USER_AVATAR
        }).then(() => {
             const {uid,displayName,email,photoURL} = auth.currentUser;
                dispatch(addUser({uid:uid,displayName:displayName,email:email,photoURL:photoURL}));

        }).catch((error) => {
            seterrorMessage(error.message);
        });
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterrorMessage(errorCode+"-"+errorMessage);

        });

     }
     else{
        signInWithEmailAndPassword(auth,email.current.value,password.current.value)
        .then((userCredential) => {
        const user = userCredential.user;

  })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterrorMessage(errorCode+"-"+errorMessage);
  });

     }
        

    }
    const toggleSignIn=()=>{
        setisSignForm(!isSignForm);
    }
    return(
        <div >
            <Header/>
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/bebd95d0-65f9-41a9-9d12-4794db63653e/web/IN-en-20250922-TRIFECTA-perspective_5e75cfb4-3797-4f17-866b-181ff91a51dd_large.jpg" alt="body-logo"/>
            </div>
            <form onSubmit={(e)=>e.preventDefault()} className=" w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80">
                <h1 className="font-bold text-3xl p-4">{isSignForm ? "Sign In":"Sign Up"}</h1>
                {!isSignForm && (<input type="text" ref={name} placeholder="Full Name" className="p-2 my-2 w-full bg-gray-800"/>)}
                <input type="text" ref={email} placeholder="Email Address" className="p-2 my-2 w-full bg-gray-800"/>
                <input type="password" ref={password} placeholder="password" className="p-2 my-2 w-full bg-gray-800"/>
                <p className="text-red-400 font-bold">{errorMessage}</p>
                <button className="p-4 my-4 bg-red-700 w-full rounded-lg" onClick={handleSignInForm}>{isSignForm ? "Sign In":"Sign Up"}</button>
                <p className="py-4 cursor-pointer" onClick={toggleSignIn}>{isSignForm ? "New To Netflix? Sign Up":"Already user? Sign In"}</p>
            </form>
        </div>
    )
}
export default Login;