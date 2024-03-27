import { ButtonProps } from "@mui/material";

export interface childrenProps {
   boxChildren: React.ReactNode;
   containerChild: React.ReactNode;
   yourStyleBox?: React.CSSProperties;
   yourStyleContainer?: React.CSSProperties;
}

export interface IUser {
   email: string;
   password?: string;
}

export interface INewUser {
   firstName: string, 
   lastName: string,
   email: string, 
   password: string,
   confirmPassword: string,
   sex: string,
   phone: string,
   roles: string, 
}

export interface ColorButtonProps extends ButtonProps {
   typecolor: string;
   typecolorhover: string;
}


