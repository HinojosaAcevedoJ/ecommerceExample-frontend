import { Link } from 'react-router-dom'
import bag from '@icon/linea-ecommerce/icons/bag.svg'
import Button from '../components/common/Button'

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-4 py-2 bg-zinc-900">
      <div className="flex items-center">
        <Link to="/">
          <img src="https://i.imgur.com/rnKGrug.png" width="50" alt="Logo" className="mr-10" />
        </Link>
        <strong className="text-gray-50">Ecommerce example</strong>
      </div>
      <nav>
        <Link to="/cart">
          <Button>
            <img className="h-5 w-5" src={bag} alt="bag" />
          </Button>
        </Link>
      </nav>
    </header>
  )
}
