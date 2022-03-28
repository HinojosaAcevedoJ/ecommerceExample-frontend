import { isEmpty } from 'ramda'
import { Link } from 'react-router-dom'
import cartMinus from '@icon/linea-ecommerce/icons/cart-minus.svg'
import cartPlus from '@icon/linea-ecommerce/icons/cart-plus.svg'
import cartRemove from '@icon/linea-ecommerce/icons/cart-remove.svg'
import { useCart } from '../../context/cartContextProvider'
import Button from '../Button'

export default function Cart() {
  const {
    handleUpdateQuantity,
    removeItem,
    totalPrice,
    cart
  } = useCart()
  if (isEmpty(cart)) return <p className="text-center"> Your cart is empty </p>
  return (
    <section className="mx-5 my-4 w-max">
      <p className="text-center">Cart ({cart.length})</p>

      <div className="grid grid-cols-1 gap-4">
        {cart.map(item => (
          <div key={item._id} className="bg-slate-100 text-slate-800 rounded shadow-lg flex justify-between">
            <img src={item.image} alt={item.productName} className="object-contain h-12 w-24" />
            {item.quantity} x {item.productName} ${item.price * item.quantity} &nbsp;
            <button
              onClick={() => handleUpdateQuantity(item._id, -1)}
            >
              <img className="h-5 w-5 mr-2" src={cartMinus} alt="cartMinus" />
            </button>
            <button
              onClick={() => handleUpdateQuantity(item._id, 1)}
            >
              <img className="h-5 w-5 mr-2" src={cartPlus} alt="cartPlus" />
            </button>
            <button onClick={() => removeItem(item._id)}><img className="h-5 w-5 mr-2" src={cartRemove} alt="cartRemove" /></button>
          </div>
        ))}
      </div>
      <p className="text-center text-bold">Total Price: ${totalPrice(cart)}</p>
      <div className="grid grid-cols-2 justify-items-start">
        <Button className="h-12 w-24">Pay now</Button>
        <Link to="/">
          <Button>
            Back
          </Button>
        </Link>
      </div>
    </section>
  )
}
