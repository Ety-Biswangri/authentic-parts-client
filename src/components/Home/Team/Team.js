import React from 'react';
import { FaTwitter } from 'react-icons/fa';
import { GrLinkedin, GrFacebook } from 'react-icons/gr';

const Team = () => {
    return (
        <div className='my-10 lg:mt-20 lg:px-20'>
            <h2 className='text-center lg:text-3xl text-2xl font-bold lg:mb-10 sm:mb-5 uppercase text-primary'>Meet Our Team</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                <div class="card lg:max-w-sm sm:max-w-xs bg-base-100 shadow-xl m-3 lg:m-0">
                    <div class="card-body items-center text-center">
                        <div class="avatar">
                            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://raw.githubusercontent.com/Ety-Biswangri/images/main/person3.jpg" alt='' />
                            </div>
                        </div>
                        <p className='text-center text-primary mt-3 font-bold'>Wilma Alles</p>
                        <p className=' text-base font-semibold'> Team Leader </p>
                        <p class="flex my-3">
                            <GrFacebook className='mx-3'></GrFacebook>
                            <FaTwitter className='mx-1'></FaTwitter>
                            <GrLinkedin className='mx-3'></GrLinkedin>
                        </p>
                    </div>
                </div>

                <div class="card lg:max-w-sm sm:max-w-xs bg-base-100 shadow-xl m-3 lg:m-0">
                    <div class="card-body items-center text-center">
                        <div class="avatar">
                            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://raw.githubusercontent.com/Ety-Biswangri/images/main/person2.jpg" alt='' />
                            </div>
                        </div>
                        <p className='text-center text-primary mt-3 font-bold'>John Smith</p>
                        <p className=' text-base font-semibold'> Manufacturing Spcialist </p>
                        <p class="flex my-3">
                            <GrFacebook className='mx-3'></GrFacebook>
                            <FaTwitter className='mx-1'></FaTwitter>
                            <GrLinkedin className='mx-3'></GrLinkedin>
                        </p>
                    </div>
                </div>

                <div class="card lg:max-w-sm sm:max-w-xs bg-base-100 shadow-xl m-3 lg:m-0">
                    <div class="card-body items-center text-center">
                        <div class="avatar">
                            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://raw.githubusercontent.com/Ety-Biswangri/images/main/person4.jpg" alt='' />
                            </div>
                        </div>
                        <p className='text-center text-primary mt-3 font-bold'>Elena Kanza</p>
                        <p className=' text-base font-semibold'> Production Associate </p>
                        <p class="flex my-3">
                            <GrFacebook className='mx-3'></GrFacebook>
                            <FaTwitter className='mx-1'></FaTwitter>
                            <GrLinkedin className='mx-3'></GrLinkedin>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;