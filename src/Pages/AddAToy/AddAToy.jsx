import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";


const AddAToy = () => {

    useTitle('Add A Toy')
    const { user } = useContext(AuthContext);

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

        const toyInfo = { toyName, toyPhoto, sellerName, email, subCategory, price, rating, quantity, details };

        console.log(toyInfo)

        // post data to server
        fetch('https://y-six-olive.vercel.app/toys', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toyInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Successfully Added',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    })
                    form.reset();
                }
            })
    }

    return (
        <div className="my-10">
            <h1 className='text-center font-extrabold text-2xl shadow-slate-800 md:text-5xl mb-12'>Add Your Toy</h1>
            <div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {/* name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Toy Name</span>
                                </label>
                                <input type="text" name="toyName" placeholder="Toy Name" className="input input-bordered" required />
                            </div>
                            {/* Toy photo url */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Toy Photo URL</span>
                                </label>
                                <input type="text" name="toyPhoto" placeholder="Toy Photo URL" className="input input-bordered" />
                            </div>
                            {/* Seller Name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Seller Name</span>
                                </label>
                                <input type="text" name="sellerName" defaultValue={user?.displayName} className="input input-bordered" />
                            </div>
                            {/* seller's email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' defaultValue={user?.email} className="input input-bordered" />
                            </div>
                            {/* Sub category */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Sub-Category</span>
                                </label>
                                <input type="text" name='subCategory' placeholder="sub-category" className="input input-bordered" />
                            </div>
                            {/* Price */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="number" name='price' placeholder="Price" className="input input-bordered" />
                            </div>
                            {/* rating */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="text" name='rating' placeholder="Rating" className="input input-bordered" />
                            </div>
                            {/* Available Quantity */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available Quantity</span>
                                </label>
                                <input type="text" name='quantity' placeholder="quantity" className="input input-bordered" />
                            </div>
                        </div>
                        {/* Details Description*/}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea className="textarea textarea-bordered h-24" name='details' placeholder="description"></textarea>
                        </div>

                        <div className="form-control mt-6">
                            <input type="submit" value="Add Toy" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAToy;