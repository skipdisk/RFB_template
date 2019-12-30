import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { setCurrentUser } from './redux/user/user.action'
import { auth, createUserProfileDocument } from './firebase/fbConfig'
import { selectCurrentUser } from './redux/user/user.selectors'

import LoginPage from './pages/login/login.page.jsx'
import SignUpPage from './pages/sign-up/sign-up.page'
import Navigation from './layout/layout'

const App = ({ currentUser }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        // calls our createUserProfile function and passing in userAuth if it exists
        const userRef = await createUserProfileDocument(userAuth)

        //sets currentUser in redux store whenever snapshot updates
        userRef.onSnapshot(snapshot => {
          dispatch(
            setCurrentUser({
              // id: snapshot.id,
              // use .data() what the data is in snapshot
              ...snapshot.data()
            })
          )
        })
      }
      // dispatch(setCurrentUser(userAuth))
    })
    return () => unsubscribe()
  }, [dispatch])
  //checks authentication state and only shows login page if not authenticated
  const renderLogin = () => {
    if (currentUser) {
      return <Navigation currentUser={currentUser} />
    } else {
      return (
        <Switch>
          <Route
            path='/login'
            render={props => <LoginPage currentUser={currentUser} {...props} />}
          />
          <Route
            path='/signup'
            render={props => (
              <SignUpPage currentUser={currentUser} {...props} />
            )}
          />
        </Switch>
      )
    }
  }

  return <div className='App'>{renderLogin()}</div>
}

const mapStateToProps = state => {
  return {
    currentUser: selectCurrentUser(state)
  }
}

export default connect(mapStateToProps)(App)
