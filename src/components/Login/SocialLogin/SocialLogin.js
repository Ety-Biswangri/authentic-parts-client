import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location?.state?.from?.pathname || '/';

    /*   if (loading) {
          return <Loading></Loading>;
      } */

    let errorMessage;

    if (error) {
        errorMessage = <p className='text-red-500 text-center'><small>{error?.message}</small></p>
    }


    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            {errorMessage}
            <div className='flex justify-center items-center'>
                <div>
                    <div className="divider">OR</div>
                    <button className="btn btn-outline" onClick={() => signInWithGoogle()}>Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;