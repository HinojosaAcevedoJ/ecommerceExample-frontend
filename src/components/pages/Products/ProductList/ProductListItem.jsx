import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import addCartIcon from '@icon/linea-ecommerce/icons/cart-plus.svg'
import ProductItemPropType from './productItemPropType'
import { useCart } from '../../../context/CartContextProvider'

export default function ProductListItem({ item }) {
  const { addItem } = useCart()
  const navigate = useNavigate()
  return (
    <section className="mx-5 my-4">
      <div key={item._id} className="bg-slate-100 text-slate-800 rounded overflow-hidden shadow-lg">
        <img src={item.image} alt={item.productName} className="object-cover h-48 w-96" />
        <div className="py-2 px-4">
          <h4 className="font-bold">{item.productName}</h4>
          <p className="text-xs mb-2">{item.description}</p>
          <p className="font-bold text-teal-500">
            ${item.price}
          </p>
        </div>
        <div className="flex text-xs">
          <button type="button" className="bg-teal-500 text-center py-2 px-4 w-full hover:bg-teal-400 transition" onClick={() => addItem(item, 1)}>
            <img className="flex-1 h-5 w-5" src={addCartIcon} alt="add-to-cart" />
          </button>
          <button type="button" className="bg-slate-300 text-center py-2 px-4 w-full hover:bg-slate-200 transition" onClick={() => { navigate(`/product/${item._id}`) }}>Detalles</button>
        </div>
      </div>
    </section>
  )
}

ProductListItem.propTypes = {
  item: PropTypes.shape(ProductItemPropType).isRequired
}
