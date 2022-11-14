import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import ManageOrdersRow from './ManageOrdersRow';
import ConfirmDeleteModal from './ConfirmDeleteModal';
import AllOrdersDeleteConfirm from './AllOrdersDeleteConfirm';

const ManageOrders = () => {

    const [confirmDelete, setConfirmDelete] = useState(null);

    const { data: allOrders, isLoading, error, refetch } = useQuery('allOrders', () => fetch('https://authentic-parts.onrender.com/orders', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>;
    }

    // console.log(allOrders)

    return (
        <div>
            <h2 className='text-secondary text-xl text-center mb-3 mt-6'>Total Orders: {allOrders.length}</h2>


            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Customer Name</th>
                            <th>Product Name</th>
                            <th>Order Quantity</th>
                            <th>Total Price</th>
                            <th>Payment Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrders.map((order, index) => <ManageOrdersRow key={order._id} order={order} index={index} refetch={refetch} setConfirmDelete={setConfirmDelete}></ManageOrdersRow>)
                        }
                    </tbody>
                </table>
            </div>
            {
                confirmDelete && <AllOrdersDeleteConfirm confirmDelete={confirmDelete} refetch={refetch} setConfirmDelete={setConfirmDelete}></AllOrdersDeleteConfirm>
            }
        </div>
    );
};

export default ManageOrders;