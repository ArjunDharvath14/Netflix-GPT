import Header from "./Header";
import { useState } from "react";
const Login=()=>{
    const [isSignForm,setisSignForm]=useState(true);
    const toggleSignIn=()=>{
        setisSignForm(!isSignForm);
    }
    return(
        <div >
            <Header/>
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/bebd95d0-65f9-41a9-9d12-4794db63653e/web/IN-en-20250922-TRIFECTA-perspective_5e75cfb4-3797-4f17-866b-181ff91a51dd_large.jpg" alt="body-logo"/>
            </div>
            <form className=" w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80">
                <h1 className="font-bold text-3xl p-4">{isSignForm ? "Sign In":"Sign Up"}</h1>
                {!isSignForm && (<input type="text" placeholder="Full Name" className="p-2 my-2 w-full bg-gray-800"/>)}
                <input type="text" placeholder="Email Address" className="p-2 my-2 w-full bg-gray-800"/>
                <input type="password" placeholder="password" className="p-2 my-2 w-full bg-gray-800"/>
                <button className="p-4 my-4 bg-red-700 w-full rounded-lg">{isSignForm ? "Sign In":"Sign Up"}</button>
                <p className="py-4 cursor-pointer" onClick={toggleSignIn}>{isSignForm ? "New To Netflix? Sign Up":"Already user? Sign In"}</p>
            </form>
        </div>
    )
}
export default Login;