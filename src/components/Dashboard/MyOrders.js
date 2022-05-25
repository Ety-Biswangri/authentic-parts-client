import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    const [myOrders, setMyOrders] = useState([]);

    // console.log(myOrders)


    useEffect(() => {
        if (user) {
            fetch(`https://intense-river-93900.herokuapp.com/order?customerEmail=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {
                    setMyOrders(data);
                })
        }
    }, [user]);

    return (
        <div className='my-8'>
            <h2 className='text-secondary text-xl text-center mb-3'>My Total Orders: {myOrders.length}</h2>

            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Product Name</th>
                            <th>Total Price</th>
                            <th>Quantity</th>
                            <th>Payment Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.map((myOrder, index) => <tr key={myOrder._id}>
                                <th>{index + 1}</th>
                                <td>{myOrder.customerName}</td>
                                <td>{myOrder.orderName}</td>
                                <td>${myOrder.orderPrice}</td>
                                <td>{myOrder.orderQuantity}</td>
                                <td>
                                    {
                                        myOrder.paid && <span className='text-success text-green-700'>Paid</span>
                                    }
                                    {
                                        !myOrder.paid && <span className='text-red-800'>Not paid</span>
                                    }
                                </td>
                                <td>
                                    {
                                        !myOrder.paid && <>
                                            <Link to={`/dashboard/payment/${myOrder._id}`}><button class="btn btn-success btn-xs text-white">Pay</button></Link>

                                            <Link to={``}><button class="btn btn-error btn-xs text-white ml-3">Cancel</button></Link></>
                                    }

                                    {
                                        /*  {
                                            myOrder.paid && <span className='text-success'>Paid</span>
                                        } */
                                    }

                                    {
                                        myOrder.paid && <span className='text-green-700'>Transaction Id: {myOrder.transactionId}</span>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;