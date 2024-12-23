import React, { useState, useEffect } from 'react'
import Navbar from "../components/Navbar"
import { useNavigate } from 'react-router-dom';
import Product from '../components/Product';
import DeleteModal from '../components/DeleteModal'
import axios from 'axios';
const Products = () => {
  const [deleteModal, setDeleteModal] = useState(false)
  const [products, setProducts] = useState([])
  const deleteMethod = () => {
    console.log("order delete method")
}
// const products = [
//   {
//     _id: 'P001',
//     name: 'Product A',
//     price: 49.99,
//     quantityInStock: 100,
//     category: 'Category A',
//     image: 'https://via.placeholder.com/150',
//     inStock: true
//   },
//   {
//     _id: 'P002',
//     name: 'Product B',
//     price: 29.99,
//     quantityInStock: 50,
//     category: 'Category B',
//     image: 'https://via.placeholder.com/150',
//     inStock: false
//   },
//   // More products...
// ];
const navigator = useNavigate()
const getAllProducts= async()=>{
  axios
  .get("http://localhost:300/product/getall",
  {
      headers: {
          "token": localStorage.getItem("token")
      }
  }
  )
  .then(response => {
    setProducts(response.data);
  })
  .catch(err => {
    console.log("some error occured", err);
  });
}

useEffect(() => {
  getAllProducts();
}, [])
  return (
    <>
      <div className="flex w-full">
        <Navbar />
        <div className="flex-1 ml-48">
          <div className="mb-5 px-3 flex h-16 items-center justify-between sticky top-0 bg-white z-10 shadow-md">
            <h1 className="text-2xl font-bold">Products</h1>
            <button
              className="py-2 px-4 rounded-md border-2 border-[#24cdba] text-[#24cdba] hover:bg-[#24cdba] hover:text-white "
              onClick={()=>{navigator("/products/create")}}
            >
              Create New Product
            </button>
          </div>


          <div className="mx-3">
                        {products.map((product) => (
                            <div>
                                <Product
                                    key={product._id}
                                    product={product}
                                    setDeleteModal={setDeleteModal}
                                />
                                {deleteModal && <DeleteModal setDeleteModal={setDeleteModal} deleteMethod={deleteMethod} entity="Product" entityName={product._id} />}

                            </div>
                        ))}
                    </div>
        </div>
      </div>

    </>

  )
}

export default Products