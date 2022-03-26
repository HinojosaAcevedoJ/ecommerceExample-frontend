import ProductListItem from './ProductListItem'
import { useProducts } from '../context/ProductContext'

export default function ProductList() {
  const { productList } = useProducts()
  return (
    <section>
      <h1 className="text-2xl font-bold mb-3 flex justify-center text-gray-50">Mis productos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {productList.map(product => (
          <ProductListItem key={product._id} item={product} />
        ))}
      </div>
    </section>
  )
}
