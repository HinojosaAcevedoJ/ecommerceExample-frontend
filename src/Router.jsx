import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'
import NotFound from './components/pages/NotFound'
import ShoppingCart from './components/pages/ShoppingCart/ShoppingCart'
import Home from './components/pages/Home'
import Navbar from './layout/Navbar'
import Login from './components/pages/Login'
import SignUp from './components/pages/SignUp'
import ProductAdmin from './components/pages/Products/ProductAdminMenu'
import SideBar from './layout/SideBar'
import DashboardLayout from './layout'
import ProductDetail from './components/pages/Products/ProductDetail'
import CategoryPage from './components/pages/Categories/CategoryPage'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/nav" element={<Navbar />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/cart" element={<ShoppingCart />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/productadmin" element={<ProductAdmin />} />
        <Route path="*" element={<NotFound />} />
        <Route exact path="/sidebar" element={<SideBar />} />
        <Route exact path="/dashboard" element={<DashboardLayout />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/category/:category" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  )
}
