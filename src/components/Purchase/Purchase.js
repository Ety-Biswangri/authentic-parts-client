import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const Purchase = () => {

    const { id } = useParams();

    const [user, loading, error] = useAuthState(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const url = `http://localhost:5000/parts/${id}`;

    const { data: order, isLoading } = useQuery(['purchase', id], () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>;
    }

    const onSubmit = async (formData) => {
        console.log(formData)
    };

    console.log(order);
    // console.log(user);

    const { name, image, description, minOrderQuantity, availableQuantiy, price } = order;

    return (
        <div className='lg:px-20'>
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
                            <span className='font-bold'>Price:</span>  ${price}
                        </p>
                        {/* <button class="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>

            <div className='mt-16 mb-14'>
                <h2 className='text-center mb-5 font-semibold text-3xl'>Purchase Here</h2>
                <div className="flex justify-center w-full">
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>

                                {/* name input field */}
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Your name"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("name", {
                                            required: {
                                                value: true,
                                                message: 'Name is required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                    </label>
                                </div>

                                {/* email input field */}
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>

                                    <input
                                        type="email"
                                        placeholder="Your email"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: 'Email is required'
                                            },
                                            pattern: {
                                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                message: 'Provide a valid email'
                                            }
                                        })}
                                    />

                                    <label className="label">
                                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    </label>
                                </div>

                                {/* password input field */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message: 'Password is required'
                                            },
                                            minLength: {
                                                value: 6,
                                                message: 'Must be 6 characters or longer'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    </label>
                                </div>

                                <input className='btn w-full max-w-xs text-white' type="submit" value="Complete Purchase" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;