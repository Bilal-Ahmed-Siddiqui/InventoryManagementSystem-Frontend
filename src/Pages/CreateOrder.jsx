import React, { useState } from 'react'
import Navbar from "../components/Navbar"
import { useNavigate } from 'react-router-dom';

// Sample product and category data
const productData = [
    { id: 1, name: 'Product A', price: 20, img: 'https://via.placeholder.com/50', availableQuantity: 10, categoryId: 1 },
    { id: 2, name: 'Product B', price: 30, img: 'https://via.placeholder.com/50', availableQuantity: 15, categoryId: 2 },
    { id: 3, name: 'Product C', price: 40, img: 'https://via.placeholder.com/50', availableQuantity: 5, categoryId: 1 },
];

const categories = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
];

const CreateOrder = () => {
    const navigator = useNavigate()
    const [formData, setFormData] = useState({
        totalPrice: 0,
        cartItems: [],
    });

    const [selectedItem, setSelectedItem] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleAddItem = () => {
        // Find the selected product by id
        const product = productData.find((item) => item.id === selectedItem);

        // Check if the product was selected and the quantity is valid
        if (product && quantity > 0 && quantity <= product.availableQuantity) {
            const newItem = {
                ...product,
                quantity: quantity,
            };

            // Add the item to the cart
            const updatedCartItems = [...formData.cartItems, newItem];

            // Update total price
            const updatedTotalPrice = updatedCartItems.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0
            );

            // Update state
            setFormData({
                ...formData,
                totalPrice: updatedTotalPrice,
                cartItems: updatedCartItems,
            });

            // Clear selected item and quantity for the next addition
            setSelectedItem('');
            setQuantity(1);
        } else {
            alert('Invalid quantity or no product selected.');
        }
    };

    const handleQuantityChange = (index, delta) => {
        const updatedCartItems = [...formData.cartItems];
        const updatedItem = { ...updatedCartItems[index] };

        // Update quantity
        updatedItem.quantity = Math.max(1, updatedItem.quantity + delta); // Ensure quantity is always at least 1

        // Update the cart item
        updatedCartItems[index] = updatedItem;

        // Recalculate the total price
        const updatedTotalPrice = updatedCartItems.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
        );

        setFormData({
            ...formData,
            totalPrice: updatedTotalPrice,
            cartItems: updatedCartItems,
        });
    };

    return (
        <div className="flex w-full">
            <Navbar />
            <div className="flex-1 ml-48">
                <div className="mb-5 px-3 flex h-16 items-center justify-between sticky top-0 bg-white z-10 shadow-md">
                    <h1 className="text-2xl font-bold">Create Order</h1>
                    <button
                        className="py-2 px-4 rounded-md border-2 border-[#24cdba] text-[#24cdba] hover:bg-[#24cdba] hover:text-white "
                        onClick={() => { navigator("/orders") }}
                    >
                        back
                    </button>
                </div>

                <div className="mx-3">
                    <div className="max-w-full min-h-screen flex justify-center items-start bg-gray-100 px-8 py-12">
                        <div className="w-full max-w-full p-8 bg-white shadow-lg rounded-md">
                            <h2 className="text-3xl font-semibold text-left mb-12">Create a New Order</h2>
                            <form onSubmit={(e) => e.preventDefault()}>

                                {/* Total Price */}
                                <div className="mb-8">
                                    <label htmlFor="totalPrice" className="block text-sm font-medium text-gray-700">
                                        Total Price
                                    </label>
                                    <input
                                        type="text"
                                        id="totalPrice"
                                        name="totalPrice"
                                        value={`$${formData.totalPrice.toFixed(2)}`}
                                        disabled
                                        className="mt-2 p-3 w-full border border-gray-300 rounded-md bg-gray-100"
                                    />
                                </div>

                                {/* Category Dropdown */}
                                <div className="mb-8">
                                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                                        Category
                                    </label>
                                    <select
                                        id="category"
                                        name="category"
                                        value={selectedCategory}
                                        onChange={(e) => setSelectedCategory(parseInt(e.target.value))}
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

                                {/* Add Item */}
                                <div className="mb-8">
                                    <label htmlFor="product" className="block text-sm font-medium text-gray-700">
                                        Add Item
                                    </label>
                                    <select
                                        id="product"
                                        name="product"
                                        value={selectedItem}
                                        onChange={(e) => setSelectedItem(parseInt(e.target.value))}
                                        className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="">Select a product</option>
                                        {productData
                                            .filter((product) => product.categoryId === selectedCategory) // Filter products by selected category
                                            .map((product) => (
                                                <option key={product.id} value={product.id}>
                                                    {product.name}
                                                </option>
                                            ))}
                                    </select>
                                </div>

                                {/* Quantity Control */}
                                <div className="mb-8 flex flex-col items-center space-y-4">
                                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                                        Quantity
                                    </label>
                                    <div className="flex items-center space-x-4">
                                        <button
                                            type="button"
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                            className="px-4 py-2 bg-gray-200 rounded-md"
                                        >
                                            -
                                        </button>
                                        <span className="text-xl">{quantity}</span>
                                        <button
                                            type="button"
                                            onClick={() => setQuantity(Math.min(productData.find((item) => item.id === selectedItem)?.availableQuantity || 1, quantity + 1))}
                                            className="px-4 py-2 bg-gray-200 rounded-md"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <p className="text-sm text-gray-500">
                                        Available: {productData.find((item) => item.id === selectedItem)?.availableQuantity || 0}
                                    </p>
                                </div>

                                {/* Add Item Button */}
                                <button
                                    type="button"
                                    onClick={handleAddItem}
                                    className="py-2 px-4 w-full rounded-md border-2 border-[#24cdba] text-[#24cdba] hover:bg-[#24cdba] hover:text-white"
                                >
                                    Add Item
                                </button>

                                {/* Cart Items List */}
                                <div className="mt-12">
                                    {formData.cartItems.length > 0 && (
                                        <h3 className="text-xl font-semibold text-left mb-6">Cart</h3>
                                    )}
                                    {formData.cartItems.map((item, index) => (
                                        <div key={index} className="flex items-center mb-6">
                                            <img src={item.img} alt={item.name} className="w-12 h-12 mr-4" />
                                            <div className="flex-1">
                                                <p className="font-medium text-gray-700">{item.name}</p>
                                                <p className="text-gray-500">Price: ${item.price}</p>
                                                <p className="text-gray-500">Available: {item.availableQuantity}</p>
                                            </div>
                                            <div className="flex items-center space-x-4">
                                                <button
                                                    type="button"
                                                    onClick={() => handleQuantityChange(index, -1)}
                                                    className="px-4 py-2 bg-gray-200 rounded-md"
                                                >
                                                    -
                                                </button>
                                                <span className="px-4">{item.quantity}</span>
                                                <button
                                                    type="button"
                                                    onClick={() => handleQuantityChange(index, 1)}
                                                    className="px-4 py-2 bg-gray-200 rounded-md"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateOrder;
