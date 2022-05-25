import React from 'react';
import { toast } from 'react-toastify';

const ManageProductsRow = ({ product, index, refetch }) => {

    const { _id, image, name, price } = product;

    const handleDelete = id => {
        fetch(`http://localhost:5000/parts/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast(`${name} is deleted successfully`);
                    refetch();
                }
            })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-16 rounded">
                    <img src={image} alt="productImage" />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{price}</td>
            <td> <button class="btn btn-error btn-xs text-white" onClick={() => handleDelete(_id)}>Delete</button></td>
        </tr>
    );
};

export default ManageProductsRow;