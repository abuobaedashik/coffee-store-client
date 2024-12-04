import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import AddCoffee from './Pages/AddCoffee';
import UpdateCoffee from './Pages/UpdateCoffee';
import Singin from './Pages/Singin';
import SignUp from './Pages/SignUp';
import Authprovider from './Provider/Authprovider';
import UserPage from './Pages/UserPage';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    loader:()=>fetch('http://localhost:5000/coffee')
  },
  {
    path: "/add",
    element:<AddCoffee></AddCoffee>
  },
  {
    path: "/update/:id",
    element:<UpdateCoffee></UpdateCoffee>,
    loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path: "/login",
    element:<Singin></Singin>
  },
  {
    path: "/register",
    element:<SignUp></SignUp>,
  },
  {
    path: "/user",
    element:<UserPage></UserPage>,
    loader:()=>fetch('http://localhost:5000/users/')
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Authprovider>
      <RouterProvider router={router} />
     </Authprovider>
  </StrictMode>,
)
