import React from 'react';
import notFound from '../../image/notFound.jpg';

const NotFound = () => {
    return (
        <div className='mt-10'>
            <div className='max-w-lg flex justify-center mx-auto items-center'>
                <img src={notFound} alt="" />
            </div>
        </div>
    );
};

export default NotFound;