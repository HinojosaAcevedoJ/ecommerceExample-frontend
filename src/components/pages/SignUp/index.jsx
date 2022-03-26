import { isEmpty } from 'ramda'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import HookInput from '../../common/HookInput'
import Button from '../../common/Button'
import validationSchema from './validationSchema'
import getAuthService from '../../../services/authService'

const authService = getAuthService()

export default function SignUp() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  })

  const onSubmit = async values => {
    try {
      await authService.signup({ ...values, passwordConfirmation: undefined })
      toast.success('Inicia sesión para continuar')
      navigate('/login')
    } catch (error) {
      toast.error(error.response?.message || error.message)
    }
  }

  return (
    <div className="min-h-screen min-w-screen bg-gray-900 flex items-center justify-center">
      <div className="p-4 shadow rounded m-6 bg-gray-800">
        <h1 className="text-2xl font-bold mb-2 text-gray-50">Sign Up</h1>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <HookInput
            name="email"
            label="Email"
            placeholder="Email"
            register={register}
            errorMessage={errors.email?.message}
          />
          <HookInput
            name="user"
            label="user"
            placeholder="username"
            register={register}
            errorMessage={errors.user?.message}
          />
          <HookInput
            name="password"
            label="Password"
            placeholder="Contraseña"
            type="password"
            register={register}
            errorMessage={errors.password?.message}
          />
          <HookInput
            name="passwordConfirmation"
            label="confirmPassword"
            placeholder="Confirmar contraseña"
            type="password"
            register={register}
            errorMessage={errors.passwordConfirmation?.message}
          />
          <Button block className="mr-2" type="submit" disabled={!isEmpty(errors)}>SignUp</Button>
          <Link to="/login" className="font-bold text-gray-50">¿Ya tienes cuenta? Haz click aquí para iniciar sesión</Link>
        </form>
      </div>
    </div>
  )
}
