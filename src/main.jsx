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
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
