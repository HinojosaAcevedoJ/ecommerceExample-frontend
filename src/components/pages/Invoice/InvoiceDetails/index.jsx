import { useParams } from 'react-router-dom'
import { useInvoice } from '../../../context/InvoiceContextProvider'
import InvoiceDetailsItem from './InvoiceDetailsItem'

export default function Invoice() {
  const { invoiceList } = useInvoice()
  const { id } = useParams()
  const invoice = invoiceList.find(item => item._id === id)
  const invoiceDetails = invoice.cartItems.map((item, index) => ({
    itemId: item,
    itemName: invoice.cartItemsName[index],
    itemsQuantity: invoice.itemsQuantity[index],
    itemPrice: invoice.itemPrice[index]
  }))
  return (
    <div>
      <div>
        <div className="row">
          <div>
            <h1 className="flex justify-center">Factura</h1>
          </div>
        </div>
      </div>

      <div className="row top-0">
        <div className="col-md-12">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            {invoiceDetails.map(item => (
              <InvoiceDetailsItem key={item.itemId} item={item} />
            ))}
          </table>
        </div>

        <div className="col-md-12">
          <div className="float-right">
            <p>
              <strong>Total:</strong> {invoice.cartPrice}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
