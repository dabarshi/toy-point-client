import logo from '../../assets/toyPoint/tinyLogo.png';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    return (
        <div className="hero mt-6 py-6 min-h-screen bg-slate-700">

            <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center space-y-6">
                {/* Google login and title */}
                <div className='w-full md:text-center md:flex md:flex-col items-center space-y-4'>
                    <div>
                        <img src={logo} alt="toy-point" className='h-20' />
                    </div>

                    <h1 className="text-5xl font-bold text-white">Login</h1>
                    <div className='border-2 p-2 text-center shadow-2xl'>
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


                        <form>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;