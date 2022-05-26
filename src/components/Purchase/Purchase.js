import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const Purchase = () => {

    const { id } = useParams();

    const [user, loading, error] = useAuthState(auth);

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const [agree, setAgree] = useState(false);

    const url = `https://intense-river-93900.herokuapp.com/parts/${id}`;

    const { data: product, isLoading } = useQuery(['purchase', id], () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>;
    }

    const { _id, name, image, description, minOrderQuantity, availableQuantiy, price } = product;

    const onSubmit = async (formData) => {
        console.log(formData);
        const orderPrice = parseInt(price * formData.quantity);

        const order = {
            orderId: _id,
            orderName: name,
            orderPrice: orderPrice,
            customerEmail: user.email,
            customerName: user.displayName,
            orderQuantity: formData.quantity,
            customerAddress: formData.address,
            customerPhone: formData.phone
        }

        console.log(order);

        fetch('https://intense-river-93900.herokuapp.com/order', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast(`Your purchase order for ${name} is placed`);
                reset();
            })
    };


    return (
        <div className='lg:px-28'>
            <div class="hero min-h-max my-10">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={image} alt="productImage" class="max-w-xs lg:max-w-sm rounded-lg shadow-2xl" />
                    <div className='lg:ml-14'>
                        <h1 class="text-3xl font-bold">{name}</h1>
                        <p class="pt-6 text-justify">
                            <span className='font-bold'>Description:</span> {description}
                        </p>
                        <p class="py-2">
                            <span className='font-bold'>Minimum Order Quantity:</span> {minOrderQuantity}
                        </p>
                        <p class="">
                            <span className='font-bold'>Available Quantity:</span> {availableQuantiy}
                        </p>
                        <p class="py-2">
                            <span className='font-bold'>Price (per unit): </span>  ${price}
                        </p>
                        {/* <button class="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>

            <div className='mt-16 mb-14'>
                <h2 className='text-center mb-5 font-semibold text-3xl'>Purchase Order</h2>

                <div className="flex justify-center w-full my-10 mb-14">
                    <div class="card flex-shrink-0 w-full max-w-sm lg:max-w-2xl shadow-2xl bg-base-100">
                        <div class="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>

                                {/* name input field */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Your name"
                                        className="input input-bordered w-full max-w-xs lg:max-w-2xl"
                                        {...register("name")}
                                        value={user?.displayName}
                                        readOnly
                                    />
                                </div>

                                {/* email input field */}
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>

                                    <input
                                        type="email"
                                        placeholder="Your email"
                                        className="input input-bordered w-full max-w-xs lg:max-w-2xl"
                                        {...register("email")}
                                        value={user?.email}
                                        readOnly
                                    />
                                </div>

                                {/* address input field */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Address"
                                        className="input input-bordered w-full max-w-xs lg:max-w-2xl"
                                        {...register("address", {
                                            required: {
                                                value: true,
                                                message: 'Address is required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                                    </label>
                                </div>

                                {/* phone input field */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone Number</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Phone Number"
                                        className="input input-bordered w-full max-w-xs lg:max-w-2xl"
                                        {...register("phone", {
                                            required: {
                                                value: true,
                                                message: 'Phone Number is required'
                                            },
                                            minLength: {
                                                value: 11,
                                                message: 'Must be 11 characters or longer'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                                        {errors.phone?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                                    </label>
                                </div>

                                {/* Order quantity input field */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Order Quantity</span>
                                    </label>
                                    <input
                                        type="number"
                                        defaultValue={minOrderQuantity}
                                        className="input input-bordered w-full max-w-xs lg:max-w-2xl"
                                        {...register("quantity", {
                                            required: {
                                                value: true,
                                                message: 'Order Quantity is required'
                                            },
                                            min: {
                                                value: minOrderQuantity,
                                                message: `You can not purchase less than ${minOrderQuantity} quantity`
                                            },
                                            max: {
                                                value: availableQuantiy,
                                                message: `You can not purchase more than ${availableQuantiy} quantity`
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                                        {errors.quantity?.type === 'min' || errors.quantity?.type === 'max' ?
                                            <div className='flex flex-col items-center justify-center'>
                                                <div>
                                                    <span className="label-text-alt text-red-500">{errors.quantity.message}</span>
                                                    <input disabled className='btn w-full max-w-xs text-white' type="submit" value="Purchase" />
                                                </div>
                                            </div> :
                                            <input className='btn w-full max-w-xs lg:max-w-2xl text-white' type="submit" value="Purchase" />
                                        }
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;