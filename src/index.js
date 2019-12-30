import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

// import setAuthorizationToken from './utils/setAuthorizationToken'
// import { setCurrentUser } from

import App from './App'
import { store, persistor } from './redux/store'

const theme = createMuiTheme({
  overrides: {
    MuiInput: {
      underline: {
        '&:before': {
          //underline color when textfield is inactive
          borderBottom: '1px solid #fff'
        },
        '&:hover:not($disabled):before': {
          //underline color when hovered
          borderBottom: '1px solid #6432ed'
        }
      }
    }
  },
  palette: {
    inherit: { main: '#171A1F' },
    default: { main: '#FFFFFF' },
    primary: { main: '#6432ed' },
    secondary: { main: '#21212e' }
  }
})

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <MuiThemeProvider theme={theme}>
          <App theme={theme} />
        </MuiThemeProvider>
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
