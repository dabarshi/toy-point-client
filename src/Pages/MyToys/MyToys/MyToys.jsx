import { useContext, useEffect, useState } from "react";
import MyToyRow from "../MyToyRow/MyToyRow";
import { AuthContext } from "../../../Providers/AuthProvider";


const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toyInfo, setToyInfo] = useState([]);


    const url = `http://localhost:5000/selective-toys?email=${user.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setToyInfo(data)
            })
    }, [url])
    return (
        <div>
            <h1 className='text-center font-extrabold text-2xl shadow-slate-800 md:text-5xl my-12'>My Toys</h1>
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
                            toyInfo.map(toy => <MyToyRow
                                key={toy._id}
                                toy={toy}></MyToyRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToys;