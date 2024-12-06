import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import { useNavigate } from 'react-router-dom';

// Sample category data for the dropdown
const categories = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
];

const CreateProduct = () => {
    const navigator = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        quantity: 0,
        categoryId: '',
        image: null,
        inStock: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            image: e.target.files[0],
        }));
    };

    const handleQuantityChange = (e) => {
        const quantity = parseInt(e.target.value);
        setFormData((prevState) => ({
            ...prevState,
            quantity,
            inStock: quantity > 0, // Update inStock based on quantity
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Product added:', formData);
    };

    return (
        <div className="flex w-full">
            <Navbar />
            <div className="flex-1 ml-48">
                <div className="mb-5 px-3 flex h-16 items-center justify-between sticky top-0 bg-white z-10 shadow-md">
                    <h1 className="text-2xl font-bold">Add Product</h1>
                    <button
                        className="py-2 px-4 rounded-md border-2 border-[#24cdba] text-[#24cdba] hover:bg-[#24cdba] hover:text-white"
                        onClick={() => { navigator("/products") }}
                    >
                        back
                    </button>
                </div>

                <div className="mx-3">
                    <div className="max-w-full min-h-screen flex justify-center items-start bg-gray-100 px-8 py-12">
                        <div className="w-full max-w-full p-8 bg-white shadow-lg rounded-md">
                            <h2 className="text-3xl font-semibold text-left mb-12">Add a New Product</h2>
                            <form onSubmit={handleSubmit}>

                                {/* Product Name and Category (Row layout) */}
                                <div className="mb-8 flex space-x-4">
                                    <div className="w-1/2">
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                            Product Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div className="w-1/2">
                                        <label htmlFor="categoryId" className="block text-sm font-medium text-gray-700">
                                            Category
                                        </label>
                                        <select
                                            id="categoryId"
                                            name="categoryId"
                                            value={formData.categoryId}
                                            onChange={handleChange}
                                            required
                                            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="">Select a category</option>
                                            {categories.map((category) => (
                                                <option key={category.id} value={category.id}>
                                                    {category.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Price and Quantity (Row layout) */}
                                <div className="mb-8 flex space-x-4">
                                    <div className="w-1/2">
                                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                            Price
                                        </label>
                                        <input
                                            type="number"
                                            id="price"
                                            name="price"
                                            value={formData.price}
                                            onChange={handleChange}
                                            required
                                            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div className="w-1/2">
                                        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                                            Quantity
                                        </label>
                                        <input
                                            type="number"
                                            id="quantity"
                                            name="quantity"
                                            value={formData.quantity}
                                            onChange={handleQuantityChange}
                                            required
                                            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                </div>

                                {/* In Stock Checkbox */}
                                <div className="mb-8 flex items-center space-x-4">
                                    <label htmlFor="inStock" className="block text-sm font-medium text-gray-700">
                                        In Stock
                                    </label>
                                    <input
                                        type="checkbox"
                                        id="inStock"
                                        name="inStock"
                                        checked={formData.quantity > 0} // Checkbox is checked if quantity is greater than 0
                                        disabled // Disables the checkbox, making it read-only
                                        className="h-5 w-5 text-green-500 rounded-md border-gray-300"
                                    />
                                </div>

                                {/* Product Image Upload */}
                                <div className="mb-8">
                                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                                        Product Image
                                    </label>
                                    <input
                                        type="file"
                                        id="image"
                                        name="image"
                                        onChange={handleFileChange}
                                        required
                                        className="mt-2 p-3 w-full border border-gray-300 rounded-md"
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="py-2 px-4 w-full rounded-md border-2 border-[#24cdba] text-[#24cdba] hover:bg-[#24cdba] hover:text-white"
                                >
                                    Add Product
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateProduct;
