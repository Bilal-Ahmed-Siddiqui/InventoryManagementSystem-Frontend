import React from 'react'
import LoginImage from "../assets/LoginImage.png"

const Login = () => {
  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 bg-gray-200 flex items-center justify-center">
        <img src={LoginImage} alt="Placeholder Image" className="object-cover h-full w-full p-12" />
      </div>

      <div className="w-1/2 flex items-center justify-center">
        <div className="w-3/4 max-w-md">
          <h1 className="text-3xl font-bold mb-6">Login</h1>
          <form className="space-y-4">
            <div>
              <label for="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label for="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-[#01e1c6]  py-2 px-4 rounded-md hover:bg-[#24cdba] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Login