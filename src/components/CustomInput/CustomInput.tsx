import { TextField } from '@mui/material';
import { ErrorMessage, Field } from 'formik';

interface InputProps {
   name: string;
   label: string;
   type?: 'text' | 'password';
}

export const CustomInput: React.FC<InputProps> = ({ name, label, type = 'text' }) => {
   return (
      <Field as={TextField}
         fullWidth
         name={name}
         label={label}
         type={type}
         margin="normal"
         variant="standard"
         helperText={<ErrorMessage name={name} />}
      />
   );
}
