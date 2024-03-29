import React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import ConfirmDeleteModal from './ConfirmDeleteModal';
import ManageProductsRow from './ManageProductsRow';

const ManageProducts = () => {
    const [confirmDelete, setConfirmDelete] = useState(null);

    const { data: products, isLoading, error, refetch } = useQuery('products', () => fetch('https://authentic-parts.onrender.com/parts').then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>;
    }


    return (
        <div>
            <h2 className='text-secondary text-xl text-center mb-3 mt-6'>Total Products: {products.length}</h2>


            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Available Quantity</th>
                            <th>Minimum Order Quantity</th>
                            <th>Price (per unit)</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <ManageProductsRow key={product._id} product={product} index={index} refetch={refetch} setConfirmDelete={setConfirmDelete}></ManageProductsRow>)
                        }
                    </tbody>
                </table>
            </div>
            {
                confirmDelete && <ConfirmDeleteModal confirmDelete={confirmDelete} refetch={refetch} setConfirmDelete={setConfirmDelete}></ConfirmDeleteModal>
            }
        </div>
    );
};

export default ManageProducts;