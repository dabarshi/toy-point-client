import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/toyPoint/tinyLogo.png';
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    useTitle('Login');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const { loginWithEmailAndPassword, googleSignIn } = useContext(AuthContext);

    const [error, setError] = useState('');

    // handle Google sign in
    const handleClick = () => {
        console.log('clicked')
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from)
            })
            .catch(error => setError(error))
    }

    // handle email password login

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            setError('Password must be more then 6 characters')
            return;
        }


        // sign in with email and password

        loginWithEmailAndPassword(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                Swal.fire('Log-in successful')
                form.reset();
                navigate(from)
            })
            .catch(error => {
                console.log(error)
                if (error.message == "Firebase: Error (auth/wrong-password).") {
                    setError("Please, enter correct password")
                    return;
                }
                if (error.message == "Firebase: Error (auth/user-not-found).") {
                    setError("Email does not match");
                    return;
                }
                setError(error.message);
            })


    }

    return (
        <div className="hero mt-6 py-6 min-h-screen bg-slate-700">

            <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center space-y-6">
                {/* Google login and title */}
                <div className='w-full md:text-center md:flex md:flex-col items-center space-y-4'>
                    <div>
                        <img src={logo} alt="toy-point" className='h-20' />
                    </div>

                    <h1 className="text-5xl font-bold text-white">Login</h1>

                    <div onClick={handleClick} className='border-2 p-2 text-center shadow-2xl cursor-pointer'>
                        <h1 className='text-white font-bold'>
                            <FcGoogle className='inline mx-3' />
                            <span className='me-3'>Log-in with Google</span>
                        </h1>
                    </div>

                </div>
                {/* divider */}

                <div className='text-white p-2 border-2 rounded-full'><p>OR</p></div>


                {/* Login form */}
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">


                        <form onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Login" className='btn btn-primary' />
                            </div>
                        </form>
                        <p className='my-2 text-orange-600'><small>{error}</small></p>

                        <p><small>New to Here? Please <Link to='/register' className='btn-link'>Register</Link></small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;