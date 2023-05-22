
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const UpdateToy = () => {
    useTitle('Update Toy')


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

        const updateToyInfo = { toyName, toyPhoto, sellerName, email, subCategory, price, rating, quantity, details };


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
                if (data.modifiedCount > 0) {
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
        <div className="my-10 bg-slate-200 p-6 rounded-xl">
            <h1 className='text-center font-extrabold text-2xl shadow-slate-800 md:text-3xl mb-6'>Update {toy?.toyName}</h1>
            <div>
                <div className="card-body max-w-sm mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {/* Price */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="number" name='price' defaultValue={toy?.price} placeholder="Price" className="input input-bordered" />
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
                            <textarea className="textarea textarea-bordered h-24" name='details' defaultValue={toy?.details} placeholder="description"></textarea>
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