import { Form, Formik, FormikHelpers } from "formik"
import { ColorBlock } from "../../components/ColorBlock/ColorBlock"
import { ColorButton, avatarStylesResetPassword, linkStyles, stBoxResetPassword } from "../../components/Types/sx"
import { CustomInput } from "../../components/CustomInput/CustomInput"
import { Alert, Avatar, CircularProgress, Grid, Snackbar } from "@mui/material"
import { IUser } from "../../components/Types/interface"
import { useNavigate } from "react-router"
import { useState } from "react"
import { Color, ColorHover } from "../../components/Types/enum"
import * as yup from 'yup';
import LockResetIcon from '@mui/icons-material/LockReset';
import { Link } from "react-router-dom"


export const ResetPassword = () => {
   const navigate = useNavigate()

   //* валідація
   const validationSchema = yup.object({
      email: yup.string().email('Invalid email format').required('Email is required'),
   })

   //* Снейкбар 
   const [snackbarData, setSnackbarData] = useState<{ open: boolean, error: boolean }>({ open: false, error: false });

   const handleClose = () => {
      setSnackbarData({ ...snackbarData, open: false });
   };

   const initialValues: IUser = {
      email: '',
   }

   //* перевірка користувача
   const onSubmit = (values: IUser, props: FormikHelpers<IUser>): void => {
      try {
         setSnackbarData({ open: true, error: false });

         setTimeout(() => {
            navigate('/logIn')
         }, 3000);

         console.log('✌️values --->', values);
         setTimeout(() => {
            props.resetForm();
            props.setSubmitting(false);
         }, 1200);
      } catch (error) {
         console.error('Помилка під час обробки форми:', error);

         setSnackbarData({ open: true, error: true });
      }
   }


   return (
      <div>
         <ColorBlock boxChildren={
            <div>
               <Grid container justifyContent="center" alignItems="center">
                  <Avatar style={avatarStylesResetPassword}>
                     <LockResetIcon fontSize="large" />
                  </Avatar>
               </Grid>

               <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                  {(props) => (
                     <Form>
                        <CustomInput name="email" label="Email" />
                        <ColorButton typecolor={Color.Brown} typecolorhover={ColorHover.Brown} type="submit" variant="contained" disabled={props.isSubmitting}>
                           {props.isSubmitting ? (
                              <>
                                 <CircularProgress size={24} color="inherit" style={{ marginRight: '8px' }} />
                                 Loading
                              </>
                           ) : 'Reset'}
                        </ColorButton>
                     </Form>
                  )}
               </Formik>
               <Link style={linkStyles} to='/logIn'>Go to login?</Link>

            </div>
         } yourStyleBox={stBoxResetPassword} containerChild={<h2>Reset Password</h2>} />
         <div>
            <Snackbar open={snackbarData.open} autoHideDuration={2000} onClose={handleClose}>
               <Alert
                  onClose={handleClose}
                  severity={snackbarData.error ? 'error' : 'success'}
                  variant="filled"
                  sx={{ width: '100%', backgroundColor: snackbarData.error ? 'red' : 'green' }}
               >
                  {snackbarData.error ? 'Помилка' : 'Відправлено'}
               </Alert>
            </Snackbar>
         </div>
      </div>
   )
}
