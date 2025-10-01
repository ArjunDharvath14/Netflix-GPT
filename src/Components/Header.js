import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../Utils/Firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../Utils/userSlice";
import { LOGO } from "../Utils/Constants";
import { ToggleGPTSearchView } from "../Utils/GptSlice";
import { Supported_lang } from "../Utils/LanguageConstants";
import { changeLanguage } from "../Utils/configSlice";
const Header = () => {
  const user=useSelector(store=>store.user);
  const GPTSearch=useSelector(store=>store.gpt.GPTSearch);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleSignout=()=>{
         signOut(auth).then(() => { 
         }).catch((error) => {
  
        });
  }
  const handleGPTSeach=()=>{
    dispatch(ToggleGPTSearchView());

  }
  const handleLangagueToggle=(e)=>{
    dispatch(changeLanguage(e.target.value));
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
          {GPTSearch && <select onChange={handleLangagueToggle} className="p-2 m-2 bg-gray-900 text-white">
            {Supported_lang.map(lang=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
          </select>}
          <button className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg cursor-pointer" onClick={handleGPTSeach}>{GPTSearch ? "Homepage":"GPTSearch"}</button>
          <img className="w-12 h-12" src={user.photoURL}  alt='alt-logo'/>
          <button onClick={handleSignout} className='font-bold text-white'>(Sign Out)</button>
         </div>}
    </div>
  )
}

export default Header;