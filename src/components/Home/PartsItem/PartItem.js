import React from 'react';
import { Link } from 'react-router-dom';

const PartItem = ({ part }) => {

    const { _id, name, image, description, minOrderQuantity, availableQuantiy, price } = part;

    return (
        <div class="card lg:max-w-sm sm:max-w-xs bg-base-100 shadow-xl m-3 lg:m-0">
            <figure class="px-10 pt-10">
                <img src={image} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title font-bold mb-3">{name}</h2>

                <p className='text-justify mb-3'>{description}</p>

                <p>
                    <span className='font-bold text-base'> Minimum Order Quantity: </span> <span> {minOrderQuantity} </span>
                </p>

                <p>
                    <span className='font-bold'> Available Quantity: </span>
                    <span> {availableQuantiy} </span>
                </p>

                <p>
                    <span className='font-bold'> Price (per unit): </span>
                    <span className='text-lg'> ${price} </span>
                </p>

                <div class="card-actions mt-2">
                    <Link to={`/purchase/${_id}`}><button class="btn btn-primary text-white">Purchase</button></Link>
                </div>
            </div>
        </div >
    );
};

export default PartItem;