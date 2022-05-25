import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { async } from '@firebase/util';

const CheckoutForm = ({ order }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    const { customerName, customerEmail, orderPrice } = order;
    // console.log(order)

    useEffect(() => {
        fetch(`http://localhost:5000/create-payment-intent`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ orderPrice })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            })
    }, [orderPrice]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);


        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        setCardError(error?.message || '');
        setSuccess('');

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: customerName,
                        email: customerEmail
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError?.message);
            setSuccess("");
        }
        else {
            setCardError('');
            setTransactionId(paymentIntent.id);
            setSuccess("Congrats");
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-primary btn-sm mt-5' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                success && <div className='text-blue-500 font-bold'>
                    <p>{success}</p>
                    <p><small>Your Transaction Id: <span className='text-orange-500 font-bold'>{transactionId}</span></small></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;