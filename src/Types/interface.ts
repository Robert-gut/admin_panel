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

export interface ColorButtonProps extends ButtonProps {
   typecolor: string;
   typecolorhover: string;
}

export interface User {
   id: number;
   firstName: string;
   lastName: string;
   email: string;
   isActivated: boolean;
   password: string;
   sex: string;
   phone: string;
   roles: string[];
}