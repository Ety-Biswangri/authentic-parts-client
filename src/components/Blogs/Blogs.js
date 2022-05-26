import React from 'react';
import code from '../../image/code2.jpeg';
import solution from '../../image/solu.jpeg';

const Blogs = () => {
    return (
        <div className='lg:px-20 px-5'>
            <h2 className='text-center my-6 text-3xl font-bold text-primary underline'>Blogs</h2>

            <div className='mb-16'>
                <div class="card lg:card-side bg-base-100 shadow-md mb-10">
                    <div class="card-body">
                        <div className='text-justify'>
                            <h2 class="lg:text-2xl text-lg font-bold mb-5">1. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>

                            <p className='lg:text-xl lg:mb-2 mb-4'>The answer is given by a JavaScript code below: </p>

                            <img src={code} alt="" />
                            <br />
                            <img src={solution} alt="" />

                        </div>
                    </div>
                </div>

                <div class="card lg:card-side bg-base-100 shadow-md mb-10">
                    <div class="card-body">
                        <div className='text-justify'>
                            <h2 class="text-2xl font-bold mb-3">1 .Ety Biswangri</h2>

                            <p className='text-xl font-bold lg:mb-2 mb-4'>Technical Skills:</p>
                        </div>
                    </div>
                </div>

                <div class="card lg:card-side bg-base-100 shadow-md mb-10">
                    <div class="card-body">
                        <div className='text-justify'>
                            <h2 class="text-2xl font-bold mb-3">1 .Ety Biswangri</h2>

                            <p className='text-xl font-bold lg:mb-2 mb-4'>Technical Skills:</p>
                        </div>
                    </div>
                </div>

                <div class="card lg:card-side bg-base-100 shadow-md mb-10">
                    <div class="card-body">
                        <div className='text-justify'>
                            <h2 class="text-2xl font-bold mb-3">1 .Ety Biswangri</h2>

                            <p className='text-xl font-bold lg:mb-2 mb-4'>Technical Skills:</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Blogs;