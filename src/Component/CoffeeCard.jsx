import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({everyCoffee,setallcoffee,allcoffee}) => {
    // eslint-disable-next-line react/prop-types
    const{ _id,name, chef, supplier, taste, category, details, photo }=everyCoffee;
    function handleDelete(id) {
        console.log(id);
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            swalWithBootstrapButtons.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });
                            setallcoffee(allcoffee.filter(coffee=>coffee._id !== id))
                        }

                    });
                //   console.log('delete data successful');
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your imaginary file is safe :)",
                    icon: "error"
                });
            }
        });
    }
    return (
        <div className='bg-[#F5F4F1] flex items-center justify-between px-6 py-2'>
           {/* image */}
           <div className="img"><img src={photo} alt="" /></div>
           {/* name ,chef and price */}
           <div className="flex gap-2 flex-col">
             <p className="name">Name:{name}</p>
             <p className="chef">Chef:{chef}</p>
             <p className="category">category:{category}</p>
           </div>
           {/* icons */}
           <div className="icons flex items-center gap-4 flex-col">
             <button onClick={()=>handleDelete(_id)} className='text-xs bg-blue-600 rounded-sm text-[#ffffff] px-2 py-1  font-medium'>delete</button>
             <Link to={`/update/${_id}`}>
             <button className='text-xs bg-[#3C4450] rounded-sm text-[#ffffff] px-2 py-1 font-medium'>update</button>
              </Link>
             <button className='text-xs bg-[#3C4450] rounded-sm text-[#ffffff] px-2 py-1 font-medium'>details</button>
           </div>
        </div>
    );
};

export default CoffeeCard;