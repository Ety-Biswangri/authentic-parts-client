import React from 'react';
import code from '../../image/code2.jpeg';
import solution from '../../image/solu.jpeg';

const Blogs = () => {
    return (
        <div className='lg:px-20 px-5'>
            <h2 className='text-center my-6 text-3xl font-bold text-primary underline'>Blogs</h2>

            <div className='mb-16'>
                <div class="card lg:card-side bg-base-100 shadow-md mb-10">
                    <div class="card-body">
                        <div className='text-justify'>
                            <h2 class="lg:text-2xl text-lg font-bold mb-5">1. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>

                            <p className='lg:text-xl lg:mb-2 mb-4'>The answer is given by a JavaScript code below: </p>

                            <img src={code} alt="" />
                            <br />
                            <img src={solution} alt="" />

                        </div>
                    </div>
                </div>

                <div class="card lg:card-side bg-base-100 shadow-md mb-10">
                    <div class="card-body">
                        <div className='text-justify'>
                            <h2 class="lg:text-2xl text-lg font-bold mb-5">2. What are the different ways to manage a state in a React application?</h2>

                            <p className='lg:text-xl lg:mb-2 mb-4'>The Four basic ways to manage a state in a React Applications are: 1. Local, 2. Global, 3. Server and 4. URL</p>

                            <p className='lg:text-xl lg:mb-2 mb-4'>1. Data that we handle in one or more components is referred to as local state. (for example, using useState hook to manage local state)</p>

                            <p className='lg:text-xl lg:mb-2 mb-4'>2.Data that we handle across several components is referred to as global state. (for example, Context API)</p>

                            <p className='lg:text-xl lg:mb-2 mb-4'>3. Data from an external server that has to be integrated with our existing UI state. (for example, React Query to manage server state)</p>

                            <p className='lg:text-xl lg:mb-2 mb-4'>4. Data found on our URLs, such as pathnames and query parameters. (for example, useParams hook)</p>
                        </div>
                    </div>
                </div>

                <div class="card lg:card-side bg-base-100 shadow-md mb-10">
                    <div class="card-body">
                        <div className='text-justify'>
                            <h2 class="lg:text-2xl text-lg font-bold mb-5">3. What is a unit test? Why should write unit tests?</h2>

                            <p className='lg:text-xl lg:mb-2 mb-4'>Unit testing is a type of software testing that tests individual units or components of software.</p>

                            <p className='lg:text-xl lg:mb-2 mb-4'>Importance of unit tests:</p>

                            <p className='lg:text-xl lg:mb-2 mb-4'>Unit test assists developers in analyzing the testing code base and allowing them to make rapid adjustments. Unit tests that are well-written serve as project documentation. Unit tests save time and money by catching bugs early in the development cycle. It reduces code complexity</p>
                        </div>
                    </div>
                </div>

                <div class="card lg:card-side bg-base-100 shadow-md mb-10">
                    <div class="card-body">
                        <div className='text-justify'>
                            <h2 class="lg:text-2xl text-lg font-bold mb-5">4. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts

                            </h2>

                            <p className='lg:text-xl lg:mb-2 mb-4'>All of React's virtual DOM is kept track of. Every time something changes, all of the components are rendered, and the new virtual DOM is compared to the old virtual DOM. Only the differences identified in the original DOM are represented. So, if we set the state directly in React, it will also alter the reference of the state in the prior virtual DOM. As a result, React will be unable to detect a state change, and the change will not be reflected in the original DOM until we reload. That's why we do not set the state directly in React.</p>
                        </div>
                    </div>
                </div>

                <div class="card lg:card-side bg-base-100 shadow-md mb-10">
                    <div class="card-body">
                        <div className='text-justify'>
                            <h2 class="lg:text-2xl text-lg font-bold mb-5">5. How will you improve the performance of a React Application?</h2>

                            <p className='lg:text-xl lg:mb-2 mb-4'>Some of the ways of improving the performance of a React Application are given below: </p>
                            <p className='lg:text-xl lg:mb-2 mb-4'>1. By keeping component state local where necessary</p>
                            <p className='lg:text-xl lg:mb-2 mb-4'>2. By dependency optimization</p>
                            <p className='lg:text-xl lg:mb-2 mb-4'>3. By using immutable data structures</p>
                            <p className='lg:text-xl lg:mb-2 mb-4'>4. By avoiding anonymous functions</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Blogs;