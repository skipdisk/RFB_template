import React, { Fragment } from 'react'
import clsx from 'clsx'
import { Link, Switch, Route, Redirect, withRouter } from 'react-router-dom'
import {
  Button,
  Drawer,
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  Typography,
  Divider,
  IconButton
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import mainRoutes from './utils/routes'
import { layoutStyles } from './layout.styles'
import LogoutButton from './utils/logout.button'

const switchRoutes = (
  <Switch>
    {mainRoutes.map((prop, key) => {
      if (prop.redirect)
        return <Redirect from={prop.path} to={prop.pathTo} key={key} />
      else {
        return prop.exact ? (
          <Route exact path={prop.path} component={prop.component} key={key} />
        ) : (
          <Route path={prop.path} component={prop.component} key={key} />
        )
      }
    })}
  </Switch>
)

const Navigation = ({ currentUser, location }) => {
  console.log(currentUser)
  const classes = layoutStyles()
  const [open, setOpen] = React.useState(false)
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const renderContent = () => {
    switch (currentUser) {
      case null:
        return
      case false:
        return (
          <Button>
            <Link to='/login' className={classes.navButton}>
              Login
            </Link>
          </Button>
        )
      default:
        return (
          <Fragment>
            <Typography className={classes.welcome}>
              Welcome {currentUser.firstName}
            </Typography>
            <LogoutButton />
          </Fragment>
        )
    }
  }

  const getRoute = () => {
    return location.pathname
  }

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index)
  }

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  // if (!auth.isAuthenticated) return <Redirect to='/login' />
  if (currentUser && location.pathname === '/login')
    return <Redirect to='/dashboard' />
  if (currentUser && location.pathname === '/signup')
    return <Redirect to='/dashboard' />
  if (location.pathname === '/') return <Redirect to='/dashboard' />

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            className={clsx(classes.menuButton, {
              [classes.hide]: open
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.brand} variant='h6' noWrap>
            BixMessage
          </Typography>
          {renderContent()}
        </Toolbar>
      </AppBar>
      <Drawer
        variant='permanent'
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {mainRoutes.map((prop, index) => {
            if (!prop.hideFromDrawer) {
              return (
                <Link to={prop.path} className={classes.menuItems} key={index}>
                  <ListItem
                    button
                    key={prop.name}
                    selected={selectedIndex === index}
                    onClick={event => handleListItemClick(event, index)}
                  >
                    <ListItemIcon>
                      <prop.icon />
                    </ListItemIcon>
                    <ListItemText primary={prop.name} />
                  </ListItem>
                </Link>
              )
            } else return null
          })}
        </List>
      </Drawer>
      <div className={classes.content}>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open
          })}
        >
          {getRoute() ? (
            <div className={classes.content}>
              <div className={classes.container}>{switchRoutes}</div>
            </div>
          ) : (
            <div className={classes.map}>{switchRoutes}</div>
          )}
        </main>
      </div>
    </div>
  )
}

export default withRouter(Navigation)
