import { Link } from 'react-router-dom'
import bag from '@icon/linea-ecommerce/icons/bag.svg'
import Button from './common/Button'
import { useAuth } from './context/AuthContextProvider'

export default function Navbar() {
  const { isAuth, logout, permissionLvl } = useAuth()
  return (
    <header className="flex justify-between items-center px-4 py-2 bg-blue-100">
      <div className="flex items-center">
        <Link to="/">
          <img src="https://i.imgur.com/rnKGrug.png" width="50" alt="Logo" className="mr-10" />
        </Link>
        <strong>Ecommerce example</strong>
        <p className="mr-6 ml-6">Categorias</p>
        {!isAuth ? <Link to="/login">Login</Link> : <button className="mr-6" onClick={logout}>logout</button>}
        {permissionLvl === 'superadmin' && <Link to="/productadmin">Administrar productos</Link>}
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
