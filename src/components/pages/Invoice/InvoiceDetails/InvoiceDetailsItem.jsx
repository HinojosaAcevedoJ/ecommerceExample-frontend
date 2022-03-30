import PropTypes from 'prop-types'
import InvoiceDetailsItemPropType from './InvoiceDetailsItemPropType'

export default function InvoiceDetailsItem({ item }) {
  return (
    <tbody>
      <tr key={item.itemId}>
        <td>{item.itemName}</td>
        <td>${item.itemPrice}</td>
        <td>{item.itemsQuantity}</td>
        <td>${item.itemPrice - item.itemsQuantity}</td>
      </tr>
    </tbody>
  )
}

InvoiceDetailsItem.propTypes = {
  item: PropTypes.shape(InvoiceDetailsItemPropType).isRequired
}
