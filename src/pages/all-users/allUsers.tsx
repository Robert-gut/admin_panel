import { Color } from "../../Types/enum"
import { ColorBlock } from "../../components/ColorBlock/ColorBlock"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, ButtonGroup, Grid, Pagination, Stack } from "@mui/material";
import { ColorButton, actionBtnAllUser, actionBtnAllUserModal, iconUsersAllUsers, stBoxAllUsers, stBoxTableAndStackAllUsers, stContainerAllUsers } from "../../Types/sx";
import { useState } from "react";
import GroupIcon from '@mui/icons-material/Group';
import { User } from "../../Types/interface";
import { CustomModalWindow } from "../../components/CustomModalWindow/CustomModalWindow";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export const AllUsers = () => {

   const usersData: User[] = [
      {
         id: 1,
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
         id: 2,
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
         id: 3,
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
         id: 4,
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
         id: 5,
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
         id: 6,
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
         id: 7,
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
         id: 8,
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
         id: 9,
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
         id: 10,
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
         id: 11,
         firstName: 'Emma',
         lastName: 'Johnson',
         email: 'emma@example.com',
         isActivated: true,
         password: 'password11',
         sex: 'women',
         phone: '1112223334',
         roles: ['User'],
      },
      {
         id: 12,
         firstName: 'Michael',
         lastName: 'Brown',
         email: 'michael@example.com',
         isActivated: false,
         password: 'password12',
         sex: 'men',
         phone: '2223334445',
         roles: ['Admin'],
      },
      {
         id: 13,
         firstName: 'Sophia',
         lastName: 'Garcia',
         email: 'sophia@example.com',
         isActivated: true,
         password: 'password13',
         sex: 'women',
         phone: '3334445556',
         roles: ['User'],
      },
      {
         id: 14,
         firstName: 'William',
         lastName: 'Martinez',
         email: 'william@example.com',
         isActivated: true,
         password: 'password14',
         sex: 'men',
         phone: '4445556667',
         roles: ['User'],
      },
      {
         id: 15,
         firstName: 'Olivia',
         lastName: 'Taylor',
         email: 'olivia@example.com',
         isActivated: false,
         password: 'password15',
         sex: 'women',
         phone: '5556667778',
         roles: ['Admin'],
      },
      {
         id: 16,
         firstName: 'James',
         lastName: 'Miller',
         email: 'james@example.com',
         isActivated: true,
         password: 'password16',
         sex: 'men',
         phone: '6667778889',
         roles: ['User'],
      },
      {
         id: 17,
         firstName: 'Charlotte',
         lastName: 'Anderson',
         email: 'charlotte@example.com',
         isActivated: true,
         password: 'password17',
         sex: 'women',
         phone: '7778889990',
         roles: ['User'],
      },
      {
         id: 18,
         firstName: 'Michael',
         lastName: 'Wilson',
         email: 'michael@example.com',
         isActivated: false,
         password: 'password18',
         sex: 'men',
         phone: '8889990001',
         roles: ['Admin'],
      }
   ];

   //* відкриття та закриття модального вікна
   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   //* довжина для пагінації
   const [page, setPage] = useState(0);
   const rowsPerPage = 5;
   const usersLength = usersData.length;
   function onChange(userId: number) {
      console.log(userId);
   }

   const stUserIconBox = {
      display: 'flex',
      alignItems: 'center'
   }
   return (
      <ColorBlock yourStyleBox={stBoxAllUsers} yourStyleContainer={stContainerAllUsers} boxChildren={
         <div>
            <TableContainer component={Paper} sx={{ boxShadow: 'none' }}
            >
               <Box sx={stBoxTableAndStackAllUsers}>
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
                                    {field === 'firstName' ? (
                                       <Box sx={stUserIconBox}>
                                          <AccountCircleIcon /> {user.firstName.charAt(0)} {user.lastName}
                                       </Box>
                                    ) : (
                                       field === 'isActivated' ? (user.isActivated ? 'Yes' : 'No') : user[field as keyof User]
                                    )}


                                 </TableCell>
                              ))}

                              <TableCell align="center" sx={{ padding: 0 }}>
                                 <ButtonGroup variant="outlined" aria-label="Loading button group">
                                    <ColorButton onClick={() => onChange(user.id)} sx={actionBtnAllUser} typecolor={Color.BlurOrange} typecolorhover={Color.Orange}>Edit</ColorButton>
                                    <ColorButton onClick={handleOpen} sx={actionBtnAllUser} typecolor={Color.BlurOrange} typecolorhover={Color.Orange}>Delete</ColorButton>
                                 </ButtonGroup>
                              </TableCell>
                           </TableRow>
                        ))}
                     </TableBody>
                  </Table>
                  <Stack spacing={2}
                     sx={{ flex: '0 0 auto' }}

                  >
                     <Pagination
                        count={Math.ceil(usersLength / rowsPerPage)}
                        page={page + 1}
                        onChange={(_, value) => setPage(value - 1)}
                        shape="rounded"
                     />
                  </Stack>
               </Box>
               <CustomModalWindow childH1={<h3>Do you really want to make changes?</h3>} childP={<p>If you press this, it will delete the user!</p>} handleClose={handleClose} open={open} childPropsBtn={<ButtonGroup
                  variant="outlined"
                  aria-label="Loading 
                   button group"
               >
                  <ColorButton onClick={handleClose} sx={actionBtnAllUserModal} typecolor={Color.MediumSilver} typecolorhover={Color.LiteSilver}>Close</ColorButton>
                  <ColorButton sx={actionBtnAllUserModal} typecolor={Color.Brown} typecolorhover={Color.BlurBrown}>Delete</ColorButton>
               </ButtonGroup>} />
            </TableContainer>
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
