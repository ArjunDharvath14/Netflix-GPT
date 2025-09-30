import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter} from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

const Body = () => {
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
  return (
    <div>
        <RouterProvider router={approute}/>
    </div>
  )
}

export default Body;