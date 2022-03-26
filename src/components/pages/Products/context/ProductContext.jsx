import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  useEffect
} from 'react'
import { toast } from 'react-toastify'
import { isEmpty } from 'ramda'
import PropTypes from 'prop-types'
import getProductService from '../../../../services/productService'

const ProductContext = createContext({
  productList: [],
  updatingProduct: {},
  isUpdating: false,
  handleUpdateProduct: () => {},
  handleCancelUpdate: () => {},
  handleSelectProductForUpdate: () => {},
  handleCreateProduct: () => {},
  handleRemoveProduct: () => {}
})

export function ProductContextProvider({ children }) {
  const [productList, setProductList] = useState([])

  const [updatingProduct, setUpdatingProduct] = useState({})

  const productService = useMemo(() => getProductService(), [])

  const fetchAll = useCallback(() => {
    productService.getAll().then(data => {
      setProductList(data)
    })
  }, [productService])

  useEffect(() => { fetchAll() }, [fetchAll])

  const handleCreateProduct = useCallback(async product => {
    try {
      await productService.create(product)
      fetchAll()
      toast.success('Producto agregado correctamente!')
    } catch (error) {
      toast.error(error.response?.message || error.message)
    }
  }, [productService, fetchAll])

  const handleSelectProductForUpdate = useCallback(item => {
    setUpdatingProduct(item)
  }, [])

  const handleCancelUpdate = useCallback(() => {
    setUpdatingProduct({})
  }, [])

  const handleUpdateProduct = useCallback(async values => {
    try {
      await productService.update(values, values._id)
      setUpdatingProduct({})
      fetchAll()
      toast.success('Se ha actualizado correctamente el producto')
    } catch (error) {
      toast.error(error.response?.message || error.message)
    }
  }, [productService, fetchAll])

  const handleRemoveProduct = useCallback(async id => {
    try {
      await productService.remove(id)
      fetchAll()
      toast.success('Se ha elimiado correctamente el producto')
    } catch (error) {
      toast.error(error.response?.message || error.message)
    }
  }, [productService, fetchAll])

  const contextValues = useMemo(() => ({
    productList,
    updatingProduct,
    handleCreateProduct,
    isUpdating: !isEmpty(updatingProduct),
    handleSelectProductForUpdate,
    handleCancelUpdate,
    handleUpdateProduct,
    handleRemoveProduct
  }), [
    productList,
    updatingProduct,
    handleCreateProduct,
    handleSelectProductForUpdate,
    handleCancelUpdate,
    handleUpdateProduct,
    handleRemoveProduct
  ])

  return (
    <ProductContext.Provider value={contextValues}>
      {children}
    </ProductContext.Provider>
  )
}

ProductContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export const useProducts = () => useContext(ProductContext)
