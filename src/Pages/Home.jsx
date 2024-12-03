import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CoffeeCard from '../Component/coffeeCard';
import navbg from '../assets/Photo/15.jpg'

const Home = () => {
    const [allcoffee,setallcoffee]=useState(useLoaderData())
    // const allCoffee = useLoaderData()
    return (
        <div>
            <div style={{ backgroundImage: `url(${navbg})`}} className="nav text-[#FFFFFF] text-4xl font-semibold py-5 text-center">Espresso Emporium</div>
            <div className="text-center text-lg font-semibold my-5">Our Popular Products</div>
           <div className="flex items-center justify-center">
            <Link className='border border-orange-300 px-2 py-1 rounded-sm my-4 mx-auto' to={'/add'}>Add Coffee</Link>
           </div>
           {/* <div className="mt-3">Total coffee :{allcoffee.length}</div> */}
           <div className="grid mt-6 grid-cols-1 sm:grid-cols-2 border-2 gap-3 p-4 border-blue-600 sm:w-10/12 w-11/12 mx-auto">
            {
             allcoffee.map(everyCoffee=><CoffeeCard 
                key={everyCoffee._id} allcoffee={allcoffee} setallcoffee={setallcoffee} everyCoffee={everyCoffee}>                  
                </CoffeeCard>)
            }
           </div>
        </div>
    );
};

export default Home;