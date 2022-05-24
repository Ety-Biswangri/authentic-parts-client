import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    if (loading) {
        return <Loading></Loading>;
    }


    if (user) {
        navigate('/');
    }

    return (
        <div className='flex justify-center items-center'>
            <div>
                <div className="divider">OR</div>
                <button className="btn btn-outline" onClick={() => signInWithGoogle()}>Continue with Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;