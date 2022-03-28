import { ToastContainer } from 'react-toastify'
import Products from '../Products'
import DashboardLayout from '../../../layout'

export default function Home() {
  return (
    <>
      <DashboardLayout>
        <Products />
      </DashboardLayout>
      <ToastContainer />
    </>
  )
}
