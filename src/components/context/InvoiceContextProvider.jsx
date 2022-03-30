import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  useEffect
} from 'react'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'
import getInvoiceService from '../../services/invoiceService'

const InvoiceContext = createContext({
  invoiceList: [],
  handleCreateInvoice: () => {},
  getAllInvoices: () => {}
})

export default function InvoiceContextProvider({ children }) {
  const [invoiceList, setInvoice] = useState([])

  const invoiceService = useMemo(() => getInvoiceService(), [])

  const fetchAllInvoices = useCallback(() => {
    invoiceService.getAllInvoice().then(data => {
      setInvoice(data)
    })
  }, [invoiceService])

  useEffect(() => { fetchAllInvoices() }, [fetchAllInvoices])

  const handleCreateInvoice = useCallback(async (
    cartItems,
    cartItemsName,
    itemsQuantity,
    itemPrice,
    cartPrice
  ) => {
    const data = {
      cartItems,
      cartItemsName,
      itemsQuantity,
      itemPrice,
      cartPrice
    }
    try {
      await invoiceService.createInvoice(data)
      toast.success('Factura creada correctamente!')
      fetchAllInvoices()
    } catch (error) {
      toast.error(error.response?.message || error.message)
    }
  }, [invoiceService, fetchAllInvoices])

  const contextValues = useMemo(() => ({
    invoiceList,
    handleCreateInvoice
  }), [
    invoiceList,
    handleCreateInvoice
  ])

  return (
    <InvoiceContext.Provider value={contextValues}>
      {children}
    </InvoiceContext.Provider>
  )
}

InvoiceContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export const useInvoice = () => useContext(InvoiceContext)
