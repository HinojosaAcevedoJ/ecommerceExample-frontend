import 'react-toastify/dist/ReactToastify.css'

import { ToastContainer } from 'react-toastify'
import CartContextProvider from './components/context/cartContextProvider'
import { ProductContextProvider } from './components/pages/Products/context/ProductContext'
import Router from './Router'
import { AuthContextProvider } from './components/context/AuthContextProvider'

function App() {
  return (
    <>
      <AuthContextProvider>
        <ProductContextProvider>
          <CartContextProvider>
            <Router />
          </CartContextProvider>
        </ProductContextProvider>
      </AuthContextProvider>
      <ToastContainer />
    </>
  )
}

export default App
