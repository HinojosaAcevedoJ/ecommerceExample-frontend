import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import InvoiceItemPropType from '../InvoiceItemPropType'

export default function InvoiceMenuItem({ item }) {
  const navigate = useNavigate()
  return (
    <section>
      <div className="flex justify-center">
        <div key={item._id} className="bg-slate-100 text-slate-800 rounded overflow-hidden shadow-lg">
          <div className="py-2 px-4">
            <h4 className="font-bold">{item._id}</h4>
          </div>
          <div className="flex text-xs">
            <button type="button" className="bg-slate-300 text-center py-2 px-4 w-full hover:bg-slate-200 transition" onClick={() => { navigate(`/facturas/${item._id}`) }}>Detalles</button>
          </div>
        </div>
      </div>
    </section>
  )
}

InvoiceMenuItem.propTypes = {
  item: PropTypes.shape(InvoiceItemPropType).isRequired
}
