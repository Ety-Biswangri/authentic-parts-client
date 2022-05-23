import React from 'react';
import bannerImage from '../../../image/banner.jpg';

const Banner = () => {
    return (
        <div class="hero min-h-screen lg:px-20">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={bannerImage} class="lg:max-w-sm sm:max-w-xs rounded-lg shadow-2xl" alt='bannerImage' />
                <div>
                    <h1 class="text-3xl lg:text-5xl font-bold">The Leader In Micro Oven Manufacturing</h1>
                    <p class="py-6">Authentic Parts has been manufacturing micro ovens for over 10 years. The experienced manufacturing team at Authentic Parts is able to meet the strict standards.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;