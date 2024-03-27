import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles'

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import bgImage from '../../img/bgMui.jpg'

// Icons
import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonIcon from '@mui/icons-material/Person'
import ContentPasteIcon from '@mui/icons-material/ContentPaste'
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot'
import ArticleIcon from '@mui/icons-material/Article'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import NotificationsIcon from '@mui/icons-material/Notifications'
import LanguageIcon from '@mui/icons-material/Language'
import UnarchiveIcon from '@mui/icons-material/Unarchive'

const data = [
   { icon: <DashboardIcon />, label: 'Dashboard', path: '/admin' },
   { icon: <PersonIcon />, label: 'User Profile', path: '/user-profile' },
   { icon: <ContentPasteIcon />, label: 'Table List', path: '/table-list' },
   { icon: <ArticleIcon />, label: 'Typography', path: '/typography' },
   { icon: <ScatterPlotIcon />, label: 'Icons', path: '/icons' },
   { icon: <LocationOnIcon />, label: 'Maps', path: '/maps' },
   { icon: <NotificationsIcon />, label: 'Notifications', path: '/notifications' },
   { icon: <LanguageIcon />, label: 'RTL Support', path: '/rtl-support' },
]

const FireNav = styled(List)<{ component?: React.ElementType }>({
   '& .MuiListItemButton-root': {
      paddingLeft: 24,
      paddingRight: 24,
   },
   '& .MuiListItemIcon-root': {
      minWidth: 0,
      marginRight: 16,
   },
   '& .MuiSvgIcon-root': {
      fontSize: 24,
   },
})

export default function Sidebar() {
   return (
      <Box sx={{ flexGrow: 1, position: 'fixed', width: '260px' }}>
         <Paper
            elevation={0}
            sx={{
               position: 'relative',
               borderRadius: 0,
               backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.7)), url(${bgImage})`,
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               height: '100vh',
               width: '100%',
            }}
         >
            <FireNav component='nav' disablePadding>
               <ListItemButton component='a' href='#customized-list' sx={{ padding: '15px' }}>
                  <ListItemIcon sx={{ fontSize: 20 }}>
                     <img
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png'
                        width={20}
                        height={20}
                     />
                  </ListItemIcon>
                  <ListItemText
                     sx={{ my: 0, p: '5px 0px' }}
                     primary='CREATIVE TEAM'
                     primaryTypographyProps={{
                        fontSize: 18,
                        fontWeight: 'medium',
                        letterSpacing: 0,
                        color: 'white',
                     }}
                  />
               </ListItemButton>

               <Divider variant='middle' sx={{ backgroundColor: 'grey' }} />
               <Box sx={{ height: 'calc(100vh - 75px)', overflowY: 'auto',  position: 'relative'}}>
                  {data.map((item) => (
                     <Link key={item.label} to={item.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <ListItemButton
                           sx={{
                              margin: '10px 15px 0',
                              borderRadius: '4px',
                              padding: '8px 24px',
                              color: 'white',

                              '&:focus': { backgroundColor: '#00acc1' },
                              '&:active': { backgroundColor: '#00acc1' },
                           }}
                        >
                           <ListItemIcon sx={{ color: 'inherit' }}>{item.icon}</ListItemIcon>
                           <ListItemText primary={item.label} primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }} />
                        </ListItemButton>
                     </Link>
                  ))}
               </Box>
            </FireNav>
            <Link to={'/upgrade'} style={{ textDecoration: 'none', color: 'inherit', position: 'absolute', bottom: '15px', width: 'auto' }}>
               <ListItemButton
                  sx={{
                     margin: '10px 15px 0',
                     borderRadius: '4px',
                     padding: '8px 24px',
                     color: 'white',
                     backgroundColor: '#00acc1',
                     '&:focus': { backgroundColor: '#00acc1' },
                     '&:active': { backgroundColor: '#00acc1' },
                     '&:hover': { backgroundColor: '#00acc1' },
                  }}
               >
                  <ListItemIcon sx={{ color: 'inherit' }}>
                     <UnarchiveIcon />
                  </ListItemIcon>
                  <ListItemText primary='Upgrade To PRO' primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }} />
               </ListItemButton>
            </Link>
         </Paper>
      </Box>
   )
}
