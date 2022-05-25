import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        fetch(`https://intense-river-93900.herokuapp.com/parts`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast('Product Added Successfully');
                reset();
            })
    };

    return (
        <div>
            <h2 className='text-secondary text-xl text-center mb-3 mt-6'>Add a new product</h2>


            <div className="flex justify-center w-full my-10 mb-14">
                <div class="card flex-shrink-0 w-full max-w-sm lg:max-w-lg shadow-2xl bg-base-100">
                    <div class="card-body ">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>

                                <input
                                    type="text"
                                    placeholder="Product name"
                                    className="input input-bordered w-full max-w-xs lg:max-w-md"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is required'
                                        },
                                    })}
                                />

                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image Link</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="URL"
                                    className="input input-bordered w-full max-w-xs lg:max-w-md"
                                    {...register("image", {
                                        required: {
                                            value: true,
                                            message: 'Image is required'
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Product Description"
                                    className="input input-bordered w-full max-w-xs lg:max-w-md"
                                    {...register("description", {
                                        required: {
                                            value: true,
                                            message: 'Description is required'
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Minimum Order Quantity</span>
                                </label>
                                <input
                                    type="number"
                                    min='0'
                                    placeholder="Product Description"
                                    className="input input-bordered w-full max-w-xs lg:max-w-md"
                                    {...register("minOrderQuantity", {
                                        required: {
                                            value: true,
                                            message: 'Minimum Order Quantity is required'
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.minOrderQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minOrderQuantity.message}</span>}
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available Quantity</span>
                                </label>
                                <input
                                    type="number"
                                    min='0'
                                    placeholder="Available Quantity"
                                    className="input input-bordered w-full max-w-xs lg:max-w-md"
                                    {...register("availableQuantiy", {
                                        required: {
                                            value: true,
                                            message: 'Image is required'
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.availableQuantiy?.type === 'required' && <span className="label-text-alt text-red-500">{errors.availableQuantiy.message}</span>}
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price (per unit)</span>
                                </label>
                                <input
                                    type="number"
                                    min='0'
                                    placeholder="price"
                                    className="input input-bordered w-full max-w-xs lg:max-w-md"
                                    {...register("price", {
                                        required: {
                                            value: true,
                                            message: 'Price is required'
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
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

export default AddProduct;