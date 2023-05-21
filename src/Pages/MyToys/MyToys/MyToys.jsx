import { useContext, useEffect, useState } from "react";
import MyToyRow from "../MyToyRow/MyToyRow";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FadeLoader } from "react-spinners";


const MyToys = () => {
    const { user, loading } = useContext(AuthContext);
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

    if (loading) {
        return <div className="h-screen w-full grid place-items-center"><FadeLoader color="#36d7b7" /></div>;
    }

    return (
        <div className="h-screen">
            <h1 className='text-center font-extrabold text-2xl shadow-slate-800 md:text-5xl my-12'>My Toys</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Toy Name</th>
                            <th>Seller</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Available Quantity</th>
                            <th>Update</th>
                            <th>Delete</th>
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