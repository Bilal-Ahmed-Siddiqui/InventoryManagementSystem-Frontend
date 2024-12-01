import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="fixed h-screen w-48 bg-[#3df8e2] flex flex-col overflow-hidden">
      {/* Logo/Brand */}
      <div className="flex items-center justify-center h-16 bg-[#24cdba]">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1">
        <ul className="mt-4 space-y-4 mx-2">
          <li>
            <Link
              to="/orders"
              className="flex items-center px-4 py-2 hover:bg-[#24cdba] rounded-md"
            >
              <i className="fas fa-shopping-cart mr-3"></i>
              <span className="w-full text-center">Orders</span>
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="flex items-center px-4 py-2 hover:bg-[#24cdba] rounded-md"
            >
              <i className="fas fa-box mr-3"></i>
              <span className="w-full text-center">Products</span>
            </Link>
          </li>
          <li>
            <Link
              to="/categories"
              className="flex items-center px-4 py-2 hover:bg-[#24cdba] rounded-md"
            >
              <i className="fas fa-tags mr-3"></i>
              <span className="w-full text-center">Categories</span>
            </Link>
          </li>
          <li>
            <Link
              to="/users"
              className="flex items-center px-4 py-2 hover:bg-[#24cdba] rounded-md"
            >
              <i className="fas fa-user mr-3"></i>
              <span className="w-full text-center">Users</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Footer */}
      <div className="h-16 flex items-center justify-center bg-[#24cdba]">
        <button className="text-sm">
          <i className="fas fa-sign-out-alt mr-2"></i>
          Logout
        </button>
      </div>
    </div>

  )
}

export default Navbar