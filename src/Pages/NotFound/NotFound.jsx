import { Link } from "react-router-dom";
import notFound from '../../assets/notFound.jpg'
import useTitle from "../../hooks/useTitle";


const NotFound = () => {
    useTitle('Page Not Found');
    return (
        <div className="h-screen grid place-items-center">
            <div className="flex flex-col align-middle">
                <img src={notFound} alt="" className="h-80" />
                <Link to='/' className="btn btn-primary">Back to Home</Link>
            </div>
        </div>
    );
};

export default NotFound;