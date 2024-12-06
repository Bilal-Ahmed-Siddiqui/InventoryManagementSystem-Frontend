import React, {useState} from 'react'
import Navbar from "../components/Navbar"
import { useNavigate } from 'react-router-dom';


const CreateCategory = () => {
    const navigator = useNavigate()
    const [formData, setFormData] = useState({
        categoryName: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform the action to add the category, e.g., call an API or update state
        console.log('Category Added:', formData.categoryName);

        // Optionally, clear the form after submission
        setFormData({
            categoryName: '',
        });
    };

    return (
        <div className="flex w-full">
            <Navbar />
            <div className="flex-1 ml-48">
                <div className="mb-5 px-3 flex h-16 items-center justify-between sticky top-0 bg-white z-10 shadow-md">
                    <h1 className="text-2xl font-bold">Create Category</h1>
                    <button
                        className="py-2 px-4 rounded-md border-2 border-[#24cdba] text-[#24cdba] hover:bg-[#24cdba] hover:text-white "
                        onClick={() => { navigator("/categories") }}
                    >
                        back
                    </button>
                </div>

                <div className="mx-3">
                    <div className="max-w-full min-h-screen flex justify-center items-start bg-gray-100 px-8 py-12">
                        <div className="w-full max-w-full p-8 bg-white shadow-lg rounded-md">
                            <h2 className="text-3xl font-semibold text-left mb-12">Add a New Category</h2>
                            <form onSubmit={handleSubmit}>
                                {/* Category Name */}
                                <div className="mb-8">
                                    <label htmlFor="categoryName" className="block text-sm font-medium text-gray-700">
                                        Category Name
                                    </label>
                                    <input
                                        type="text"
                                        id="categoryName"
                                        name="categoryName"
                                        value={formData.categoryName}
                                        onChange={handleChange}
                                        required
                                        className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                {/* Add Category Button */}
                                <button
                                    type="submit"
                                    className="py-2 px-4 w-full rounded-md border-2 border-[#24cdba] text-[#24cdba] hover:bg-[#24cdba] hover:text-white"
                                >
                                    Add Category
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CreateCategory