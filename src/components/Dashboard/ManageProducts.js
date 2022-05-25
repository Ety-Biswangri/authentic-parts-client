import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import ManageProductsRow from './ManageProductsRow';

const ManageProducts = () => {

    const { data: products, isLoading, error, refetch } = useQuery('products', () => fetch('http://localhost:5000/parts').then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>;
    }
    /* 
        const reverseProducts = products.reverse();
        console.log(reverseProducts) */


    return (
        <div>
            <h2>Total Products: {products.length}</h2>

            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Price (per unit)</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <ManageProductsRow key={product._id} product={product} index={index} refetch={refetch}></ManageProductsRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;