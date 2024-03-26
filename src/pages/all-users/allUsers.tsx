import { Color } from "../../Types/enum"
import { ColorBlock } from "../../components/ColorBlock/ColorBlock"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
export const AllUsers = () => {
   const styles = {
      width: '80%',

   }
   const styles1 = {
      backgroundColor: Color.Orange,
      width: '20%',
   }



   // const rows = [
   //    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
   //    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
   //    createData('Eclair', 262, 16.0, 24, 6.0),
   //    createData('Cupcake', 305, 3.7, 67, 4.3),
   //    createData('Gingerbread', 356, 16.0, 49, 3.9),
   // ];
   const usersData = [
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


   return (
      <ColorBlock yourStyleBox={styles} yourStyleContainer={styles1} boxChildren={
         <div>
            <TableContainer component={Paper} sx={{ boxShadow: 'none' }}
            >
               <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                     <TableRow>
                        {['User', 'Email', 'Phone', 'Roles', 'Activated', ''].map((label) => (
                           <TableCell key={label} sx={{ color: Color.Orange }} align={label === 'User' ? "left" : "center"}>
                              {label}
                           </TableCell>
                        ))}
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {usersData.map((user) => (
                        <TableRow
                           key={user.firstName}
                           sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                           <TableCell component="th" scope="row">
                              {`${user.firstName} ${user.lastName}`}
                           </TableCell>

                           <TableCell align="center">{user.email}
                           </TableCell>
                           <TableCell align="center">{user.phone}</TableCell>
                           <TableCell align="center">{user.roles}</TableCell>
                           <TableCell align="center">{user.isActivated ? 'Yes' : 'No'}</TableCell>
                           <TableCell align="center">

                           </TableCell>
                        </TableRow>
                     ))}
                  </TableBody>
               </Table>
            </TableContainer>
         </div >
      } containerChild={
         < h1 > Users</ h1>
      }></ColorBlock >
   )
}
