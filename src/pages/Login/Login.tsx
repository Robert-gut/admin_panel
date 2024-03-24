import { useState } from 'react';
import { ColorBlock } from '../../components/ColorBlock/ColorBlock';
import { Alert, Avatar, CircularProgress, Grid, Snackbar } from '@mui/material';
import { Form, Formik, FormikHelpers } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { ColorButton, avatarStyles, stBoxLogin, stContainerLogin } from '../../components/Types/sx';
import { IUser } from '../../components/Types/interface';
import { CustomInput } from '../../components/CustomInput/CustomInput'


export const Login = () => {
   const navigate = useNavigate()

   //* Снейкбар 
   const [snackbarData, setSnackbarData] = useState<{ open: boolean, error: boolean }>({ open: false, error: false });

   const handleClose = () => {
      setSnackbarData({ ...snackbarData, open: false });
   };


   const initialValues: IUser = {
      email: '',
      password: '',
   }

   //* валідація
   const validationSchema = yup.object({
      email: yup.string().email('Invalid email format').required('Email is required'),
      password: yup.string()
         .required('Password is required')
         .min(6, 'Password must be at least 6 characters long')
         .matches(/[a-zA-Z]/, 'Password must contain at least one letter'),
   })

   const users: IUser[] = [
      { email: 'user1@example.com', password: 'password1' },
      { email: 'user2@example.com', password: 'password2' }
   ];

   //* перевірка користувача
   const onSubmit = (values: IUser, props: FormikHelpers<IUser>): void => {
      try {
         const userExists = users.find(user => user.email === values.email && user.password === values.password);
         if (userExists) {
            setSnackbarData({ open: true, error: false });
            setTimeout(() => {
               navigate('/admin')
            }, 3000);
         } else {
            setSnackbarData({ open: true, error: true });
         }
         console.log('✌️values --->', values);
         setTimeout(() => {
            props.resetForm();
            props.setSubmitting(false);
         }, 1200);
      } catch (error) {
         console.error('Помилка під час обробки форми:', error);
      }
   }

   return (
      <div>
         <ColorBlock containerChild={<h2>Sign in</h2>} yourStyleBox={stBoxLogin} yourStyleContainer={stContainerLogin} boxChildren={
            <div>
               <Grid container justifyContent="center" alignItems="center">
                  <Avatar
                     style={avatarStyles}
                     src="/broken-image.jpg"
                  />
               </Grid>
               <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                  {(props) => (
                     <Form>
                        <CustomInput name="email" label="Email" />
                        <CustomInput name="password" label="Password" type="password" />
                        <ColorButton type="submit" variant="contained" disabled={props.isSubmitting}>
                           {props.isSubmitting ? (
                              <>
                                 <CircularProgress size={24} color="inherit" style={{ marginRight: '8px' }} />
                                 Loading
                              </>
                           ) : 'Sign in'}
                        </ColorButton>
                     </Form>
                  )}
               </Formik>
            </div>
         } />
         <div>
            <Snackbar open={snackbarData.open} autoHideDuration={2000} onClose={handleClose}>
               <Alert
                  onClose={handleClose}
                  severity={snackbarData.error ? 'error' : 'success'}
                  variant="filled"
                  sx={{ width: '100%', backgroundColor: snackbarData.error ? 'red' : 'green' }}
               >
                  {snackbarData.error ? 'Даного користувача не існує!' : 'Успіший вхід!'}
               </Alert>
            </Snackbar>
         </div>
      </div>
   );
};

export default Login;
