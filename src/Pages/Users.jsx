import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import User from "../components/User";
import DeleteModal from "../components/DeleteModal";
import axios from "axios";
const Users = () => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [users, setUser] = useState([]);
  const deleteMethod = () => {
    console.log("order delete method");
  };
  const navigator = useNavigate();
  // const users = [
  //     {
  //       _id: '1',
  //       username: 'john_doe',
  //       createdAt: '2023-01-15T08:00:00Z',
  //       role: 'Admin',
  //     },
  //     {
  //       _id: '2',
  //       username: 'jane_smith',
  //       createdAt: '2023-02-25T10:00:00Z',
  //       role: 'Editor',
  //     },
  //     {
  //       _id: '3',
  //       username: 'mike_jones',
  //       createdAt: '2023-03-10T14:30:00Z',
  //       role: 'Viewer',
  //     },
  //   ];

  const getAllUsers = async () => {
    axios
      .get("http://localhost:300/user/getall", {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => {
        console.log("some error occured", err);
      });
  };

  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <div className="flex w-full">
      <Navbar />
      <div className="flex-1 ml-48">
        <div className="mb-5 px-3 flex h-16 items-center justify-between sticky top-0 bg-white z-10 shadow-md">
          <h1 className="text-2xl font-bold">Users</h1>
          <button
            className="py-2 px-4 rounded-md border-2 border-[#24cdba] text-[#24cdba] hover:bg-[#24cdba] hover:text-white "
            onClick={() => {
              navigator("/users/create");
            }}
          >
            Create New User
          </button>
        </div>

        <div className="mx-3">
          {users.map((user) => (
            <div>
              <User key={user.id} user={user} setDeleteModal={setDeleteModal} />
              {deleteModal && (
                <DeleteModal
                  setDeleteModal={setDeleteModal}
                  deleteMethod={deleteMethod}
                  entity="User"
                  entityName={user.id}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
