import { Form, Formik, FormikHelpers } from "formik"
import { ColorBlock } from "../../components/ColorBlock/ColorBlock"
import { ColorButton, stBoxResetPassword } from "../../components/Types/sx"
import { CustomInput } from "../../components/CustomInput/CustomInput"
import { Alert, CircularProgress, Snackbar } from "@mui/material"
import { IUser } from "../../components/Types/interface"
import { useNavigate } from "react-router"
import { useState } from "react"

export const ResetPassword = () => {
   const navigate = useNavigate()

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

               <Formik initialValues={initialValues} onSubmit={onSubmit}>
                  {(props) => (
                     <Form>
                        <CustomInput name="email" label="Email" />
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
         } yourStyleBox={stBoxResetPassword} containerChild={<h2>Reset Password</h2>} />
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
   )
}
