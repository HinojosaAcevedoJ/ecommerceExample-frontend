import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {
  MenuItem
} from 'react-pro-sidebar'

export default function CategoryListItem({ item }) {
  return (
    <section>
      <MenuItem>
        {item}
        <Link to={`/category/${item}`} />
      </MenuItem>
    </section>
  )
}

CategoryListItem.propTypes = {
  item: PropTypes.string.isRequired
}
