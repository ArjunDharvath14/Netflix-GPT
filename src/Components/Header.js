import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../Utils/Firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../Utils/userSlice";
import { LOGO } from "../Utils/Constants";
const Header = () => {
  const user=useSelector(store=>store.user);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleSignout=()=>{
         signOut(auth).then(() => { 
         }).catch((error) => {
  
        });
  }
  useEffect(()=>{
            const unsubscribe=onAuthStateChanged(auth, (user) => {
            if (user) {
            const {uid,displayName,email,photoURL} = user;
            dispatch(addUser({uid:uid,displayName:displayName,email:email,photoURL:photoURL}));
            navigate("/browse");
            } else {
                dispatch(removeUser());
              navigate("/")    
            }
          });
          return ()=>unsubscribe();
        },[]);
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-30 flex justify-between">
        <img className="w-44"
         src={LOGO} alt="logo"/>
         {user && <div className='flex p-2'>
          <img className="w-12 h-12" src={user.photoURL}  alt='alt-logo'/>
          <button onClick={handleSignout} className='font-bold text-white'>(Sign Out)</button>
         </div>}
    </div>
  )
}

export default Header;