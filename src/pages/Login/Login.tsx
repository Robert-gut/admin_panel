import React, { useState } from 'react';
import { ColorBlock } from '../../components/ColorBlock/ColorBlock';
import { Color } from '../../components/Types/enum';
import { Alert, Button, ButtonProps, Snackbar, TextField, styled } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

interface IUser {
   email: string;
   password: string;
};

export const Login: React.FC = () => {
   const navigate = useNavigate()

   const [snackbarData, setSnackbarData] = useState<{ open: boolean, error: boolean }>({ open: false, error: false });

   const handleClose = () => {
      setSnackbarData({ ...snackbarData, open: false });
   };

   const loginUser = async (email: string, password: string): Promise<boolean> => {
      const isValidUser = users.some(user => user.email === email && user.password === password);
      return isValidUser;
   }

   const stBox = {
      width: '30%',
      fontFamily: 'Open Sans'
   };

   const stContainer = {
      'backgroundColor': Color.Blue
   };

   const ColorButton = styled(Button)<ButtonProps>(() => ({
      backgroundColor: Color.Blue,
      marginTop: '55px',
      fontWeight: '600',
      '&:hover': {
         backgroundColor: Color.Blue,
      },
   }));

   const validationSchema = yup.object({
      email: yup.string().email('Invalid email format').required('Email is required'),
      password: yup.string()
         .required('Password is required')
         .min(6, 'Password must be at least 6 characters long')
         .matches(/[a-zA-Z]/, 'Password must contain at least one letter'),
   })

   const formik = useFormik({
      initialValues: {
         email: '',
         password: '',
      },
      validationSchema: validationSchema,
      onSubmit: async (values) => {
         try {
            console.log(values);
            const isLogin = await loginUser(values.email, values.password);
            if (isLogin) {
               setSnackbarData({ open: true, error: false });
            } else {
               setSnackbarData({ open: true, error: true });
            }
         } catch (error) {
            console.error('Error while trying to login:', error);
         }
      },
   });

   const users: IUser[] = [
      { email: 'user1@example.com', password: 'password1' },
      { email: 'user2@example.com', password: 'password2' }
   ];

   return (
      <div>
         <ColorBlock boxChildren={
            <form onSubmit={formik.handleSubmit}>
               <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="Email"
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  margin="normal"
                  variant="standard"
                  autoComplete="off" // Disable autocomplete
               />
               <TextField
                  fullWidth
                  id="password"
                  name="password"
                  label="Password"
                  type='password'
                  onChange={formik.handleChange}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                  variant="standard"
                  margin="normal"
                  autoComplete="off" // Disable autocomplete
               />
               <ColorButton type="submit" variant="contained" color="primary">
                  Sign in
               </ColorButton>
            </form>
         } containerChild={<h2>Sign in</h2>} yourStyleBox={stBox} yourStyleContainer={stContainer} />
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
