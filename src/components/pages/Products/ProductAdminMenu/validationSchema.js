import * as yup from 'yup'

export default yup.object({
  productName: yup.string().min(3, 'Too short').required(),
  category: yup.string().min(3, 'Too short').required(),
  description: yup.string().min(3, 'Too short').required(),
  price: yup.number().positive().integer().required(),
  image: yup.string().required(),
  stock: yup.number().positive().integer().required()
}).required()
