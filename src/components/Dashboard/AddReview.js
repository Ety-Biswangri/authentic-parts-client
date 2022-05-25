import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddReview = () => {

    const [user, loading, error] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        const review = {
            review: data.review,
            ratings: data.ratings,
            customerEmail: user.email,
            customerName: user.displayName
        }

        fetch(`http://localhost:5000/review`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast('Review Added Successfully');
                reset();
            })
    };

    return (
        <div className='mt-10'>
            <h2 className='text-secondary text-xl text-center mb-3'>Give your feedback</h2>

            <div className="flex justify-center w-full my-10 mb-14">
                <div class="card flex-shrink-0 w-full max-w-sm lg:max-w-lg shadow-2xl bg-base-100">
                    <div class="card-body ">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Ratings</span>
                                </label>
                                <input
                                    type="number"
                                    min='1'
                                    max='5'
                                    placeholder="Ratings"
                                    className="input input-bordered w-full max-w-xs lg:max-w-md"
                                    {...register("ratings", {
                                        required: {
                                            value: true,
                                            message: 'Ratings Quantity is required'
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.ratings?.type === 'required' && <span className="label-text-alt text-red-500">{errors.ratings.message}</span>}
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Review</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Review"
                                    className="input input-bordered w-full max-w-xs lg:max-w-md"
                                    {...register("review", {
                                        required: {
                                            value: true,
                                            message: 'Review is required'
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.review?.type === 'required' && <span className="label-text-alt text-red-500">{errors.review.message}</span>}
                                </label>
                            </div>

                            <input className='btn w-full max-w-xs lg:max-w-md text-white' type="submit" value="Add Product" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;