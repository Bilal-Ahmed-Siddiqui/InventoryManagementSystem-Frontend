import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Category from "../components/Category";
import { useNavigate } from "react-router-dom";
import DeleteModal from "../components/DeleteModal";
import axios from "axios";

const Categories = () => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [categories, setCategories] = useState([]);
  const deleteMethod = () => {
    console.log("order delete method");
  };
  const navigator = useNavigate();
  // const categories = [
  //     { _id: 'C001', name: 'Electronics' },
  //     { _id: 'C002', name: 'Clothing' },
  //     { _id: 'C003', name: 'Home & Kitchen' },
  //   ];

  const getAllCategories = async () => {
    axios
      .get("http://localhost:300/category/getall", {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setCategories(response.data);
      })
      .catch((err) => {
        console.log("some error occured", err);
      });
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <>
      <div className="flex w-full">
        <Navbar />
        <div className="flex-1 ml-48">
          <div className="mb-5 px-3 flex h-16 items-center justify-between sticky top-0 bg-white z-10 shadow-md">
            <h1 className="text-2xl font-bold">Categories</h1>
            <button
              className="py-2 px-4 rounded-md border-2 border-[#24cdba] text-[#24cdba] hover:bg-[#24cdba] hover:text-white "
              onClick={() => {
                navigator("/categories/create");
              }}
            >
              Create New category
            </button>
          </div>

          <div className="mx-3">
            {categories.map((category) => (
              <div>
                <Category
                  key={category._id}
                  category={category}
                  setDeleteModal={setDeleteModal}
                />
                {deleteModal && (
                  <DeleteModal
                    setDeleteModal={setDeleteModal}
                    deleteMethod={deleteMethod}
                    entity="Category"
                    entityName={category._id}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
