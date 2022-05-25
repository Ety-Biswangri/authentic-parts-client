import React from 'react';
import { MdTask } from 'react-icons/md';
import { BiHappy } from 'react-icons/bi';
import { MdOutlineRateReview } from 'react-icons/md';
import { BsFillFlagFill } from 'react-icons/bs';

const BusinessSummary = () => {
    return (
        <div className='mt-24 mb-20'>
            <h2 className='uppercase text-center mb-2 text-3xl font-bold text-primary'>Efficiency you need, Quality you trust</h2>
            <h2 className='uppercase mb-6 text-center'>Our professional team works to increase productivity</h2>

            <div className='flex justify-center items-center bg-secondary lg:h-40 h-96 rounded-xl'>
                <div class="stats stats-vertical lg:stats-horizontal shadow">

                    <div class="stat">
                        <div class="stat-figure text-primary">
                            <BsFillFlagFill className='text-4xl'></BsFillFlagFill>
                        </div>
                        <div class="stat-value text-secondary">50</div>
                        <div class="stat-title font-semibold">Countries</div>
                    </div>

                    <div class="stat">
                        <div class="stat-figure text-primary">
                            <MdTask className='text-4xl'></MdTask>
                        </div>
                        <div class="stat-value text-secondary">550</div>
                        <div class="stat-title font-semibold">Completed Tasks</div>
                    </div>

                    <div class="stat">
                        <div class="stat-figure text-primary">
                            <BiHappy className='text-4xl'></BiHappy>
                        </div>
                        <div class="stat-value text-secondary">300</div>
                        <div class="stat-title font-semibold">Happy Customers</div>
                    </div>

                    <div class="stat">
                        <div class="stat-figure text-primary">
                            <MdOutlineRateReview className='text-4xl'></MdOutlineRateReview>
                        </div>
                        <div class="stat-value text-secondary">450</div>
                        <div class="stat-title font-semibold">Reviews</div>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default BusinessSummary;