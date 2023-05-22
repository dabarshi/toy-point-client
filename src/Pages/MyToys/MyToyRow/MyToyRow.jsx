import { Link } from "react-router-dom";
import Swal from 'sweetalert2'


const MyToyRow = ({ toy }) => {
    const { _id, toyName, toyPhoto, sellerName, email, subCategory, price, rating, quantity } = toy;

    const handleDelete = (_id) => {
        console.log(_id)

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/toy/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount === 1) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }
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
                <Link to={`/update/${_id}`} className="btn btn-secondary btn-xs">Update</Link>
            </th>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-warning btn-xs">delete</button>
            </th>
        </tr>
    );
};

export default MyToyRow;