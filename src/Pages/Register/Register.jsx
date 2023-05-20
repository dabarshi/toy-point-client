import { Link } from 'react-router-dom';
import logo from '../../assets/toyPoint/tinyLogo.png';
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from '../../Providers/AuthProvider';


const Register = () => {
    const [error, setError] = useState('');

    const { createNewUser } = useContext(AuthContext);

    // handle Google sign in
    const handleClick = () => {
        console.log('clicked')
    }

    // handle email password login

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        if (password.length < 6) {
            setError('Password must be more then 6 characters')
            return;
        }

        const registerInfo = { name, email, photo, password }
        console.log(registerInfo)

        // create new user with email and password
        createNewUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="hero mt-6 py-6 min-h-screen bg-slate-700">

            <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center space-y-6">
                {/* Google Register and title */}
                <div className='w-full md:text-center md:flex md:flex-col items-center space-y-4'>
                    <div>
                        <img src={logo} alt="toy-point" className='h-20' />
                    </div>

                    <h1 className="text-5xl font-bold text-white">Register</h1>

                    <div onClick={handleClick} className='border-2 p-2 text-center shadow-2xl cursor-pointer'>
                        <h1 className='text-white font-bold'>
                            <FcGoogle className='inline mx-3' />
                            <span className='me-3'>Register with Google</span>
                        </h1>
                    </div>

                </div>
                {/* divider */}

                <div className='text-white p-2 border-2 rounded-full'><p>OR</p></div>


                {/* Login form */}
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">


                        <form onSubmit={handleSubmit}>
                            {/* Name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                            </div>

                            {/* Email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>

                            {/* Photo */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
                            </div>

                            {/* Password */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Register" className='btn btn-primary' />
                            </div>
                        </form>
                        <p className='my-2 text-orange-700'><small>{error}</small></p>
                        <p><small>Already have an account? Please <Link to='/login' className='btn-link'>Login</Link></small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;