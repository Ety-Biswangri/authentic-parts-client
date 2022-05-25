import React from 'react';
import { toast } from 'react-toastify';

const RequestQute = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        toast('Request Sent Successfully');
        event.target.reset();
    }

    return (
        <div id='quote'>
            <h2 className='text-center lg:text-3xl text-2xl font-bold lg:mb-10 sm:mb-5 uppercase text-primary mt-20'>Request a quote</h2>

            <div className="flex justify-center w-full my-10 mb-14">
                <div class="card flex-shrink-0 w-full max-w-xs lg:max-w-lg shadow-2xl bg-base-100">
                    <div class="card-body">
                        <form onSubmit={handleSubmit}>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text font-semibold">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="Name" class="input input-bordered" required />
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text font-semibold">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="Email" class="input input-bordered" required />
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text font-semibold">Business (if applicable)</span>
                                </label>
                                <input name='business' type="text" placeholder="Business" class="input input-bordered" />
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text font-semibold">Your Location</span>
                                </label>
                                <input name='location' type="text" placeholder="Your Location" class="input input-bordered" required />
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text font-semibold">Request</span>
                                </label>
                                <textarea name='request' type="text" placeholder="Request" class="input input-bordered" required />
                            </div>

                            <div class="form-control mt-6">
                                <button class="btn btn-primary text-white" type="submit" value="Request"> Request </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RequestQute;