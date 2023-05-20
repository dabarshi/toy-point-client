import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const NavBar = () => {
    const { logOut, user } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
        .then(()=>{})
        .catch(error => console.log(error))
    }

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/all-toys'>All Toys</Link></li>
        <li><Link to='/my-toys'>My Toys</Link></li>
        <li><Link to='/add-toy'>Add A Toy</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>

    </>;

    return (
        <div className="navbar bg-slate-400">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <div className='h-12 w-12 pt-2 hidden lg:inline'>
                    <img src={logo} alt="" className='h-full rounded-xl' />
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-sm md:text-xl">Toy Point</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold text-white">
                    {
                        navItems
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className='flex justify-center items-center gap-5'>
                            <div className="avatar tooltip tooltip-bottom" data-tip={user.displayName}>
                                <div className="w-12 rounded-full">
                                    {   user.photoURL? 
                                        <img src={user.photoURL}/>
                                        : <FaUserCircle />}
                                </div>
                            </div>
                            <div>
                                <button onClick={handleSignOut} className='btn btn-xs md:btn'>Logout</button>
                            </div>


                        </div>
                        : <Link to='/login' className="btn btn-xs md:btn">Login</Link>
                }
            </div>
        </div>
    );
};

export default NavBar;