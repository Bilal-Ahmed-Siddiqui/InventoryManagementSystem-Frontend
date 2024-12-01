import { BrowserRouter, Routes, Route } from "react-router-dom"
import Products from "./Pages/Products"
import Orders from "./Pages/Orders"
import Users from "./Pages/Users"
import Categories from "./Pages/Categories"
import NotFound from "./Pages/NotFound"
import Login from "./Pages/Login"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Orders />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
