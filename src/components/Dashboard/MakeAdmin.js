import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import MakeAdminRow from './MakeAdminRow';

const MakeAdmin = () => {

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://intense-river-93900.herokuapp.com/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-secondary text-xl text-center mb-3 mt-6'>Make a new Admin</h2>

            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users && users?.map((user, index) => <MakeAdminRow key={user._id} index={index} user={user} refetch={refetch}></MakeAdminRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;