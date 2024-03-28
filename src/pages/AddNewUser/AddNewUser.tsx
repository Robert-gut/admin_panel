import {useState} from 'react'
import {ColorBlock} from '../../components/ColorBlock/ColorBlock'
import {Alert, Avatar, Snackbar, Grid, Select, FormControl, InputLabel, MenuItem, FormHelperText} from '@mui/material'
import {Form, Formik, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'
import {useNavigate} from 'react-router-dom'
import {ColorButton, avatarStylesUser, stBoxLogin, stContainerLogin} from '../../Types/sx'
import {INewUser} from '../../Types/interface'
import {CustomInput} from '../../components/CustomInput/CustomInput'
import {Color, ColorHover} from '../../Types/enum'
import {MuiTelInput} from 'mui-tel-input'


const AddNewUser = () => {
   const navigate = useNavigate()

   const [snackbarData, setSnackbarData] = useState<{open: boolean; error: boolean}>({open: false, error: false})
   const handleClose = () => {
      setSnackbarData({...snackbarData, open: false})
   }

   const [phoneValue, setPhoneValue] = useState('')
   const handleChangePhone = (newValue: string) => {
      setPhoneValue(newValue.replace(/\s/g, ''))
   }

   const initialValues: INewUser = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      sex: '',
      roles: '',
   }


   const validationSchema = yup.object({
      firstName: yup
         .string()
         .min(2, 'First name must be at least 2 characters long')
         .max(32, 'First name cannot be more than 32 characters')
         .matches(/^[a-zA-Zа-яА-Я]*$/, 'First name cannot include number or symbols')
         .required('First name is required'),

      lastName: yup
         .string()
         .min(2, 'Last name must be at least 2 characters long')
         .max(32, 'Last name cannot be more than 32 characters')
         .matches(/^[a-zA-Zа-яА-Я]*$/, 'First name cannot include number or symbols')
         .required('Last name is required'),

      email: yup
         .string()
         .email('Invalid email format')
         .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email format')
         .required('Email is required'),

      phone: yup
         .string()
         .min(11, 'Phone number must be 10 digits')
         .max(16, 'Site supports the ITU-T E.164 standard, max lenght 15 digits')
         .required('Phone is required'),

      password: yup
         .string()
         .min(8, 'Password must be at least 8 characters long')
         .max(32, 'Password cannot be more than 32 characters')
         .matches(/[a-zA-Zа-яА-Я]/, 'Password must contain at least one letter')
         .matches(/\d/, 'Password must contain at least one digits')
         .matches(/[^\w\s]/, 'Password must contain at least one special character')
         .required('Password is required'),

      confirmPassword: yup
         .string()
         .oneOf([yup.ref('password')], 'Passwords must match')
         .required('Passwords must match'),

      sex: yup.string().oneOf(['man', 'woman', 'other'], 'Invalid sex').required('Sex is required'),

      roles: yup.string().oneOf(['user', 'admin', 'manager'], 'Invalid role').required('Roles is required'),
   })

   
   const onSubmit = (values: INewUser, {setSubmitting}: {setSubmitting: (isSubmitting: boolean) => void}): void => {
      try {
         if (!values) return
         const {confirmPassword, ...newUserData} = values

         const request: number = 200
         if (newUserData && request === 200) {
            setSnackbarData({open: true, error: false})
            console.log(newUserData) //! Масив з данними нового юзера
            setTimeout(() => {
               navigate('/')
            }, 2000)
         } else {
            setSnackbarData({open: true, error: true})
            setTimeout(() => {
               setSubmitting(false)
            }, 2000)
         }
      } catch (error) {
         console.error('Помилка під час обробки форми:', error)
      }
   }

   const boxStyle = {
      ...stBoxLogin,
      marginBottom: '140px',
   }

   const selectStyle = {
      margin: '16px 0px 8px 0px',
   }

   return (
      <div>
         <ColorBlock
            containerChild={<h2>Add new user</h2>}
            yourStyleBox={boxStyle}
            yourStyleContainer={stContainerLogin}
            boxChildren={
               <div>
                  <Grid container justifyContent='center' alignItems='center'>
                     <Avatar style={avatarStylesUser} src='/broken-image.jpg' />
                  </Grid>
                  <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                     {(props) => (
                        <Form>
                           <CustomInput name='firstName' label='First name' />
                           <CustomInput name='lastName' label='Last name' />
                           <CustomInput name='email' label='Email' />
                           <CustomInput name='password' label='Password' type='password' />
                           <CustomInput name='confirmPassword' label='Confirm password' type='password' />

                           <Field name='phone' >
                              {({form}: any) => (
                                 <div>
                                    <MuiTelInput
                                       fullWidth
                                       value={phoneValue}
                                       onChange={(newValue: string) => {
                                          handleChangePhone(newValue)
                                          form.setFieldValue('phone', newValue.replace(/\s/g, ''))
                                       }}
                                       onBlur={() => form.setFieldTouched('phone', true)}
                                       sx={selectStyle}
                                       error={form.errors.phone && form.touched.phone}
                                    />
                                    {form.errors.phone && form.touched.phone && (
                                       <FormHelperText error sx={{margin: '-6px 0px 6px 0px'}}>
                                          {form.errors.phone}
                                       </FormHelperText>
                                    )}
                                 </div>
                              )}
                           </Field>

                           <Field name='sex' as={FormControl} fullWidth>
                              {({form}: any) => (
                                 <FormControl fullWidth error={form.errors.sex && form.touched.sex} sx={selectStyle}>
                                    <InputLabel id='sexSelectl'>Sex</InputLabel>
                                    <Select
                                       labelId='sexSelect'
                                       label='Sex'
                                       onChange={(e) => form.setFieldValue('sex', e.target.value)}
                                       onBlur={() => form.setFieldTouched('sex', true)}
                                    >
                                       <MenuItem value='man'>Man</MenuItem>
                                       <MenuItem value='woman'>Woman</MenuItem>
                                       <MenuItem value='other'>Other</MenuItem>
                                    </Select>
                                    <FormHelperText sx={{marginLeft: '0px'}}>
                                       <ErrorMessage name='sex' />
                                    </FormHelperText>
                                 </FormControl>
                              )}
                           </Field>

                           <Field name='roles' as={FormControl} fullWidth>
                              {({form}: any) => (
                                 <FormControl fullWidth error={form.errors.roles && form.touched.roles} sx={selectStyle}>
                                    <InputLabel id='roleSelectl'>Roles</InputLabel>
                                    <Select
                                       labelId='rolesSelect'
                                       label='Roles'
                                       onChange={(e) => form.setFieldValue('roles', e.target.value)}
                                       onBlur={() => form.setFieldTouched('roles', true)}
                                    >
                                       <MenuItem value='user'>User</MenuItem>
                                       <MenuItem value='manager'>Manager</MenuItem>
                                       <MenuItem value='admin'>Admin</MenuItem>
                                    </Select>
                                    <FormHelperText sx={{marginLeft: '0px'}}>
                                       <ErrorMessage name='roles' />
                                    </FormHelperText>
                                 </FormControl>
                              )}
                           </Field>

                           <ColorButton
                              typecolor={Color.Blue}
                              typecolorhover={ColorHover.Blue}
                              type='submit'
                              variant='contained'
                              disabled={props.isSubmitting}
                           >
                              Add new user
                           </ColorButton>
                        </Form>
                     )}
                  </Formik>
               </div>
            }
         />
         <div>
            <Snackbar open={snackbarData.open} autoHideDuration={2000} onClose={handleClose}>
               <Alert
                  onClose={handleClose}
                  severity={snackbarData.error ? 'error' : 'success'}
                  variant='filled'
                  sx={{width: '100%', backgroundColor: snackbarData.error ? 'red' : 'green'}}
               >
                  {snackbarData.error ? 'Помилка при обробці данних нового користувача!' : 'Новий користувач добавлений!'}
               </Alert>
            </Snackbar>
         </div>
      </div>
   )
}

export default AddNewUser
