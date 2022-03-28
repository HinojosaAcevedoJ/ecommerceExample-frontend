import { ToastContainer } from 'react-toastify'
import Cart from '../../common/cart'
import DashboardLayout from '../../../layout'

export default function ShoppingCart() {
  return (
    <>
      <DashboardLayout>
        <Cart />
      </DashboardLayout>
      <ToastContainer />
    </>
  )
}
