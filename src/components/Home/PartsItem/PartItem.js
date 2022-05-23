import React from 'react';

const PartItem = ({ part }) => {

    const { name, image, description, minOrderQuantity, availableQuantiy, price } = part;

    return (
        <div class="card lg:max-w-sm sm:max-w-xs bg-base-100 shadow-xl m-3 lg:m-0">
            <figure class="px-10 pt-10">
                <img src={image} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div >
    );
};

export default PartItem;