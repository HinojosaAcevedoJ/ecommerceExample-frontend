import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from 'react'
import PropTypes from 'prop-types'
import { isEmpty } from 'ramda'

const CartContext = createContext({
  cart: [],
  invoiceList: [],
  addItem: () => {},
  removeItem: () => {},
  handleUpdateQuantity: () => {},
  totalPrice: () => {}
})

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([])

  const addItem = useCallback((item, quantity = 1) => {
    if (quantity <= 0) {
      return
    }
    if (isEmpty(cart)) {
      setCart([...cart, { ...item, quantity }])
      return
    }

    const currentItem = cart.find(itemId => itemId._id === item._id)

    if (!currentItem) {
      setCart([...cart, { ...item, quantity }])
    }
  }, [cart])

  const removeItem = useCallback(item => {
    const newCart = cart.filter(cartItem => cartItem._id !== item)
    setCart(newCart)
  }, [cart])

  const handleUpdateQuantity = useCallback((item, value = 1) => {
    setCart(prevData => prevData.map(cartItem => {
      if (cartItem._id === item) {
        const quantity = cartItem.quantity + value
        if (quantity === 0) {
          removeItem(item)
        }
        return { ...cartItem, quantity }
      }
      return cartItem
    }))
  }, [removeItem])

  const totalPrice = useCallback(items => {
    const totalCost = items.reduce((total, item) => total + item.quantity * item.price, 0)
    return totalCost
  }, [])

  const contextValues = useMemo(() => ({
    cart,
    addItem,
    removeItem,
    handleUpdateQuantity,
    totalPrice,
  }), [
    cart,
    addItem,
    removeItem,
    handleUpdateQuantity,
    totalPrice
  ])

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  )
}

CartContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export const useCart = () => useContext(CartContext)
