import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  useEffect,
} from 'react'
import PropTypes from 'prop-types'
import jwtDecode from 'jwt-decode'
import { toast } from 'react-toastify'
import getAuthService from '../../services/authService'

const PERMISSION_LEVEL = 'ecommerce::permission'
const TOKEN_KEY = 'ecommerce::token'
const storage = window.localStorage

const AuthContext = createContext({
  isAuth: false,
  login: () => {},
  logout: () => {},
  decodedToken: {},
  token: '',
  permissionLvl: ''
})

const authService = getAuthService()

export function AuthContextProvider({ children }) {
  const [token, setToken] = useState('')
  const [permissionLvl, setPermissionLvl] = useState('')

  const login = useCallback(async payload => {
    try {
      const resToken = await authService.login(payload)
      setToken(resToken.token)
      setPermissionLvl(resToken.permissionLvl)
      storage.setItem(PERMISSION_LEVEL, resToken.permissionLvl)
      storage.setItem(TOKEN_KEY, resToken.token)
    } catch (error) {
      if (error.response?.status === 401) {
        toast.error(error.response.data.message)
        return
      }
      toast.error('Something was wrong!')
    }
  }, [])

  const logout = useCallback(() => {
    setToken('')
    setPermissionLvl('')
    storage.removeItem(PERMISSION_LEVEL)
    storage.removeItem(TOKEN_KEY)
  }, [])

  const decodedToken = useMemo(() => {
    if (token) {
      return jwtDecode(token)
    }
    return {}
  }, [token])

  useEffect(() => {
    const tokenFromStorage = storage.getItem(TOKEN_KEY)
    if (tokenFromStorage) {
      setToken(tokenFromStorage)
    }
  }, [])

  const contextValue = useMemo(() => ({
    token,
    permissionLvl,
    isAuth: !!token,
    decodedToken,
    login,
    logout
  }), [
    token,
    permissionLvl,
    decodedToken,
    login,
    logout
  ])

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export const useAuth = () => useContext(AuthContext)
