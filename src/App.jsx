import 'react-toastify/dist/ReactToastify.css'

import { ToastContainer } from 'react-toastify'
import CartContextProvider from './components/context/CartContextProvider'
import { ProductContextProvider } from './components/pages/Products/context/ProductContext'
import Router from './Router'
import { AuthContextProvider } from './components/context/AuthContextProvider'
import InvoiceContextProvider from './components/context/InvoiceContextProvider'

function App() {
  return (
    <>
      <AuthContextProvider>
        <ProductContextProvider>
          <InvoiceContextProvider>
            <CartContextProvider>
              <Router />
            </CartContextProvider>
          </InvoiceContextProvider>
        </ProductContextProvider>
      </AuthContextProvider>
      <ToastContainer />
    </>
  )
}

export default App
