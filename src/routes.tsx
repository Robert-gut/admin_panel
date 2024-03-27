// Icons
import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonIcon from '@mui/icons-material/Person'
import ContentPasteIcon from '@mui/icons-material/ContentPaste'
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot'
import ArticleIcon from '@mui/icons-material/Article'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import NotificationsIcon from '@mui/icons-material/Notifications'
import LanguageIcon from '@mui/icons-material/Language'

// pages
import Login from './pages/Login/Login'
// import addNewUser from './pages/addNewUser/addNewUser'

export interface IAdminRoute {
  path: string
  name: string
  icon: JSX.Element
  component?: JSX.Element
}


export const data: IAdminRoute[] = [
  {
    path: '/admin',
    name: 'Dashboard',
    icon: <DashboardIcon />,
    component: <Login/>
  },
  // {
  //   path: '/add-new-user',
  //   name: 'Add new User',
  //   icon: <DashboardIcon />,
  //   component: <addNewUser />
  // },
  {
    path: '/user-profile',
    name: 'User Profile',
    icon: <PersonIcon />,
    component: <Login/>
  },
  {
    path: '/table-list',
    name: 'All users',
    icon: <ContentPasteIcon />,
    component: <Login/>
  },
  {
    path: '/typography',
    name: 'Typography',
    icon: <ArticleIcon />,
    component: <Login/>
  },
  {
    path: '/icons',
    name: 'Icons',
    icon: <ScatterPlotIcon />,
    component: <Login/>
  },
  {
    path: '/maps',
    name: 'Maps',
    icon: <LocationOnIcon />,
    component: <Login/>
  },
  {
    path: '/notifications',
    name: 'Notifications',
    icon: <NotificationsIcon />,
    component: <Login/>
  },
  {
    path: '/rtl-support',
    name: 'RTL Support',
    icon: <LanguageIcon />,
    component: <Login/>
  },
]