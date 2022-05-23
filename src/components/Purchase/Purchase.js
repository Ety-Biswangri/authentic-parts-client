import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';

const Purchase = () => {

    const { id } = useParams();

    const url = `http://localhost:5000/parts/${id}`;

    const { data: order, isLoading } = useQuery(['purchase', id], () => fetch(url, {
        method: 'GET',
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>;
    }

    console.log(order);

    return (
        <div>
            <h2>Purchase:{order._id}</h2>
        </div>
    );
};

export default Purchase;