import { Box, Grid } from "@mui/material";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer'


function Admin() {
  return (
    <Box sx={{flexGrow: 1}}>
      <Grid container>
        <Grid item style={{width: "290px"}}>
          <Sidebar />
        </Grid>
        <Grid item xs>
          <Header />
          {/* <h1>Admin</h1> */}
          {/* <h1>Admin</h1> */}
          {/* <h1>Admin</h1> */}
          <Footer/>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Admin;
