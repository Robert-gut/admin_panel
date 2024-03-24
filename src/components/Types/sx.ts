import { Button, ButtonProps, styled } from "@mui/material";
import { Color } from "./enum"


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


export const avatarStyles = {
   backgroundColor: Color.Blue,
   width: '70px',
   height: '70px',
   marginBottom: '20px',
   marginTop: '-30px',
   boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'
};


export const ColorButton = styled(Button)<ButtonProps>(() => ({
   backgroundColor: Color.Blue,
   marginTop: '55px',
   fontWeight: '600',
   '&:hover': {
      backgroundColor: Color.Blue,
   },
}));


export const stBox = {
   width: '30%',
   fontFamily: 'Open Sans'
};

export const stContainer = {
   'backgroundColor': Color.Blue
};