import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='lg:px-20 px-5'>
            <h2 className='text-center my-6 text-3xl font-bold text-primary underline'>My Portfolio</h2>

            <div className=' mb-16'>
                <div class="card lg:card-side bg-base-100 shadow-md">
                    <div class="card-body">
                        <div className='lg:text-center'>
                            <h2 class="text-2xl font-bold mb-3">Ety Biswangri</h2>
                            <p className='lg:text-xl text-base font-medium mb-2'>Email Address: <span className='text-blue-600 pointer'>ety.biswangri.002@gmail.com</span></p>
                            <p className='lg:text-xl text-base font-medium'>Educational Background: B.Sc. (Hons.) in CSE
                            </p>
                            <div className='mt-8'>
                                <p className='text-xl font-bold lg:mb-2 mb-4'>Technical Skills:</p>
                                <ul>
                                    <li className='text-base font-medium lg:mb-1 mb-3'>
                                        <span className='font-bold'> Comfortable:</span> HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, React.js, Firebase
                                    </li>

                                    <li className='text-base font-medium lg:mb-1 mb-3'>
                                        <span className='font-bold'> Familiar:</span> Node.js, Express.js, MongoDB
                                    </li>

                                    <li className='text-base font-medium'>
                                        <span className='font-bold lg:mb-1 mb-3'>Tools:</span> Github, VS Code, Chrome Dev Tool, Netlify, Heroku, Postman, Figma
                                    </li>
                                </ul>
                            </div>

                            <div className='mt-8'>
                                <p className='text-xl font-bold lg:mb-2 mb-4'>Project Links:</p>
                                <ul>
                                    <li className='text-base font-medium lg:mb-1 mb-3'>
                                        1. <a className='text-blue-600' href="https://fragnance-of-joy.web.app/">Fragnance of Joy</a>
                                    </li>

                                    <li className='text-base font-medium lg:mb-1 mb-3'>
                                        2. <a className='text-blue-600' href="https://financial-pathway.web.app/">Financial Pathway</a>
                                    </li>

                                    <li className='text-base font-medium lg:mb-1 mb-3'>
                                        3. <a className='text-blue-600' href="https://evergreen-nursery.netlify.app/">Evergreen Nursery</a>
                                    </li>

                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;