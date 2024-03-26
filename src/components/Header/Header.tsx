import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Input from '@mui/material/Input';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';
import ButtonBase from '@mui/material/ButtonBase';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css'

const ariaLabel = { 'aria-label': 'searchInput' }

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [notificationsEl, setNotificationsEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isNotificationsOpen = Boolean(notificationsEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNotificationsOpen = (event: React.MouseEvent<HTMLElement>) => {
    setNotificationsEl(event.currentTarget);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleNotificationsClose = () => {
    setNotificationsEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const menuId = 'search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem className='Header-Menu-MenuItem' onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem className='Header-Menu-MenuItem' onClick={handleMenuClose}>Settings</MenuItem>
      <Divider sx={{ margin: '0 !important' }} />
      <MenuItem className='Header-Menu-MenuItem' onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
  )

  const mobileMenuId = 'search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Button size="large" color="inherit">
          <DashboardIcon />
        </Button>
        <p>Dashboard</p>
      </MenuItem>
      <MenuItem onClick={handleNotificationsOpen}>
        <Button
          size="large"
          color="inherit"
        >
          <Badge badgeContent={5} color="error">
            <NotificationsIcon />
          </Badge>
        </Button>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <Button
          size="large"
          color="inherit"
        >
          <AccountCircle />
        </Button>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const notificationsMenuId = 'notifications-menu';
  const renderNotificationsMenu = (
    <Menu
      anchorEl={notificationsEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      id={notificationsMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isNotificationsOpen}
      onClose={handleNotificationsClose}
    >
      <MenuItem className='Header-Menu-MenuItem' onClick={handleNotificationsClose}>Mike John responded to your email</MenuItem>
      <MenuItem className='Header-Menu-MenuItem' onClick={handleNotificationsClose}>You have 5 new tasks</MenuItem>
      <MenuItem className='Header-Menu-MenuItem' onClick={handleNotificationsClose}>You're now friend with Andrew</MenuItem>
      <MenuItem className='Header-Menu-MenuItem' onClick={handleNotificationsClose}>Another Notification</MenuItem>
      <MenuItem className='Header-Menu-MenuItem' onClick={handleNotificationsClose}>Another One</MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#eee', color: '#555', padding: '5px 0' }}>
        <Toolbar>
          <ButtonBase sx={{ borderRadius: '3px' }}>
            <Link
              href='#'
              underline='none'
              variant="h6"
              sx={{ display: { xs: 'none', sm: 'block', color: 'inherit', padding: '12px 30px', borderRadius: '3px' } }}
            >
              Dashboard
            </Link>
          </ButtonBase>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Input placeholder="Search" inputProps={ariaLabel} color='secondary' />
            <Button size="large" sx={{
              backgroundColor: '#fff',
              color: '#999',
              maxWidth: '41px',
              margin: '0px 1px' ,
              minWidth: '41px',
              borderRadius: '50%',
              boxShadow: '0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12)',
              '&:hover, &:focus': {
                boxShadow: '0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)',
                backgroundColor: '#fff'
                }
            }}>
              <SearchIcon sx={{ width: '18px' }} />
            </Button>
            <Box>
              <Button size="large" color="inherit" sx={{ maxWidth: '41px', minWidth: '41px', margin: '0px 1px' }}>
                <DashboardIcon sx={{ width: '18px' }} />
              </Button>
            </Box>
            <Button
              size="large"
              color="inherit"
              onClick={handleNotificationsOpen}
              sx={{ maxWidth: '41px', minWidth: '41px', margin: '0px 1px' }}
            >
              <Badge badgeContent={5} color="error" sx={{ "& .MuiBadge-badge": { fontSize: 9, height: 18, minWidth: 18 } }}>
                <NotificationsIcon sx={{ width: '18px' }} />
              </Badge>
            </Button>
            <Button
              size="large"
              onClick={handleProfileMenuOpen}
              color="inherit"
              sx={{ maxWidth: '41px', minWidth: '41px', margin: '0px 1px' }}
            >
              <PersonIcon sx={{ width: '18px' }} />
            </Button>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none', borderRadius: 0 } }}>
            <Button
              size="large"
              onClick={handleMobileMenuOpen}
              color="inherit"
              sx={{ borderRadius: '0%' }}
            >
              <MenuIcon sx={{ borderRadius: '0px' }} />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderNotificationsMenu}
      {renderMenu}
    </Box>
  );
}