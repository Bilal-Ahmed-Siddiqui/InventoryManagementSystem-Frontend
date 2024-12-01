import React from 'react'
import Navbar from "../components/Navbar"
import Order from '../components/Order';
const Orders = () => {
    const orders = [
        {
            id: "ORD123",
            totalPrice: 59.99,
            products: [
                { name: "Product A", description: "A great product." },
                { name: "Product B", description: "Another great product." },
            ],
        },
        {
            id: "ORD124",
            totalPrice: 99.99,
            products: [
                { name: "Product C", description: "A fantastic item." },
            ],
        },
        {
            id: "ORD123",
            totalPrice: 59.99,
            products: [
                { name: "Product A", description: "A great product." },
                { name: "Product B", description: "Another great product." },
            ],
        },
        {
            id: "ORD124",
            totalPrice: 99.99,
            products: [
                { name: "Product C", description: "A fantastic item." },
            ],
        },
        {
            id: "ORD123",
            totalPrice: 59.99,
            products: [
                { name: "Product A", description: "A great product." },
                { name: "Product B", description: "Another great product." },
            ],
        },
        {
            id: "ORD124",
            totalPrice: 99.99,
            products: [
                { name: "Product C", description: "A fantastic item." },
            ],
        },
        {
            id: "ORD123",
            totalPrice: 59.99,
            products: [
                { name: "Product A", description: "A great product." },
                { name: "Product B", description: "Another great product." },
            ],
        },
        {
            id: "ORD124",
            totalPrice: 99.99,
            products: [
                { name: "Product C", description: "A fantastic item." },
            ],
        },
    ];
    return (
        <div className="flex w-full">
            <Navbar />
            <div className="flex-1 ml-48">
                <div className="mb-5 px-3 flex h-16 items-center justify-between sticky top-0 bg-white z-10 shadow-md">
                    <h1 className="text-2xl font-bold">Orders</h1>
                    <button
                        className="py-2 px-4 rounded-md border-2 border-[#24cdba] text-[#24cdba] hover:bg-[#24cdba] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#24cdba]"
                    >
                        Create New Order
                    </button>
                </div>


                <div className="mx-3">
                    {orders.map((order) => (
                        <Order
                            key={order.id}
                            order={order}
                        />
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Orders