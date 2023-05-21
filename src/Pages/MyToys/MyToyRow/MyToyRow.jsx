import { Link } from "react-router-dom";


const MyToyRow = ({toy}) => {
    const {_id, toyName, toyPhoto, sellerName, email, subCategory, price, rating, quantity} = toy;
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
            <td>{rating}</td>
            <td>{quantity}</td>

            <th>
                <Link to={`/update/${_id}`} className="btn btn-ghost btn-xs">Update</Link>
            </th>
            <th>
                <button className="btn btn-ghost btn-xs">delete</button>
            </th>
        </tr>
    );
};

export default MyToyRow;