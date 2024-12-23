import React, { useState, useEffect } from 'react'
import Navbar from "../components/Navbar"
import Order from '../components/Order';
import DeleteModal from '../components/DeleteModal'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Orders = () => {
    const [deleteModal, setDeleteModal] = useState(false)
    const [updateState, setUpdateState] = useState(false)
    const [orders, setOrders] = useState([])

    // const orders = [
    //     {
    //         id: "ORD123",
    //         totalPrice: 59.99,
    //         products: [
    //             { name: "Product A", description: "A great product." },
    //             { name: "Product B", description: "Another great product." },
    //         ],
    //     },
    //     {
    //         id: "ORD124",
    //         totalPrice: 99.99,
    //         products: [
    //             { name: "Product C", description: "A fantastic item." },
    //         ],
    //     },
    //     // More orders...
    // ];
    const deleteMethod = () => {
        console.log("order delete method")
    }
    const navigator = useNavigate()
    const getAllOrders= async()=>{
        axios
        .get("http://localhost:300/order/getall",
        {
            headers: {
                "token": localStorage.getItem("token")
            }
        }
        )
        .then(response => {
            setOrders(response.data);
        })
        .catch(err => {
          console.log("some error occured", err);
        });
    }

    useEffect(() => {
        getAllOrders();
    }, [])
    return (
        <>
            <div className="flex w-full">
                <Navbar />
                <div className="flex-1 ml-48">
                    <div className="mb-5 px-3 flex h-16 items-center justify-between sticky top-0 bg-white z-10 shadow-md">
                        <h1 className="text-2xl font-bold">Orders</h1>
                        <button
                            className="py-2 px-4 rounded-md border-2 border-[#24cdba] text-[#24cdba] hover:bg-[#24cdba] hover:text-white "
                            onClick={()=>{navigator("/orders/create")}}
                        >
                            Create New Order
                        </button>
                    </div>

                    <div className="mx-3">
                        {orders.map((order) => (
                            <div>
                                <Order
                                    key={order.id}
                                    order={order}
                                    setDeleteModal={setDeleteModal}
                                    setUpdateState={setUpdateState}
                                />
                                {deleteModal && <DeleteModal setDeleteModal={setDeleteModal} deleteMethod={deleteMethod} entity="Order" entityName={order.id} />}

                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Orders;
