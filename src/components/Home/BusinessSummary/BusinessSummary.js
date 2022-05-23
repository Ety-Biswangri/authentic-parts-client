import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='mt-20 mb-10 '>
            <h2 className='uppercase text-center mb-2 text-3xl font-bold'>Millions Business Trust Us</h2>
            <p className='uppercase mb-10 text-center'>Try to understantd users expectation</p>

            <div className='flex justify-center items-center bg-secondary lg:h-40 h-96'>
                <div class="stats stats-vertical lg:stats-horizontal shadow">

                    <div class="stat">
                        <div class="stat-figure text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <div class="stat-value text-primary">50</div>
                        <div class="stat-title font-semibold">Countries</div>
                    </div>

                    <div class="stat">
                        <div class="stat-figure text-secondary">
                            <div class="avatar online">
                                <div class="w-16 rounded-full">
                                    <img src="https://api.lorem.space/image/face?w=128&h=128" />
                                </div>
                            </div>
                        </div>
                        <div class="stat-value text-secondary">550</div>
                        <div class="stat-title font-semibold">Completed Tasks</div>
                    </div>

                    <div class="stat">
                        <div class="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div class="stat-value text-secondary">300</div>
                        <div class="stat-title font-semibold">Happy Customers</div>
                    </div>

                    <div class="stat">
                        <div class="stat-figure text-secondary">
                            <div class="avatar online">
                                <div class="w-16 rounded-full">
                                    <img src="https://api.lorem.space/image/face?w=128&h=128" />
                                </div>
                            </div>
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