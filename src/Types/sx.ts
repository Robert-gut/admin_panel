import { Button, styled } from "@mui/material";
import { Color } from "./enum"
import { ColorButtonProps } from "./interface";

export const styleBox = {
   // 'width': '50%',
   'margin': '0 auto',
   'marginTop': '140px',
   'width': 'fit-content',
   "boxShadow": "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
   'color': Color.Black,
   'backgroundColor': Color.White,
   'padding': '30px',
   'borderRadius': '10px',
   'fontFamily': 'Open Sans'
}

export const styleContainer = {
   'height': '50px',
   'lineHeight': '10px',
   "boxShadow": "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.6) 0px 3px 7px -3px",
   'backgroundColor': Color.Brown,
   'color': Color.White,
   'padding': '21px 20px',
   'borderRadius': '5px',
   'position': 'relative',
   'bottom': '65px'
}

export const avatarStylesUser = {
   backgroundColor: Color.Blue,
   width: '70px',
   height: '70px',
   marginBottom: '20px',
   marginTop: '-30px',
   boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'
};
export const avatarStylesResetPassword = {
   backgroundColor: Color.Brown,
   width: '70px',
   height: '70px',
   marginBottom: '20px',
   marginTop: '-30px',
   boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'
};

export const ColorButton = styled(Button)<ColorButtonProps>(({ typecolor, typecolorhover }) => ({
   backgroundColor: typecolor,
   margin: '25px 0',
   fontWeight: '600',
   '&:hover': {
      backgroundColor: typecolorhover,
   },
}));


export const stBoxLogin = {
   width: '30%',
};
export const stBoxResetPassword = {
   width: '40%',
};

export const stContainerLogin = {
   'backgroundColor': Color.Blue
};

export const linkStyles = {
   margin: '25px 0',
   color: Color.Silver,
   textDecoration: 'none',
   '&:hover': {
      backgroundColor: 'black',
   },
};

export const stBoxAllUsers = {
   width: '80%',
   marginBottom: '100px'
}
export const stContainerAllUsers = {
   backgroundColor: Color.Orange,
   width: '20%',
}
export const actionBtnAllUser = {
   color: Color.White,
   border: `1px solid ${Color.Orange}`,
   '&:hover': {
      border: `1px solid ${Color.Orange}`,
   },
}
export const actionBtnAllUserModal = {
   color: Color.White,
   border: '0',
   '&:hover': {
      border: '0',
   },
}

export const iconUsersAllUsers = {
   fontSize: '35px',
   marginLeft: '10px'
}

export const stBoxModalWindow = {
   position: 'absolute' as 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: '30%',
   bgcolor: 'background.paper',
   boxShadow: 24,
   p: 4,
   borderRadius: '15px',
   border: `2px solid ${Color.Silver}`,
};

export const stBoxTableAndStackAllUsers = {
   height: '530px',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'space-between'
};