import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import PartItem from './PartItem';

const PartsItem = () => {

    const { data: parts, isLoading, error } = useQuery('parts', () => fetch('https://authentic-parts.onrender.com/parts').then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>;
    }


    const slicedParts = parts.slice(0, 6);

    /* 
    const reverseSlicedParts = slicedParts.reverse(); */

    // console.log(reverseSlicedParts);

    return (
        <div className='my-10 lg:mt-0 lg:px-20'>
            <h2 className='text-center lg:text-3xl text-2xl font-bold lg:mb-10 sm:mb-5 uppercase text-primary'>Microwave Oven Parts</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    slicedParts.map(slicedPart => <PartItem key={slicedPart._id} part={slicedPart}></PartItem>)
                }
            </div>
        </div>
    );
};

export default PartsItem;