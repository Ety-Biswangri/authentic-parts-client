import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {

    const [user, loading, error] = useAuthState(auth);

    const logOut = () => {
        signOut(auth);
    }

    const headerItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/portfolio">My Portfolio</Link></li>
        <li>
            {
                user ? <button class="btn" style={{ backgroundColor: "lightblue", color: 'black' }} onClick={logOut}>Logout</button> : <Link to="/login">Login</Link>
            }
        </li>
    </>

    return (
        <div class="navbar bg-base-100 bg-primary 2xl:max-w-7xl mx-auto">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {headerItems}
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl lg:ml-20 text-white">Authentic Parts</a>
            </div>
            <div class="navbar-center hidden lg:flex text-white">
                <ul class="menu menu-horizontal p-0 ml-32">
                    {headerItems}
                </ul>
            </div>
            {/* <div class="navbar-end">
                <a class="btn">Get started</a>
            </div> */}
        </div>
    );
};

export default Header;