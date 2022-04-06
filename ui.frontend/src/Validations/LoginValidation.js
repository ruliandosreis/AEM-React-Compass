import * as yup from 'yup';


export const schema = yup.object().shape({
  user: yup.string().required('O campo usuário deve ser preenchido').matches(/^[a-z]+[.]+[a-z]+$/, 'O usuario deve seguir o padrão "nome.sobrenome" '),

  password: yup.string().min(6, 'A senha deve conter ao menos 6 dígitos').matches(/^[0-9]+$/, 'A senha deve conter apenas números').max(8,'A senha deve conter menos que 9 dígitos').required().typeError('O campo senha deve ser preenchido')
})