import React from 'react';
import { Link } from 'react-router-dom';

const ManageOrdersRow = ({ order, index, refetch }) => {

    const { _id, customerName, orderName, orderQuantity, orderPrice } = order;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{customerName}</td>
            <td>{orderName}</td>
            <td>{orderQuantity}</td>
            <td>${orderPrice}</td>
            <td>
                {
                    order.paid && <span className='text-success text-green-700'>Paid</span>
                }
                {
                    !order.paid && <span className='text-red-800'>Unpaid</span>
                }
            </td>
            <td>
                {
                    !order.paid &&
                    <button class="btn btn-error btn-xs text-white ml-3">Cancel</button>
                }
                {
                    order.paid && <span className='text-green-700'>Shipped</span>
                }
            </td>
        </tr>
    );
};

export default ManageOrdersRow;