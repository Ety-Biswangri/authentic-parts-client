import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {

    const [user, loading, error] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content lg:px-20 px-5 py-6">
                <h2 className='text-2xl font-bold text-primary text-center'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>

            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-52 text-white" style={{ backgroundColor: "#457b9d" }}>
                    <li><Link to="/dashboard">My Profile</Link></li>
                    {
                        !admin &&
                        <>
                            <li><Link to="/dashboard/myOrders">My Orders</Link></li>
                            <li><Link to="/dashboard/addReview">Add A Review</Link></li>
                        </>
                    }

                    {
                        admin &&
                        <>
                            <li><Link to="/dashboard/manageOrders">Manage All Orders</Link></li>
                            <li><Link to="/dashboard/addProduct">Add A Product</Link></li>
                            <li><Link to="/dashboard/makeAdmin">Make Admin</Link></li>
                            <li><Link to="/dashboard/manageProducts">Manage Products</Link></li>
                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;