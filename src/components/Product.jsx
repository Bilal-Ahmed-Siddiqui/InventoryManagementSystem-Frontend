import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product, setUpdateModal, setDeleteModal }) => {
  const { _id, name, price, quantityInStock, category, image, inStock } = product;
  const navigator = useNavigate()

  return (
    <div className="border rounded-lg shadow-md p-4 flex items-center justify-between mb-4 w-full">
      {/* Product Details */}
      <div className="flex items-center space-x-4 flex-1">
        {/* Image */}
        <img
          src={image || 'https://via.placeholder.com/150'} // Use a placeholder image if no image is provided
          alt={name}
          className="w-24 h-24 object-cover rounded-md"
        />

        {/* Text Information */}
        <div>
          <h2 className="text-lg font-bold mb-2">{name}</h2>
          <p className="text-gray-600 mb-1">Product ID: {_id}</p>
          <p className="text-gray-600 mb-1">Category: {category}</p>
          <p className="text-gray-600 mb-1">Price: ${price}</p>
          <p className="text-gray-600 mb-1">In Stock: {inStock ? <span>True</span> : <span>False</span>}</p>
         {inStock &&  <p className="text-gray-600 mb-1">Quantity: {quantityInStock}</p>}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col space-y-2 mt-4 sm:mt-0">
        <button
          onClick={() => navigator("/products/update/:id")}
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
  );
};

export default Product;
