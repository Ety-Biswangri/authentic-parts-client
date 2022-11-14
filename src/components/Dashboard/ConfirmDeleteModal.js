import React from 'react';
import { toast } from 'react-toastify';

const ConfirmDeleteModal = ({ confirmDelete, refetch, setConfirmDelete }) => {

    const { _id, name } = confirmDelete;

    const handleDelete = id => {
        fetch(`https://authentic-parts.onrender.com/parts/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.deletedCount) {
                    toast(`${name} is deleted successfully`);
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
                    <h3 class="font-bold text-lg text-red-500">Are you sure for deleting {confirmDelete.name}</h3>
                    <div class="modal-action">
                        <button class="btn btn-error btn-xs text-white" onClick={() => handleDelete(_id)}>Delete</button>
                        <label for="confirm-delete-modal" class="btn btn-xs text-white">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ConfirmDeleteModal;