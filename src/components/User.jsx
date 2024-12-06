import React from 'react'
import { useNavigate } from 'react-router-dom';

const User = ({ user, setUpdateModal, setDeleteModal }) => {
  const { _id, username, createdAt, role } = user;
  const navigator = useNavigate()

  return (
    <div className="border rounded-lg shadow-md p-4 flex flex-col sm:flex-row justify-between items-center mb-4 w-full">
      {/* User Details */}
      <div className="flex-1">
        <h2 className="text-lg font-bold mb-2">{username}</h2>
        <p className="text-gray-600 mb-1">User ID: {_id}</p>
        <p className="text-gray-600 mb-1">Role: {role}</p>
        <p className="text-gray-500 text-sm">Created At: {new Date(createdAt).toLocaleDateString()}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col space-y-2 mt-4 sm:mt-0">
        <button
          onClick={() =>navigator("/users/update/:id")}
          className="py-1 px-4 rounded-md border-2 border-[#24cdba] text-[#24cdba] hover:bg-[#24cdba] hover:text-white"
        >
          Update
        </button>
        <button
          onClick={() => setDeleteModal(true)}
          className="py-1 px-4 rounded-md border-2 border-[#24cdba] text-[#24cdba] hover:bg-[#24cdba] hover:text-white"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default User;
