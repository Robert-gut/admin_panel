import PhoneIcon from '@mui/icons-material/Phone';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { ColorBlock } from "../../components/ColorBlock/ColorBlock";
import WcIcon from '@mui/icons-material/Wc';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ManIcon from '@mui/icons-material/Man';
import EditIcon from '@mui/icons-material/Edit';
 const profile = () => {
   return (
          <ColorBlock yourStyleBox={{
            width:'90%'}}  

            yourStyleContainer={{
            width:'50%',
            marginLeft:'25%',
            justifyContent:'center',
            display:'flex',
            alignItems:'center'}}
            boxChildren={<div>
            <List sx={{ width: '100%',display:'flex',flexDirection:'column',justifyContent:'start', bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AlternateEmailIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Email" secondary="yourEmail@gmail.com" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WcIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Sex" secondary="binar" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PhoneIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Phone" secondary="0000000000" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ManIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Role" secondary="role" />
      </ListItem>
      <Box sx={{display:'flex',justifyContent:'end'}}>
          <IconButton aria-label="settings">
            <EditIcon sx={{width:40,height:40}}/>
          </IconButton>
      </Box>
    </List>
          </div>} containerChild={<span>firstname and lastname</span>}></ColorBlock>
        );
}

export default profile