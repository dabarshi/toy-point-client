

const ToyCard = ({toy}) => {

    const {toyName, toyPhoto, price, rating } = toy;

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
                    <button className="btn btn-outline">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;