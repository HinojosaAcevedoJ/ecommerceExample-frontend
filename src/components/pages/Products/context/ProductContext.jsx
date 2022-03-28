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
  categoryList: [],
  updatingProduct: {},
  isUpdating: false,
  handleUpdateProduct: () => {},
  handleCancelUpdate: () => {},
  handleSelectProductForUpdate: () => {},
  handleCreateProduct: () => {},
  handleRemoveProduct: () => {},
  fetchByCategory: () => {},
  getAllCategories: () => {}
})

export function ProductContextProvider({ children }) {
  const [productList, setProductList] = useState([])

  const [categoryList, setCategoryList] = useState([])

  const [updatingProduct, setUpdatingProduct] = useState({})

  const productService = useMemo(() => getProductService(), [])

  const fetchAll = useCallback(() => {
    productService.getAll().then(data => {
      setProductList(data)
    })
  }, [productService])

  useEffect(() => { fetchAll() }, [fetchAll])

  const fetchByCategory = useCallback(category => {
    productService.getByCategory(category).then(data => {
      setCategoryList(data)
    })
  }, [productService])

  const getAllCategories = useCallback(() => {
    productService.getCategories().then(data => {
      setCategoryList(data)
    })
  }, [productService])

  useEffect(() => { getAllCategories() }, [getAllCategories])

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
    categoryList,
    updatingProduct,
    handleCreateProduct,
    isUpdating: !isEmpty(updatingProduct),
    handleSelectProductForUpdate,
    handleCancelUpdate,
    handleUpdateProduct,
    handleRemoveProduct,
    fetchByCategory,
    getAllCategories
  }), [
    productList,
    categoryList,
    updatingProduct,
    handleCreateProduct,
    handleSelectProductForUpdate,
    handleCancelUpdate,
    handleUpdateProduct,
    handleRemoveProduct,
    fetchByCategory,
    getAllCategories
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
