import { useContext, useEffect, useState } from "react";
import ToyRow from "../ToyRow/ToyRow";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FadeLoader } from "react-spinners";
import useTitle from "../../../hooks/useTitle";


const AllToys = () => {
    useTitle('All Toys')
    const { loading } = useContext(AuthContext);

    const [loadAllToy, setLoadAllToy] = useState([]);
    const [search, setSearch] = useState('');



    const handleSubmit = (event) => {
        event.preventDefault();
        const toyName = event.target.toyName.value;
        setSearch(toyName);
    }




    let url = `http://localhost:5000/toys?toyName=${search}`;
    useEffect(() => {

        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setLoadAllToy(data)
                
            })
    }, [url])

    if(loading) {
        return <div className="h-screen w-full grid place-items-center"><FadeLoader color="#36d7b7" /></div>;
    }
    return (
        <div>
            <h1 className='text-center font-extrabold text-2xl shadow-slate-800 md:text-5xl my-12'>All Toys</h1>
            {/* search form */}
            <div className="mb-12 text-center">
                <form onSubmit={handleSubmit}>
                    <h1 className="font-bold my-2">Search By Toy Name</h1>
                    <input type="text" placeholder="search name" name='toyName' className="input input-bordered input-error w-full max-w-xs" />
                    <input type="submit" value="Search" className="btn ml-2" />
                </form>
            </div>
            {/* Toy data display in tabular form */}
            <div className="mb-12">
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