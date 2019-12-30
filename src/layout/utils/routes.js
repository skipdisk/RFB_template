// @material-ui/icons
import DashboardIcon from '@material-ui/icons/Dashboard';
import WorkIcon from "@material-ui/icons/Work";


//importing pages to use with React router
import DashboardPage from '../../pages/dashboard/dashboard.page';
import LoginPage from '../../pages/login/login.page'
import SignupPage from '../../pages/sign-up/sign-up.page'


const mainRoutes = [{
    path: "/dashboard",
    name: "Dashboard",
    icon: DashboardIcon,
    component: DashboardPage
  },
  {
    path: "/login",
    name: "Login",
    icon: WorkIcon,
    component: LoginPage,
    hideFromDrawer: true
  },
  {
    path: "/signup",
    name: "Register",
    icon: WorkIcon,
    component: SignupPage,
    hideFromDrawer: true
  },
]

export default mainRoutes;