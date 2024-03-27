import { Box, Grid } from "@mui/material";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer'


function Admin() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Grid container sx={{ flexGrow: 1 }}>
        <Grid item style={{ width: "260px" }}>
          <Sidebar/>
        </Grid>
        <Grid item xs sx={{ display: 'flex', flexDirection: 'column' }}>
          <Header />
          <Footer />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Admin;
