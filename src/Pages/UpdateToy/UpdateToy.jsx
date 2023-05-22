
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {


    const toy = useLoaderData();


    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;

        const toyName = form.toyName.value;
        const toyPhoto = form.toyPhoto.value;
        const sellerName = form.sellerName.value;
        const email = form.email.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const details = form.details.value;

        const updateToyInfo = {toyName, toyPhoto, sellerName, email, subCategory, price, rating, quantity, details };


        // post data to server
        fetch(`http://localhost:5000/toy/${toy._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateToyInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Update Successful',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })
                
            }
        })
    }
    return (
        <div className="my-10">
            <h1 className='text-center font-extrabold text-2xl shadow-slate-800 md:text-5xl mb-12'>Update Toy</h1>
            <div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {/* name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Toy Name</span>
                                </label>
                                <input type="text" name="toyName" defaultValue={toy?.toyName} placeholder="Toy Name" className="input input-bordered" required />
                            </div>
                            {/* Toy photo url */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Toy Photo URL</span>
                                </label>
                                <input type="text" name="toyPhoto" defaultValue={toy?.toyPhoto} placeholder="Toy Photo URL" className="input input-bordered" />
                            </div>
                            {/* Seller Name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Seller Name</span>
                                </label>
                                <input type="text" name="sellerName" defaultValue={toy?.sellerName} className="input input-bordered" />
                            </div>
                            {/* seller's email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' defaultValue={toy?.email} className="input input-bordered" />
                            </div>
                            {/* Sub category */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Sub-Category</span>
                                </label>
                                <input type="text" name='subCategory' defaultValue={toy?.subCategory} placeholder="sub-category" className="input input-bordered" />
                            </div>
                            {/* Price */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="number" name='price' defaultValue={toy?.price} placeholder="Price" className="input input-bordered" />
                            </div>
                            {/* rating */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="text" name='rating' defaultValue={toy?.rating} placeholder="Rating" className="input input-bordered" />
                            </div>
                            {/* Available Quantity */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available Quantity</span>
                                </label>
                                <input type="text" name='quantity' defaultValue={toy?.quantity} placeholder="quantity" className="input input-bordered" />
                            </div>
                        </div>
                        {/* Details Description*/}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name='details' defaultValue={toy?.details} placeholder="description" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Update Toy" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateToy;