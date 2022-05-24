import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';
import Loading from '../../Shared/Loading/Loading';

const RequireAdmin = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    const navigate = useNavigate();

    if (loading || adminLoading) {
        return <Loading></Loading>;
    }

    if (!user || !admin) {
        signOut(auth);
        return navigate('/dashboard');;
    }

    return children;
};

export default RequireAdmin;