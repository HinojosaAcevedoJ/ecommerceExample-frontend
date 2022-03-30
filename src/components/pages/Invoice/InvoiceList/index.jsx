import InvoiceMenuItem from './InvoiceListItem'
import { useInvoice } from '../../../context/InvoiceContextProvider'

export default function InvoiceMenu() {
  const { invoiceList } = useInvoice()
  return (
    <div>
      <h1>Facturas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {invoiceList === undefined ? 'No hay facturas para mostrar' : invoiceList.map(invoice => (
          <InvoiceMenuItem key={invoice._id} item={invoice} />
        ))}
      </div>
    </div>
  )
}
