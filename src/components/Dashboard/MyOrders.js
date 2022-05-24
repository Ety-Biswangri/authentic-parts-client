import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    const [myOrders, setMyOrders] = useState([]);

    // console.log(myOrders)


    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?customerEmail=${user.email}`, {
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
        <div>
            <h2>My Total Orders: {myOrders.length}</h2>

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
                                <td>{myOrder.orderPrice}</td>
                                <td>{myOrder.orderQuantity}</td>
                                <td>{myOrder.customerName}</td>
                                <td>{myOrder.customerName}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;