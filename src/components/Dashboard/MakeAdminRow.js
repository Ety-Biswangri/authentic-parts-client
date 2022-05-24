import React from 'react';

const MakeAdminRow = ({ index, user, refetch }) => {

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${user.email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td><button onClick={makeAdmin} class="btn btn-secondary btn-xs text-white">Make Admin</button></td>
        </tr>
    );
};

export default MakeAdminRow;