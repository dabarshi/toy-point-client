import { useContext, useEffect, useState } from "react";
import MyToyRow from "../MyToyRow/MyToyRow";
import { AuthContext } from "../../../Providers/AuthProvider";


const MyToys = () => {
    const {user} = useContext(AuthContext);
    const [toyInfo, setToyInfo] = useState([]);


    const url = `http://localhost:5000/selective-toys?email=${user.email}`;
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setToyInfo(data)
        })
    }, [])
    return (
        <div>
        <h1>Number of toy : {toyInfo.length}</h1>
            <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <MyToyRow></MyToyRow>
                        </tbody>

                    </table>
                </div>
        </div>
    );
};

export default MyToys;