/* eslint-disable react/jsx-props-no-spreading */

import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { isEmpty } from 'ramda'
import { useNavigate } from 'react-router-dom'
import validationSchema from '../validationSchema'
import HookInput from '../../../../common/HookInput'
import Button from '../../../../common/Button'
import { useProducts } from '../../context/ProductContext'
import { useAuth } from '../../../../context/AuthContextProvider'

export default function ProductForm() {
  const {
    handleCreateProduct,
    updatingProduct,
    isUpdating,
    handleUpdateProduct,
    handleCancelUpdate
  } = useProducts()

  const { isAuth, permissionLvl } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(validationSchema)
  })

  const navigate = useNavigate()

  useEffect(() => {
    reset(updatingProduct)
  }, [updatingProduct, reset])

  useEffect(() => {
    reset(handleUpdateProduct)
  }, [handleUpdateProduct, reset])

  useEffect(() => {
    if (!isAuth || permissionLvl !== 'superadmin') {
      navigate('/')
    }
  }, [isAuth, navigate, permissionLvl])

  return (
    <div className="w-64">
      <div className="fixed w-64 p-4 shadow rounded m-6 bg-gray-800">
        <h1 className="text-2xl font-bold mb-2 text-gray-50">{isUpdating ? 'Actualizar' : 'Agregar'} producto</h1>
        <form className="space-y-4" onSubmit={handleSubmit(isUpdating ? handleUpdateProduct : handleCreateProduct)}>
          <HookInput
            name="productName"
            label="Nombre producto"
            placeholder="Nombre del producto"
            register={register}
            errorMessage={errors.productName?.message}
          />
          <HookInput
            name="description"
            label="description"
            placeholder="description"
            register={register}
            errorMessage={errors.category?.message}
          />
          <HookInput
            name="category"
            label="category"
            placeholder="category"
            register={register}
            errorMessage={errors.category?.message}
          />
          <HookInput
            name="price"
            label="price"
            placeholder="price"
            register={register}
            errorMessage={errors.price?.message}
          />
          <HookInput
            name="stock"
            label="stock"
            placeholder="stock"
            register={register}
            errorMessage={errors.stock?.message}
          />
          <HookInput
            name="image"
            label="Avatar"
            placeholder="Url de avatar"
            register={register}
            errorMessage={errors.image?.message}
          />
          <Button block className="mr-2" type="submit" disabled={!isEmpty(errors)}>Submit</Button>
          {isUpdating && <Button block className="mr-2 bg-red-500" type="button" onClick={handleCancelUpdate}>Cancel</Button> }
        </form>
      </div>
    </div>
  )
}
