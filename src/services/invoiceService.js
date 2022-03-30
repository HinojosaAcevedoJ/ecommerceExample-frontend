import axios from 'axios'
import { API_URL } from '../config/constants'

const getClient = () => (
  axios.create({
    baseURL: `${API_URL}`
  })
)

export default function getInvoiceService() {
  const client = getClient()

  const createInvoice = async payload => {
    const response = await client.post('/invoice', payload)
    return response.data
  }

  const getAllInvoice = async () => {
    const response = await client.get('/invoice')
    return response.data
  }

  return {
    createInvoice,
    getAllInvoice
  }
}
