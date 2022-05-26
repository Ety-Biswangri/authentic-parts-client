import React from 'react';
import { toast } from 'react-toastify';

const AllOrdersDeleteConfirm = ({ confirmDelete, refetch, setConfirmDelete }) => {

    const { _id, orderName } = confirmDelete;

    const handleCancel = id => {
        fetch(`http://localhost:5000/orders/${_id}`, {
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
                    setConfirmDelete(null);
                    refetch();
                }
            })
    }


    return (
        <div>
            <input type="checkbox" id="confirm-delete-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure for cancelling {orderName}</h3>
                    <div class="modal-action">
                        <button class="btn btn-error btn-xs text-white" onClick={() => handleCancel(_id)}>Yes</button>
                        <label for="confirm-delete-modal" class="btn btn-xs text-white">No</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AllOrdersDeleteConfirm;