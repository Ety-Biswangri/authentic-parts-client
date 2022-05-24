import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const Purchase = () => {

    const { id } = useParams();

    const [user, loading, error] = useAuthState(auth);

    const url = `http://localhost:5000/parts/${id}`;

    const { data: order, isLoading } = useQuery(['purchase', id], () => fetch(url, {
        method: 'GET',
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>;
    }

    // console.log(order);
    // console.log(user);

    return (
        <div>
            <h2>Purchase:{order._id}</h2>
        </div>
    );
};

export default Purchase;