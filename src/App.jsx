import { BrowserRouter, Routes, Route } from "react-router-dom"
import Products from "./Pages/Products"
import UpdateProduct from "./Pages/UpdateProduct"
import Orders from "./Pages/Orders"
import Users from "./Pages/Users"
import Categories from "./Pages/Categories"
import NotFound from "./Pages/NotFound"
import Login from "./Pages/Login"
import CreateProduct from "./Pages/CreateProduct"
import UpdateOrder from "./Pages/UpdateOrder"
import CreateOrder from "./Pages/CreateOrder"
import UpdateCategory from "./Pages/UpdateCategory"
import CreateCategory from "./Pages/CreateCategory"
import UpdateUser from "./Pages/UpdateUser"
import CreateUser from "./Pages/CreateUser"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Orders />} />
        <Route path="/login" element={<Login />} />

        <Route path="/products" element={<Products />} />
        <Route path="/products/update/:id" element={<UpdateProduct />} />
        <Route path="/products/create" element={<CreateProduct />} />

        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/update/:id" element={<UpdateOrder />} />
        <Route path="/orders/create" element={<CreateOrder />} />

        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/update/:id" element={<UpdateCategory />} />
        <Route path="/categories/create" element={<CreateCategory />} />

        <Route path="/users" element={<Users />} />
        <Route path="/users/update/:id" element={<UpdateUser />} />
        <Route path="/users/create" element={<CreateUser />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
