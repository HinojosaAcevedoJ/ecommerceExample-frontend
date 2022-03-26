import * as yup from 'yup'

export default yup.object({
  email: yup.string().email().required(),
  user: yup.string().required(),
  password: yup.string().required(),
  passwordConfirmation: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required()
}).required()
