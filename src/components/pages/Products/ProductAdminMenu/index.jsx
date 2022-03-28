import { ProductContextProvider } from '../context/ProductContext'
import ProductForm from './ProductForm'
import ProductAdminList from './ProductAdminList'
import Navbar from '../../../../layout/Navbar'

export default function Contacts() {
  return (
    <section className="bg-gray-900">
      <Navbar />
      <div className="flex">
        <ProductContextProvider>
          <ProductForm />
          <ProductAdminList />
        </ProductContextProvider>
      </div>
    </section>
  )
}
