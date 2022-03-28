import { useParams } from 'react-router-dom'
import ProductListItem from '../../Products/ProductList/ProductListItem'
import { useProducts } from '../../Products/context/ProductContext'

export default function CategoryPageItem() {
  const { productList } = useProducts()
  const { category } = useParams()
  const products = productList.filter(item => item.category === category)
  console.log(products)
  return (
    <section className="bg-gray-800">
      <h1 className="text-2xl font-bold mb-3 flex justify-center text-gray-50">{category}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {products.map(product => (
          <ProductListItem key={product._id} item={product} />
        ))}
      </div>
    </section>
  )
}
