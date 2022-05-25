import React from 'react';

const ManageProductsRow = ({ product, index }) => {

    const { image, name, price } = product;

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
            <td> <button class="btn btn-error btn-xs text-white">Delete</button></td>
        </tr>
    );
};

export default ManageProductsRow;