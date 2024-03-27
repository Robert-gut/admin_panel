import { BottomNavigation, BottomNavigationAction, Stack, Typography, Box } from '@mui/material'
import { Home, Apartment, ViewDay, MenuBook } from '@mui/icons-material'
import { Link } from 'react-router-dom'

interface NavItem {
   to: string
   label: string
   icon: JSX.Element
}

const Footer = () => {
   const navItems: NavItem[] = [
      { to: '/', label: 'Home', icon: <Home /> },
      { to: '/company', label: 'Company', icon: <Apartment /> },
      { to: '/portfolio', label: 'Portfolio', icon: <ViewDay /> },
      { to: '/blog', label: 'Blog', icon: <MenuBook /> },
   ]

   return (
      <footer style={{ position: 'relative', bottom: 0 }}>
         <BottomNavigation
            sx={{
               justifyContent: 'space-between',
               alignItems: 'center',
               borderTop: '1px solid #D3D3D3',
               bottom: 0,
               background: '#eee',
               p: 1,
            }}
         >
            <Stack direction='row' spacing={2}>
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
                           color: '#9c27b0',
                           transition: 'all .5s',
                        },
                        color: '#3c4858',
                        textTransform: 'uppercase',
                     }}
                  />
               ))}
            </Stack>

            <Box>
               <Typography component='p' sx={{ fontSize: { lg: '14px', xs: '10px' }, color: '#3c4858' }}>
                  ©2024{' '}
                  <Link to='https://www.creative-tim.com/?ref=mdr-footer&_ga=2.128611082.727702646.1711479330-801148342.1711124746' style={{ textDecoration: 'none' }}>
                     Creative Tim,
                  </Link>{' '}
                  made with love for a better web
               </Typography>
            </Box>
         </BottomNavigation>
      </footer>
   )
}

export default Footer
