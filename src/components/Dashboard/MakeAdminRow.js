import React from 'react';
import { toast } from 'react-toastify';

const MakeAdminRow = ({ index, user, refetch }) => {

    const makeAdmin = () => {
        fetch(`https://intense-river-93900.herokuapp.com/user/admin/${user.email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Opps! Fails to make an admin');
                }
                return res.json();
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Wow! Made an admin successfully');
                }
            })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td> {
                user.role !== 'admin' &&
                <button onClick={makeAdmin} class="btn btn-secondary btn-xs text-white">Make Admin</button>} </td>
        </tr>
    );
};

export default MakeAdminRow;