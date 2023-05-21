import { Link } from "react-router-dom";


const ToyRow = ({toy}) => {
    const {_id, toyName, toyPhoto, sellerName, email, subCategory, price, rating, quantity, details} = toy;
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={toyPhoto} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{toyName}</div>
                        
                    </div>
                </div>
            </td>
            <td>
                {sellerName}
                <br />
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <th>
                <Link to={`/toy/${_id}`} className="btn btn-ghost btn-xs">View details</Link>
            </th>
        </tr>
    );
};

export default ToyRow;