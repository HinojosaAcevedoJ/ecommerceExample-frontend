import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'
import NotFound from './components/pages/NotFound'
import ShoppingCart from './components/pages/ShoppingCart/ShoppingCart'
import Home from './components/pages/Home'
import Navbar from './components/Navbar'
import Login from './components/pages/Login'
import SignUp from './components/pages/SignUp'
import ProductAdmin from './components/pages/Products/ProductAdminMenu'

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
      </Routes>
    </BrowserRouter>
  )
}
