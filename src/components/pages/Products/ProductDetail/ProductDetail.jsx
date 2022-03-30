import { useParams } from 'react-router-dom'

import { useProducts } from '../context/ProductContext'
import Button from '../../../common/Button'
import { useCart } from '../../../context/CartContextProvider'

export default function ProductDetail() {
  const { productList } = useProducts()
  const { addItem } = useCart()
  const { id } = useParams()
  const product = productList.find(item => item._id === id)
  return (
    <div>
      <div className="details" key={product._id}>
        <div className="big-img">
          <img src={product.image} alt={product.productName} />
        </div>

        <div className="box">
          <div className="row">
            <h2>{product.productName}</h2>
            <span>${product.price}</span>
          </div>

          <p>{product.description}</p>
          <p>{product.stock}</p>

          <Button className="cart" onClick={() => { addItem(product) }}>Add to cart</Button>

        </div>
      </div>
    </div>
  )
}
