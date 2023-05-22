import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";


const ToyCard = ({ toy }) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleClick = _id => {
        if(user){
            navigate(`/toy/${_id}`)
        } else {
            Swal.fire('You have to log in first to view details')
            navigate(`/toy/${_id}`)
        }
    }

    const { _id, toyName, toyPhoto, price, rating } = toy;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={toyPhoto} alt="toy" className="rounded-xl w-full max-w-sm" />
            </figure>
            <div className="card-body items-center text-center space-y-3">
                <h2 className="card-title">{toyName}</h2>
                <div className="flex justify-center align-middle gap-5">
                    <div className="badge badge-secondary">Price :${price}</div>
                    <div className="badge badge-secondary">Rating :{rating}</div>
                </div>
                <div className="card-actions">
                    <button onClick={() => handleClick(_id)} className="btn btn-outline">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;