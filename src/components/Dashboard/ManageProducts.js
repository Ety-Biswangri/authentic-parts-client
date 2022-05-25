import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';

const ManageProducts = () => {

    const { data: products, isLoading, error } = useQuery('products', () => fetch('http://localhost:5000/parts').then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <div>
            <h2>Total Products: {products.length}</h2>
        </div>
    );
};

export default ManageProducts;