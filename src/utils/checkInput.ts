import * as Yup from 'yup'

export const checkInputTest = Yup.object({
    youtube: Yup.string().required('Youtube Address is Required'),
    instagram: Yup.string().required('Instagram Address is Required'),
    twitter: Yup.string().required('Twitter Address is Required'),
    facebook: Yup.string().required('Facebook Address is Required'),
    whatsapp: Yup.string().required('Whatsapp Address is Required'),
    email: Yup.string()
        .email('Please enter valid email')
        .required('Email Address is Required'),
    password: Yup.string()
        .min(6, ({ min }) => `Password must be at least ${min} characters`)
        .required('Password is required'),
    username: Yup.string().required('User Name is Required'),
    gender: Yup.string().required('Gender is Required'),
    birth_year: Yup.string().required('Birth year is Required'),
    introductionCode: Yup.string().required('Introduction Code is Required'),
    profession: Yup.string().required('Profession is Required'),
    introduction: Yup.string().required('Introduction is Required'),
})
