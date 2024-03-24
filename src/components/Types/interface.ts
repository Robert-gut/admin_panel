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