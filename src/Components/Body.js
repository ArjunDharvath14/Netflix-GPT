import React, { useEffect } from 'react'
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter} from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { auth } from '../Utils/Firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';

const Body = () => {
    const dispatch=useDispatch();
    const approute=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        },
    ])
        useEffect(()=>{
            onAuthStateChanged(auth, (user) => {
            if (user) {
            const {uid,displayName,email,photoURL} = user;
            dispatch(addUser({uid:uid,displayName:displayName,email:email,photoURL:photoURL}));
            
    
            } else {
                dispatch(removeUser());
                
            }
          });
        },[]);
  return (
    <div>
        <RouterProvider router={approute}/>
    </div>
  )
}

export default Body;