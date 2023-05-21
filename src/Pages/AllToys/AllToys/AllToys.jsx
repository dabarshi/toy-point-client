import { useEffect, useState } from "react";
import ToyRow from "../ToyRow/ToyRow";


const AllToys = () => {
    const [loadAllToy, setLoadAllToy] = useState([]);

    const url = `http://localhost:5000/toys?limit=${20}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setLoadAllToy(data)
            })
    }, [url])
    return (
        <div>
            <h1 className='text-center font-extrabold text-2xl shadow-slate-800 md:text-5xl my-12'>All Toys</h1>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Toy</th>
                                <th>Seller</th>
                                <th>Sub-category</th>
                                <th>Price</th>
                                <th>Available Quantity</th>
                                <th>View</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                loadAllToy.map(toy => <ToyRow
                                    key={toy._id}
                                    toy={toy}
                                ></ToyRow>)
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllToys;