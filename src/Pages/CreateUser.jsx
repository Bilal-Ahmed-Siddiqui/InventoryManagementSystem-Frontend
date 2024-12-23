import React, { useState } from 'react';
import Navbar from "../components/Navbar"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateUser = () => {
    const navigator = useNavigate()
    // State to store form data
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    // State to toggle password visibility
    const [showPassword, setShowPassword] = useState(false);

    // Handle change in input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleCreateUser = (e) => {
        e.preventDefault();

        axios
        .post("http://localhost:300/user/signup", formData,{
          headers: {
            token: localStorage.getItem("token"),
          },
        })
        .then((response) => {
            console.log("user added successfully", response);
            navigator("/users")
        })
        .catch((err) => {
          console.log("some error occured", err);
        });

        // Optionally, clear the form after submission
        setFormData({
            name: '',
        });
    };
    return (
        <div className="flex w-full">
            <Navbar />
            <div className="flex-1 ml-48">
                <div className="mb-5 px-3 flex h-16 items-center justify-between sticky top-0 bg-white z-10 shadow-md">
                    <h1 className="text-2xl font-bold">Create User</h1>
                    <button
                        className="py-2 px-4 rounded-md border-2 border-[#24cdba] text-[#24cdba] hover:bg-[#24cdba] hover:text-white "
                        onClick={() => { navigator("/users") }}
                    >
                        back
                    </button>
                </div>

                <div className="mx-3">
                    <div className="max-w-full min-h-screen flex justify-center items-start bg-gray-100 px-8 py-12">
                        <div className="w-full max-w-full p-8 bg-white shadow-lg rounded-md">
                            <h2 className="text-3xl font-semibold text-left mb-12">Add a New User</h2>
                            <form onSubmit={handleCreateUser}>
                                {/* Username */}
                                <div className="mb-8">
                                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        id="username"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        required
                                        className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                {/* Email */}
                                <div className="mb-8">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                {/* Password */}
                                <div className="mb-8 relative">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                        className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
                                    >
                                        {/* FontAwesome Icons for Eye and Eye Off */}
                                        {showPassword ? (
                                            <i className="fas fa-eye-slash"></i>
                                        ) : (
                                            <i className="fas fa-eye"></i>
                                        )}
                                    </button>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="py-2 px-4 w-full rounded-md border-2 border-[#24cdba] text-[#24cdba] hover:bg-[#24cdba] hover:text-white "
                                >
                                    Register
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateUser