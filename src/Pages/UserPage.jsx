import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { MdDeleteForever, MdOutlineUpdate } from "react-icons/md";
import Swal from "sweetalert2";

const UserPage = () => {
  const loadedUser = useLoaderData();
  const [user, setuser] = useState(loadedUser);
  const handleDelete = id =>{
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
           
         fetch(`http://localhost:5000/users/${id}`,{
            method:'DELETE',
         })
         .then(res=>res.json())
         .then(data=>{
            if (data.deletedCount) {
                swalWithBootstrapButtons.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
             const remainUser =user.filter(totaluser=>totaluser._id !== id)
             setuser(remainUser)
            }
         })
         
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error"
          });
        }
      });
  }
  return (
    <div className="mx-auto w-11/12">
      <div className="pt-4 ">Users {user?.length}</div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>CreatedAd</th>
              <th>Last Sign In</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
             {
              user.map(everyUser=>
                <tr key={everyUser._id}>
                  <th>1</th>
                  <td>{everyUser.name}</td>
                  <td>{everyUser.email}</td>
                  <td>{everyUser.createdAt}</td>
                  <td>{everyUser.lastSignInTime}</td>
                  <td>
                    <button className="px-2 py-1 mr-3 rounded-sm bg-[#564220] text-[#ffffff]"><MdOutlineUpdate/></button>
                    <button onClick={()=>handleDelete(everyUser._id)} className="px-2 py-1 rounded-sm text-[#ffffff] bg-[#564220]"><MdDeleteForever/></button>
                  </td>
              </tr>
              )
             }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserPage;
