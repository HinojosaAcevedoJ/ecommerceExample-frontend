import PropTypes from 'prop-types'
import clsx from 'clsx'
import contactItemPropType from './productItemPropType'
import Button from '../../../../common/Button'
import { useProducts } from '../../context/ProductContext'

export default function ContactListItem({ item }) {
  const { handleRemoveProduct, handleSelectProductForUpdate, updatingProduct } = useProducts()

  const handleSelect = () => {
    handleSelectProductForUpdate(item)
  }

  const handleProductRemoveById = () => {
    handleRemoveProduct(item._id)
  }

  return (
    <li className={clsx('shadow rounded p-2 flex justify-between hover:bg-gray-500', updatingProduct.id === item.id && 'bg-blue-500')}>
      <div className="flex">
        <div className="mr-4">
          <img src={item.image} alt={item.productName} className="rounded h-40 w-40 object-cover" />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-lg font-bold mb-3 text-gray-50">{item.productName}</h3>
          <p className="text-base opacity-75 mb-2 text-gray-100">{item.description}</p>
          <p className="text-base text-gray-100">Categoria: {item.category}</p>
          <p className="text-base text-gray-100">${item.price}</p>
          <p className="text-base text-gray-100">Stock: {item.stock}</p>
        </div>
      </div>
      <div className="flex flex-col">
        <Button type="button" className="bg-red-600" onClick={handleProductRemoveById}>Delete</Button>
        <br />
        <Button type="button" className="bg-gray-500" onClick={handleSelect}>Edit</Button>
      </div>
    </li>
  )
}

ContactListItem.propTypes = {
  item: PropTypes.shape(contactItemPropType).isRequired
}
