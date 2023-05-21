import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FadeLoader } from "react-spinners";


const SingleToy = () => {
    const toy = useLoaderData();
    const {loading} = useContext(AuthContext);

    const { toyName, toyPhoto, sellerName, email, subCategory, price, rating, quantity, details } = toy;

    if(loading) {
        return <div className="h-screen w-full grid place-items-center"><FadeLoader color="#36d7b7" /></div>;
    }
    return (
        <div className="hero min-h-screen my-12 p-4 bg-slate-400">
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-8">
                <div>
                    <img src={toyPhoto} className="max-w-sm w-full rounded-lg shadow-2xl" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold my-4">{toyName}</h1>
                    <div className="space-y-2">
                        <div className="flex gap-4">
                            <p><span className="font-semibold">Name : </span> {sellerName}</p>
                            <p><span className="font-semibold">Email : </span> {email}</p>
                        </div>
                        <div className="flex gap-4">
                            <p><span className="font-semibold">Price : </span>$ {price}</p>
                            <p><span className="font-semibold">Rating : </span> {rating}</p>
                        </div>
                        <div className="flex gap-4">
                            <p><span className="font-semibold">Available Quantity : </span> {quantity}</p>
                            <p><span className="font-semibold">Sub-Category : </span> {subCategory}</p>
                        </div>
                        <div className="flex gap-4">
                            <p><span className="font-semibold">Detail Description : </span> {details}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SingleToy;