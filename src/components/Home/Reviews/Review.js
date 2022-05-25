import React from 'react';

const Review = ({ feedback }) => {

    const { review, ratings, customerName } = feedback;

    return (
        <div class="card lg:max-w-sm sm:max-w-xs bg-base-100 shadow-xl m-3 lg:m-0">
            <div class="card-body items-center text-center">
                <p className='text-center mb-3 text-primary'>{review}</p>
                <span className=' text-base'> {customerName} </span>
                <hr className='w-10 h-1 bg-gray-500'></hr>
                <p class="font-bold mb-3">Rating: {ratings} out of 5</p>
            </div>
        </div >
    );
};

export default Review;