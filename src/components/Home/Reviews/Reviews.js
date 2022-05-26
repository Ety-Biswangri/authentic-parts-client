import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import Review from './Review';

const Reviews = () => {

    const { data: feedbacks, isLoading, error } = useQuery('feedbacks', () => fetch('https://intense-river-93900.herokuapp.com/review').then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <div className='my-10 lg:mt-0 lg:px-20'>
            <h2 className='text-center lg:text-3xl text-2xl font-bold lg:mb-10 sm:mb-5 uppercase text-primary'>What our customers say</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    feedbacks.map(feedback => <Review key={feedback._id} feedback={feedback}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;