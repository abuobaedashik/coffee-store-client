import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const updatecoffee = useLoaderData();
  const{ _id,name, chef, supplier, taste, category, details, photo }=updatecoffee;
    const handleUpdateCoffee =(event) =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updatenewcoffee = { name, chef, supplier, taste, category, details, photo };
    console.log(updatenewcoffee);
    fetch(`http://localhost:5000/coffee/${_id}`,{
      method:'PUT',
      headers:{
        'content-type':'application/json'},
      body:JSON.stringify(updatenewcoffee)
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
        Swal.fire({
            title: 'success!',
            text: 'Coffee Update fuccessfull',
            icon: 'success',
            confirmButtonText: 'Cool'
          })

  }
  return (
    <div>
      <div className="py-6 ">
        <form onSubmit={handleUpdateCoffee} className="p-5 ">
          <div className="flex items-center flex-col mx-auto px-6 py-3 w-8/12  bg-[#F4F3F0] ">
            <div className="text-xl font-semibold mt-3 mb-5">
              Update Coffee
            </div>
            {/* name and chef row */}
            <div className=" grid md:grid-cols-2 grid-cols-1 items-center gap-4 w-full">
              <div className="flex  flex-col gap-1 ">
                <span className=" ">Name</span>
                <input
                  type="text"
                  placeholder="Enter coffee name"
                  name="name"
                  defaultValue={name}
                  className=" input-accent px-5 py-1 rounded-md "
                />
              </div>
              <div className="flex  flex-col gap-1">
                <span className=" ">Chef</span>
                <div className="w-full">
                  <input
                    type="text"
                    name="chef"
                    defaultValue={chef}
                    placeholder="Enter coffee chef"
                    className="w-full input-accent px-5 py-1 rounded-md"
                  />
                </div>
              </div>
            </div>
            {/* supplier and taste row */}
            <div className=" grid md:grid-cols-2 grid-cols-1 items-center gap-4 w-full">
              <div className="flex  flex-col gap-1">
                <span className="mb-2 ">Supplier</span>
                <input
                  type="text"
                  name="supplier"
                  defaultValue={supplier}
                  placeholder="Enter coffee Supplier"
                  className="w-full input-accent px-5 py-1 rounded-md"
                />
              </div>
              <div className="flex  flex-col gap-1">
                <span className="mb-2 ">Taste</span>
                <input
                  type="text"
                  name="taste"
                  defaultValue={taste}
                  placeholder="Enter coffee Text"
                  className="w-full input-accent px-5 py-1 rounded-md"
                />
              </div>
            </div>
            {/* category and details row */}
            <div className=" grid md:grid-cols-2 grid-cols-1 items-center gap-4 w-full">
              <div className="flex  flex-col gap-1">
                <span className="mb-2 ">Category</span>
                <input
                  type="text"
                  name="category"
                  defaultValue={category}
                  placeholder="Enter coffee Category"
                  className="w-full input-accent px-5 py-1 rounded-md "
                />
              </div>
              <div className="flex  flex-col gap-1">
                <span className="mb-2 ">Details</span>
                <input
                  type="text"
                  name="details"
                  defaultValue={details}
                  placeholder="Enter coffee details"
                  className="w-full input-accent px-5 py-1 rounded-md"
                />
              </div>
            </div>
            {/* photo row */}
            <div className=" grid grid-cols-1 items-center gap-2 w-full">
              <div className="flex  flex-col gap-1">
                <span className="my-2 ">Photo URL</span>
                <input
                  type="text"
                  name="photo"
                  defaultValue={photo}
                  placeholder="Enter Photo url"
                  className="w-full input-accent px-5 py-1 rounded-md"
                />
              </div>
            </div>

            {/* button */}
            <div className=" grid grid-cols-1 items-center gap-2 w-full">
              <button className=" bg-[#D2B48C] w-full input-accent px-5 py-1 rounded-md text-[#ffffff] my-4 ">
                Add Coffee
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
