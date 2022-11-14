import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L2AOlBGnILmJWNqUax7Moj620Q1wn8I02yKg1i9VM1kkAbLJGukem0aY3X3QhKY1jBe9eJYaGyvIpSnhBio1KWK00FlXtkN2R');

const Payment = () => {

    const { id } = useParams();

    const url = `https://authentic-parts.onrender.com/order/${id}`;

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>;
    }

    // console.log(order)

    const { customerName, orderName, orderPrice, orderQuantity, } = order;

    return (
        <div class="hero min-h-max my-10">
            <div>
                <div class="hero-content flex-col">
                    <div class="card max-w-sm bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 class="text-center text-xl text-blue-500 font-bold">Hi! {customerName}</h2>
                            <h2 class="text-center text-2xl font-bold text-secondary">Your Payment Details for {orderName}</h2>
                            <div class="card-actions justify-center">
                                <p class="pt-6 lg:text-justify text-xl ">
                                    <span className='font-bold'>Your total ordered quantity: {orderQuantity} </span>
                                </p>
                                <p class="pt-1 lg:text-justify text-xl ">
                                    <span className='font-bold'>Please pay: ${orderPrice} </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card max-w- bg-base-100 shadow-xl">
                    <div class="card-body">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm order={order} />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;