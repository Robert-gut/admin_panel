import { Box, Grid } from "@mui/material";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer'
import { AllUsers } from "../../pages/all-users/allUsers";
import EditProfile from "../../pages/EditProfile/EditProfile";


function Admin() {
   return (
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
         <Grid container sx={{ flexGrow: 1 }}>
            <Grid item style={{ width: "260px" }}>
               <Sidebar />
            </Grid>
            <Grid item xs sx={{ display: 'flex', flexDirection: 'column' }}>
               <Header />
               <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
                  {/* <AllUsers /> */}
                  <EditProfile />
               </Box>
               <Footer />
            </Grid>
         </Grid>
      </Box>
   );
}

export default Admin;
