import { Box, Grid } from "@mui/material";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer'
import { AllUsers } from "../../pages/all-users/allUsers";


function Admin() {
   return (
      <Box sx={{ flexGrow: 1 }}>
         <Grid container>
            <Grid item xs={2}>
               <Sidebar />
            </Grid>
            <Grid item xs={10}>
               <Header />
               <AllUsers />
               {/* <h1>Admin</h1> */}
               {/* <h1>Admin</h1> */}
               {/* <h1>Admin</h1> */}
               <Footer />
            </Grid>
         </Grid>
      </Box>
   );
}

export default Admin;
