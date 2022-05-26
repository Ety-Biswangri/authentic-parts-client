import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [isReload, setIsReload] = useState(false);
    const [myProfile, setMyProfile] = useState({});
    const [user, loading] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        // console.log(data);

        const profile = {
            email: user.email,
            education: data.education,
            location: data.location,
            PhoneNo: data.phone,
            linkedin: data.linkedin,
            blogsite: data.blogsite
        }

        const url = `http://localhost:5000/profile/${user?.email}`;

        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                reset();
                toast('Profile Updated');
                setIsReload(!isReload);
            })
    }

    useEffect(() => {
        fetch(`http://localhost:5000/profile/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyProfile(data));
    }, [user.email, isReload]);



    return (
        <div>
            <h2 className='text-secondary text-xl text-center mb-6 mt-6 underline font-semibold'>My Profile</h2>

            <div class="hero">
                <div class="hero-content grid grid-cols-1 lg:grid-cols-2">


                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body text-lg">
                            <h2><span className='font-bold text-primary'>Name:</span> {user.displayName}</h2>

                            <p><span className='font-bold text-primary'>Email Address:</span> {user.email}</p>

                            <p><span className='font-bold text-primary'>Education:</span> {myProfile.education}</p>

                            <p><span className='font-bold text-primary'>Location:</span> {myProfile.location}</p>

                            <p><span className='font-bold text-primary'>Phone No:</span> {myProfile.PhoneNo}</p>

                            <p><span className='font-bold text-primary'>LinkedIn Profile Link:</span> <span className='text-blue-700'> <a href={myProfile.linkedin}> {myProfile.linkedin}</a></span>
                            </p>

                            <p><span className='font-bold text-primary'>Blog Site Link:</span> <span className='text-blue-700'> <a href={myProfile.blogsite}> {myProfile.blogsite}</a></span></p>
                        </div>
                    </div>

                    <div class="card flex-shrink-0 w-full max-w-sm lg:max-w-md shadow-2xl bg-base-100">
                        <div class="card-body ">
                            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={user.displayName} readOnly
                                        className="input input-bordered w-full max-w-xs lg:max-w-sm h-10"
                                        {...register("name")}
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        value={user.email} readOnly
                                        className="input input-bordered w-full max-w-xs lg:max-w-sm h-10"
                                        {...register("email")}
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Education</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Education"
                                        className="input input-bordered w-full max-w-xs lg:max-w-sm h-10"
                                        {...register("education", {
                                            required: {
                                                value: true,
                                                message: 'Education is required'
                                            },
                                        })}
                                    />
                                    <label className="label">
                                        {errors.education?.type === 'required' && <span className="label-text-alt text-red-500">{errors.education.message}</span>}
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Location</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Location"
                                        className="input input-bordered w-full max-w-xs lg:max-w-sm h-10"
                                        {...register("location", {
                                            required: {
                                                value: true,
                                                message: 'Location is required'
                                            },
                                        })}
                                    />
                                    <label className="label">
                                        {errors.location?.type === 'required' && <span className="label-text-alt text-red-500">{errors.location.message}</span>}
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone Number</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Phone Number"
                                        className="input input-bordered w-full max-w-xs lg:max-w-sm h-10"
                                        {...register("phone", {
                                            required: {
                                                value: true,
                                                message: 'Phone Number is required'
                                            },
                                        })}
                                    />
                                    <label className="label">
                                        {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">LinkedIn Profile Link</span>
                                    </label>
                                    <input
                                        type="url"
                                        placeholder="https://yourprofile.com"
                                        className="input input-bordered w-full max-w-xs lg:max-w-sm h-10"
                                        {...register("linkedin", {
                                            required: {
                                                value: true,
                                                message: 'LinkedIn Profile Link is required'
                                            },
                                        })}
                                    />
                                    <label className="label">
                                        {errors.linkedin?.type === 'required' && <span className="label-text-alt text-red-500">{errors.linkedin.message}</span>}
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Blog Site Link</span>
                                    </label>
                                    <input
                                        type="url"
                                        placeholder="https://yourblog.com"
                                        className="input input-bordered w-full max-w-xs lg:max-w-sm mb-5 h-10"
                                        {...register("blogsite")}
                                    />
                                </div>

                                <input className='btn w-full lg:mt-8 max-w-xs lg:max-w-sm h-5 text-white' type="submit" value="Update" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;