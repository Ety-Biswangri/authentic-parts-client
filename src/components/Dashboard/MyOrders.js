import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import MyOrdersDeleteConfirm from './MyOrdersDeleteConfirm';

const MyOrders = () => {
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);

    const [OrderConfirmDelete, setOrderConfirmDelete] = useState(null);

    const url = `https://intense-river-93900.herokuapp.com/order?customerEmail=${user?.email}`;

    const { data: myOrders, isLoading, refetch } = useQuery(['myOrders', user.email], () => fetch(url, {
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
        }));

    if (isLoading) {
        return <Loading></Loading>;
    }


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
                            <th>Order Quantity</th>
                            <th>Total Price</th>
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
                                <td>{myOrder.orderQuantity}</td>
                                <td>${myOrder.orderPrice}</td>
                                <td>
                                    {
                                        myOrder.paid && <span className='text-green-700'>Paid</span>
                                    }
                                    {
                                        !myOrder.paid && <span className='text-red-800'>Unpaid</span>
                                    }
                                </td>
                                <td>
                                    {
                                        !myOrder.paid && <>
                                            <Link to={`/dashboard/payment/${myOrder._id}`}><button class="btn btn-success btn-xs text-white">Pay</button></Link>

                                            {/*  <Link to={``}><button class="btn btn-error btn-xs text-white ml-3">Cancel</button></Link> */}

                                            <label onClick={() => setOrderConfirmDelete(myOrder)} for="confirm-delete-modal" class="btn btn-error btn-xs text-white">Delete</label>
                                        </>
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
            {
                OrderConfirmDelete && <MyOrdersDeleteConfirm OrderConfirmDelete={OrderConfirmDelete} refetch={refetch} setOrderConfirmDelete={setOrderConfirmDelete}></MyOrdersDeleteConfirm>
            }
        </div >
    );
};

export default MyOrders;
