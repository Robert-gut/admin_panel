import {Link} from 'react-router-dom'

import Box from '@mui/material/Box'
import {styled, ThemeProvider, createTheme} from '@mui/material/styles'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Paper from '@mui/material/Paper'

// Icons
import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonIcon from '@mui/icons-material/Person'
import ContentPasteIcon from '@mui/icons-material/ContentPaste'
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot'
import ArticleIcon from '@mui/icons-material/Article'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import NotificationsIcon from '@mui/icons-material/Notifications'
import LanguageIcon from '@mui/icons-material/Language'

const data = [
   {icon: <DashboardIcon />, label: 'Dashboard', path: '/dashboard'},
   {icon: <PersonIcon />, label: 'User Profile', path: '/dashboard1'},
   {icon: <ContentPasteIcon />, label: 'Table List', path: '/dashboard12'},
   {icon: <ArticleIcon />, label: 'Typography', path: '/dashboard121'},
   {icon: <ScatterPlotIcon />, label: 'Icons', path: '/dashboard133'},
   {icon: <LocationOnIcon />, label: 'Maps', path: '/dashboard111111'},
   {icon: <NotificationsIcon />, label: 'Notifications', path: '/dashboard112313'},
   {icon: <LanguageIcon />, label: 'RTL Support', path: '/dashboard1232323'},
]

const FireNav = styled(List)<{component?: React.ElementType}>({
   '& .MuiListItemButton-root': {
      paddingLeft: 24,
      paddingRight: 24,
   },
   '& .MuiListItemIcon-root': {
      minWidth: 0,
      marginRight: 16,
   },
   '& .MuiSvgIcon-root': {
      fontSize: 20,
   },
})

export default function Sidebar() {
   return (
      <Box sx={{display: 'flex', height: '100vh', position: 'fixed'}}>
         <ThemeProvider
            theme={createTheme({
               components: {
                  MuiListItemButton: {
                     defaultProps: {
                        disableTouchRipple: true,
                     },
                  },
               },
               palette: {
                  mode: 'dark',
                  primary: {main: 'rgb(102, 157, 246)'},
                  background: {paper: 'rgb(5, 30, 52)'},
               },
            })}
         >
            <Paper elevation={0} sx={{maxWidth: 256}}>
               <FireNav component='nav' disablePadding>
                  <ListItemButton component='a' href='#customized-list'>
                     <ListItemIcon sx={{fontSize: 20}}>
                        <img
                           src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png'
                           width={20}
                           height={20}
                        />
                     </ListItemIcon>
                     <ListItemText
                        sx={{my: 0, p: 1}}
                        primary='CREATIVE TEAM'
                        primaryTypographyProps={{
                           fontSize: 18,
                           fontWeight: 'medium',
                           letterSpacing: 0,
                        }}
                     />
                  </ListItemButton>

                  <Divider variant='middle' />
                  <Box sx={{}}>
                     {data.map((item) => (
                        <Link key={item.label} to={item.path} style={{textDecoration: 'none', color: 'inherit'}}>
                           <ListItemButton sx={{py: 2, minHeight: 32, color: 'rgba(255,255,255,.8)', '&:hover': {}}}>
                              <ListItemIcon sx={{color: 'inherit'}}>{item.icon}</ListItemIcon>
                              <ListItemText primary={item.label} primaryTypographyProps={{fontSize: 16, fontWeight: 'medium'}} />
                           </ListItemButton>
                        </Link>
                     ))}
                  </Box>
               </FireNav>
            </Paper>
         </ThemeProvider>
      </Box>
   )
}

// export default Sidebar
