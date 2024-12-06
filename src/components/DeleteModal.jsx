import React from 'react';

const DeleteModal = ({
    setDeleteModal,
    deleteMethod,
    entity,
    entityName,
}) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-700">Confirm Deletion</h2>
                    <button
                        onClick={() => setDeleteModal(false)}
                        className="text-gray-600 hover:text-gray-800"
                    >
                        <i className="fa fa-times text-xl" />
                    </button>
                </div>
                <p className="text-gray-700 text-center mt-6">
                    Are you sure you want to delete this <span>{entity}</span>?
                </p>
                <p className="my-6 text-center font-bold">
                    {entityName}
                </p>

                <div className="mt-6 flex justify-center gap-6">
                    <button
                        onClick={() => setDeleteModal(false)}
                        className="py-1 px-4 rounded-md border-2 border-[#24cdba] text-[#24cdba] hover:bg-[#24cdba] hover:text-white "
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => {
                            deleteMethod();
                            setDeleteModal(false);
                        }}
                        className="py-1 px-4 rounded-md border-2  bg-[#24cdba]  text-white "
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;
