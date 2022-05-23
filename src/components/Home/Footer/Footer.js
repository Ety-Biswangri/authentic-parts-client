import React from 'react';

const Footer = () => {
    return (
        <div className='flex justify-center items-center h-36 bg-accent mt-10 text-white 2xl:max-w-7xl mx-auto'>
            <div className='text-center'>
                <p>All rights reserved &copy; {new Date().getFullYear()}</p>
                <p><small>Visit Me on</small></p>
            </div>
        </div>
    );
};

export default Footer;