import { Box, Grid } from "@mui/material";
import Sidebar from "../../components/Sidebar/Sidebar";

function Admin() {
  return (
    <Box sx={{flex: 1}}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={9}>
          <h1>Admin</h1>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Admin;
