import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../../../image/banner.jpg';

const Banner = () => {
    return (
        <div class="hero min-h-screen lg:px-20">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={bannerImage} class="lg:max-w-sm sm:max-w-xs rounded-lg shadow-2xl" alt='bannerImage' />
                <div>
                    <h1 class="text-3xl lg:text-5xl font-bold text-primary">The Leader In Microwave Oven Manufacturing</h1>
                    <p class="py-6">Authentic Parts has been manufacturing microwave ovens for over 10 years. The experienced manufacturing team at Authentic Parts is able to meet the strict standards.</p>
                    <a href="#quote"> <button class="btn btn-primary text-white">Request a quote</button></a>
                </div>
            </div>
        </div>
    );
};

export default Banner;