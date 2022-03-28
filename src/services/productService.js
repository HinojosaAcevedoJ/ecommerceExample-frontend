import axios from 'axios'
import { API_URL } from '../config/constants'

const getClient = () => (
  axios.create({
    baseURL: `${API_URL}`
  })
)

export default function getProductService() {
  const client = getClient()

  const getAll = async () => {
    const response = await client.get('/products')
    return response.data
  }

  const update = async (payload, id) => {
    const response = await client.put(`/products/${id}`, payload)
    return response.data
  }

  const create = async payload => {
    const response = await client.post('/products', payload)
    return response.data
  }

  const remove = async id => {
    const response = await client.delete(`/products/${id}`)
    return response.data
  }

  const getByCategory = async category => {
    const response = await client.get(`/products/?category=${category}`)
    return response.data
  }
  const getCategories = async () => {
    const response = await client.get('/categories')
    return response.data
  }

  return {
    getAll,
    update,
    create,
    remove,
    getByCategory,
    getCategories
  }
}
