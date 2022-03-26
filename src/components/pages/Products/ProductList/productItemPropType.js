import PropTypes from 'prop-types'

export default {
  _id: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired
}
