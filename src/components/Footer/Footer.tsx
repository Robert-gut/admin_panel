import {BottomNavigation, BottomNavigationAction, Stack, Typography, Box} from '@mui/material'
import {Home, Apartment, ViewDay, MenuBook} from '@mui/icons-material'
import {Link} from 'react-router-dom'

interface NavItem {
   to: string
   label: string
   icon: JSX.Element
}

const Footer = () => {
   const navItems: NavItem[] = [
      {to: '/', label: 'Home', icon: <Home />},
      {to: '/company', label: 'Company', icon: <Apartment />},
      {to: '/portfolio', label: 'Portfolio', icon: <ViewDay />},
      {to: '/blog', label: 'Blog', icon: <MenuBook />},
   ]

   return (
      <footer>
         <BottomNavigation
            sx={{
               justifyContent: 'center',
               flexDirection: 'column',
               gap: '15px',
               alignItems: 'center',
               borderTop: '1px solid #D3D3D3',
               position: 'fixed',
               bottom: 0,
               width: '100%',
               background: '#eee',
               p: 2,
               zIndex: 3,
            }}
         >
            <Stack direction='row' spacing={{xs: 2, md: 8}}>
               {navItems.map((item, index) => (
                  <BottomNavigationAction
                     key={index}
                     showLabel
                     component={Link}
                     to={item.to}
                     icon={item.icon}
                     label={item.label}
                     sx={{
                        '&:hover': {
                           color: '#6b6b92',
                           fontWeight: 'bold',
                           transition: 'all .5s',
                        },
                        color: '#455f7b',
                        textTransform: 'uppercase',
                     }}
                  />
               ))}
            </Stack>

            <Box>
               <Typography sx={{fontSize: {lg: '12px', xs: '10px'}, color: '#455f7b'}}>
                  ©2024 Creative Tim made with love for a better web
               </Typography>
            </Box>
         </BottomNavigation>
      </footer>
   )
}

export default Footer
