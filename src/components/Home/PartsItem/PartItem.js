import React from 'react';

const PartItem = ({ part }) => {

    const { name, image, description, minOrderQuantity, availableQuantiy, price } = part;

    return (
        <div class="card lg:max-w-sm sm:max-w-xs bg-base-100 shadow-xl m-3 lg:m-0">
            <figure class="px-10 pt-10">
                <img src={image} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel molestias officiis, sapiente omnis saepe laboriosam libero, qui, officia quas reiciendis quam hic. Odit consequuntur amet deserunt et unde id corporis!</p>
                <p>Minimum Order Quantity: {minOrderQuantity}</p>
                <p>Available Quantity: {availableQuantiy}</p>
                <p>Price (per unit): ${price}</p>
                <div class="card-actions">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div >
    );
};

export default PartItem;