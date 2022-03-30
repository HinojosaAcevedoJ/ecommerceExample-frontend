import PropTypes from 'prop-types'

export default {
  _id: PropTypes.string.isRequired,
  cartItems: PropTypes.array.isRequired,
  cartItemsName: PropTypes.array.isRequired,
  itemsQuantity: PropTypes.array.isRequired,
  itemPrice: PropTypes.array.isRequired,
  cartPrice: PropTypes.number.isRequired
}
