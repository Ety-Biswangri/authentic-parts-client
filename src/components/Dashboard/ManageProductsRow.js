import React from 'react';

const ManageProductsRow = ({ product, index, refetch, setConfirmDelete }) => {

    const { _id, image, name, price } = product;

    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-16 rounded">
                    <img src={image} alt="productImage" />
                </div>
            </div></td>
            <td>{name}</td>
            <td>${price}</td>
            <td>
                <label onClick={() => setConfirmDelete(product)} for="confirm-delete-modal" class="btn btn-error btn-xs text-white">Delete</label>
            </td>
        </tr>
    );
};

export default ManageProductsRow;