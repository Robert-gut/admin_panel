import { Color } from "../../Types/enum"
import { ColorBlock } from "../../components/ColorBlock/ColorBlock"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, ButtonGroup, Grid, Modal, Pagination, Stack, Typography } from "@mui/material";
import { ColorButton, actionBtnAllUser, actionBtnAllUserModal, iconUsersAllUsers, stBoxAllUsers, stBoxModalWindow, stContainerAllUsers } from "../../Types/sx";
import { useState } from "react";
import GroupIcon from '@mui/icons-material/Group';
import { User } from "../../Types/interface";
export const AllUsers = () => {
   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   const usersData: User[] = [
      {
         firstName: 'John',
         lastName: 'Doe',
         email: 'john@example.com',
         isActivated: true,
         password: 'password1',
         sex: 'men',
         phone: '1234567890',
         roles: ['Admin'],
      },
      {
         firstName: 'Jane',
         lastName: 'Smith',
         email: 'jane@example.com',
         isActivated: true,
         password: 'password2',
         sex: 'women',
         phone: '9876543210',
         roles: ['User'],
      },
      {
         firstName: 'Alice',
         lastName: 'Johnson',
         email: 'alice@example.com',
         isActivated: false,
         password: 'password3',
         sex: 'women',
         phone: '5556667777',
         roles: ['Admin'],
      },
      {
         firstName: 'Bob',
         lastName: 'Brown',
         email: 'bob@example.com',
         isActivated: true,
         password: 'password4',
         sex: 'men',
         phone: '4443332222',
         roles: ['User'],
      },
      {
         firstName: 'Emily',
         lastName: 'Davis',
         email: 'emily@example.com',
         isActivated: true,
         password: 'password5',
         sex: 'women',
         phone: '1231231234',
         roles: ['User'],
      },
      {
         firstName: 'Michael',
         lastName: 'Wilson',
         email: 'michael@example.com',
         isActivated: false,
         password: 'password6',
         sex: 'men',
         phone: '9876541230',
         roles: ['Admin'],
      },
      {
         firstName: 'Sarah',
         lastName: 'Martinez',
         email: 'sarah@example.com',
         isActivated: true,
         password: 'password7',
         sex: 'women',
         phone: '4567891230',
         roles: ['User'],
      },
      {
         firstName: 'David',
         lastName: 'Garcia',
         email: 'david@example.com',
         isActivated: true,
         password: 'password8',
         sex: 'men',
         phone: '1112223333',
         roles: ['User'],
      },
      {
         firstName: 'Olivia',
         lastName: 'Lopez',
         email: 'olivia@example.com',
         isActivated: false,
         password: 'password9',
         sex: 'women',
         phone: '9998887777',
         roles: ['User'],
      },
      {
         firstName: 'James',
         lastName: 'Rodriguez',
         email: 'james@example.com',
         isActivated: true,
         password: 'password10',
         sex: 'men',
         phone: '7778889999',
         roles: ['Admin'],
      },
      {
         firstName: 'John',
         lastName: 'Doe',
         email: 'john@example.com',
         isActivated: true,
         password: 'password1',
         sex: 'men',
         phone: '1234567890',
         roles: ['Admin'],
      },
      {
         firstName: 'Jane',
         lastName: 'Smith',
         email: 'jane@example.com',
         isActivated: true,
         password: 'password2',
         sex: 'women',
         phone: '9876543210',
         roles: ['User'],
      },
      {
         firstName: 'Alice',
         lastName: 'Johnson',
         email: 'alice@example.com',
         isActivated: false,
         password: 'password3',
         sex: 'women',
         phone: '5556667777',
         roles: ['Admin'],
      },
      {
         firstName: 'Bob',
         lastName: 'Brown',
         email: 'bob@example.com',
         isActivated: true,
         password: 'password4',
         sex: 'men',
         phone: '4443332222',
         roles: ['User'],
      },
      {
         firstName: 'Emily',
         lastName: 'Davis',
         email: 'emily@example.com',
         isActivated: true,
         password: 'password5',
         sex: 'women',
         phone: '1231231234',
         roles: ['User'],
      },
      {
         firstName: 'Michael',
         lastName: 'Wilson',
         email: 'michael@example.com',
         isActivated: false,
         password: 'password6',
         sex: 'men',
         phone: '9876541230',
         roles: ['Admin'],
      },
      {
         firstName: 'Sarah',
         lastName: 'Martinez',
         email: 'sarah@example.com',
         isActivated: true,
         password: 'password7',
         sex: 'women',
         phone: '4567891230',
         roles: ['User'],
      },
      {
         firstName: 'David',
         lastName: 'Garcia',
         email: 'david@example.com',
         isActivated: true,
         password: 'password8',
         sex: 'men',
         phone: '1112223333',
         roles: ['User'],
      },
      {
         firstName: 'Olivia',
         lastName: 'Lopez',
         email: 'olivia@example.com',
         isActivated: false,
         password: 'password9',
         sex: 'women',
         phone: '9998887777',
         roles: ['User'],
      },
      {
         firstName: 'James',
         lastName: 'Rodriguez',
         email: 'james@example.com',
         isActivated: true,
         password: 'password10',
         sex: 'men',
         phone: '7778889999',
         roles: ['Admin'],
      },
   ];
   //* довжина для пагінації
   const [page, setPage] = useState(0);
   const rowsPerPage = 5;
   const usersLength = usersData.length;

   return (
      <ColorBlock yourStyleBox={stBoxAllUsers} yourStyleContainer={stContainerAllUsers} boxChildren={
         <div>
            <TableContainer component={Paper} sx={{ boxShadow: 'none' }}
            >
               <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                     <TableRow>
                        {['User', 'Email', 'Phone', 'Roles', 'Activated', 'Action'].map((label) => (
                           <TableCell key={label} sx={{ color: Color.Orange }} align={label === 'User' ? "left" : "center"}>
                              {label}
                           </TableCell>
                        ))}
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {usersData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user) => (
                        <TableRow key={user.firstName} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                           {['firstName', 'email', 'phone', 'roles', 'isActivated'].map((field, index) => (
                              <TableCell
                                 key={field}
                                 align={index === 0 ? "left" : "center"}
                                 sx={{ width: '16%' }}
                              >
                                 {field === 'firstName' ? `${user.firstName} ${user.lastName}` : field === 'isActivated' ? (user.isActivated ? 'Yes' : 'No') : user[field as keyof User]}
                              </TableCell>
                           ))}

                           <TableCell align="center" sx={{ padding: 0 }}>
                              <ButtonGroup variant="outlined" aria-label="Loading button group">
                                 <ColorButton sx={actionBtnAllUser} typecolor={Color.BlurOrange} typecolorhover={Color.Orange}>Edit</ColorButton>
                                 <ColorButton onClick={handleOpen} sx={actionBtnAllUser} typecolor={Color.BlurOrange} typecolorhover={Color.Orange}>Delete</ColorButton>
                              </ButtonGroup>
                           </TableCell>
                        </TableRow>
                     ))}
                  </TableBody>

               </Table>
               <Stack spacing={2}>
                  <Pagination
                     count={Math.ceil(usersLength / rowsPerPage)}
                     page={page + 1}
                     onChange={(_, value) => setPage(value - 1)}
                     shape="rounded"
                  />
               </Stack>
            </TableContainer>
            <Modal
               open={open}
               onClose={handleClose}
               aria-labelledby="modal-modal-title"
               aria-describedby="modal-modal-description"
               sx={{ backdropFilter: 'blur(3px)' }}
            >
               <Box sx={stBoxModalWindow}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                     Do you really want to make changes?
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                     If you press this, it will delete the user!
                  </Typography>
                  <ButtonGroup
                     variant="outlined"
                     aria-label="Loading 
                                 button group"
                  >
                     <ColorButton onClick={handleClose} sx={actionBtnAllUserModal} typecolor={Color.MediumSilver} typecolorhover={Color.LiteSilver}>Close</ColorButton>
                     <ColorButton sx={actionBtnAllUserModal} typecolor={Color.Brown} typecolorhover={Color.BlurBrown}>Delete</ColorButton>
                  </ButtonGroup>
               </Box>
            </Modal>
         </div >
      } containerChild={
         <Grid display='flex'
            alignItems='center'>
            <h2> Users</h2>
            <GroupIcon sx={iconUsersAllUsers} />
         </Grid>
      }></ColorBlock >
   )
}
