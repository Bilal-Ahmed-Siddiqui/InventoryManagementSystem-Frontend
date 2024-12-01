import React from 'react'

const Order = ({ order, onDelete, onUpdate }) => {
  const { id, totalPrice, products } = order;
  const firstProduct = products[0];
  return (
    <div className="border rounded-lg shadow-md p-4 flex flex-col sm:flex-row justify-between items-center mb-4 w-full">
      {/* Order Details */}
      <div className="flex-1">
        <h2 className="text-lg font-bold mb-2">Order ID: {id}</h2>
        <p className="text-gray-600 mb-1">Total Price: ${totalPrice.toFixed(2)}</p>
        {firstProduct && (
          <p className="text-gray-500 text-sm">
            First Product: <span className="font-semibold">{firstProduct.name}</span> - {firstProduct.description}
          </p>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col space-y-2 mt-4 sm:mt-0">
        <button
          onClick={() => onUpdate(id)}
          className="py-1 px-4 rounded-md border-2 border-[#24cdba] text-[#24cdba] hover:bg-[#24cdba] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#24cdba]"
        >
          Update
        </button>
        <button
          onClick={() => onDelete(id)}
          className="py-1 px-4 rounded-md border-2 border-[#24cdba] text-[#24cdba] hover:bg-[#24cdba] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#24cdba]"
        >
          Delete
        </button>
      </div>
    </div>

  )
}

export default Order