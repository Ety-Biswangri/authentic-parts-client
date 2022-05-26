import React from 'react';
import { toast } from 'react-toastify';

const MyOrdersDeleteConfirm = ({ OrderConfirmDelete, setOrderConfirmDelete, refetch }) => {

    // console.log(OrderConfirmDelete);
    const { _id, orderName } = OrderConfirmDelete;

    const handleDelete = id => {
        fetch(`https://intense-river-93900.herokuapp.com/order/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.deletedCount) {
                    toast(`${orderName} is deleted successfully`);
                    setOrderConfirmDelete(null);
                    refetch();
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="confirm-delete-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure for deleting {orderName}</h3>
                    <div class="modal-action">
                        <button class="btn btn-error btn-xs text-white" onClick={() => handleDelete(_id)}>Delete</button>
                        <label for="confirm-delete-modal" class="btn btn-xs text-white">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default MyOrdersDeleteConfirm;