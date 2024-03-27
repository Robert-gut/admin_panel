import { Box, Modal, Typography } from "@mui/material";
import { stBoxModalWindow } from "../../Types/sx";
import { Color } from "../../Types/enum";


export interface childProps {
   childPropsBtn?: React.ReactNode;
   childP: React.ReactNode;
   childH1: React.ReactNode;
   open: boolean;
   handleClose: () => void;
}

export const CustomModalWindow: React.FC<childProps> = ({ childPropsBtn, childP, childH1, open, handleClose }) => {

   return (
      <Modal
         open={open}
         onClose={handleClose}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
         sx={{ backdropFilter: 'blur(3px)' }}
      >
         <Box sx={stBoxModalWindow}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
               {childH1}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
               {childP}
            </Typography>
            {childPropsBtn}
         </Box>
      </Modal>
   )
}




