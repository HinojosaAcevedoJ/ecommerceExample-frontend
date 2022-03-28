/* eslint-disable no-lone-blocks */
import React from 'react'
import { Link } from 'react-router-dom'
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarFooter,
  SidebarContent
} from 'react-pro-sidebar'
import 'react-pro-sidebar/dist/css/styles.css'
import { useProducts } from '../components/pages/Products/context/ProductContext'
import CategoryListItem from '../components/pages/Categories/CategoryListItem'
import { useAuth } from '../components/context/AuthContextProvider'

export default function SideBar() {
  const { categoryList } = useProducts()
  const { isAuth, logout, permissionLvl } = useAuth()
  return (
    <div>
      <ProSidebar>
        <SidebarContent>
          <Menu iconShape="square">
            <MenuItem>
              Home
              <Link to="/" />
            </MenuItem>
            <SubMenu title="Categories">
              {categoryList.map(category => (
                <CategoryListItem key={category} item={category} />
              ))}
            </SubMenu>
            <MenuItem>
              {permissionLvl === 'superadmin' && <Link to="/productadmin">Administrar productos</Link>}
            </MenuItem>
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          <MenuItem>
            {!isAuth ? <Link className="mr-6 ml-6" to="/login">Login</Link> : <button className="mr-6 ml-6" onClick={logout}>logout</button>}
          </MenuItem>
        </SidebarFooter>
      </ProSidebar>
    </div>
  )
}
