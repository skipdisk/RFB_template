import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth, signInWithGoogle } from '../../firebase/fbConfig'
// Material Ui Components
import { Avatar } from '@material-ui/core'
import { Grid } from '@material-ui/core'

import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { loginPageStyle } from './login.styles'
import { Redirect } from 'react-router-dom'
//import GoogleButton from "react-google-button";

const LogIn = ({ currentUser }) => {
  const classes = loginPageStyle()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = e => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }
  const handleSubmit = async event => {
    event.preventDefault()

    try {
      await auth.signInWithEmailAndPassword(email, password)
      // clears state if success
      this.setState({ email: '', password: '' })
    } catch (error) {
      console.log(error)
    }
  }
  console.log(currentUser)
  if (currentUser) return <Redirect to='/' />
  return (
    <Container component='main' maxWidth='xs'>
      <div className={classes.overlay}>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography style={{ color: 'white' }} component='h1' variant='h5'>
            Log In
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit} noValidate>
            <TextField
              margin='normal'
              required
              fullWidth
              value={email}
              id='email'
              label='Email'
              name='email'
              autoFocus
              onChange={e => setEmail(e.target.value)}
              InputLabelProps={{
                classes: {
                  root: classes.formInput,
                  underline: classes.underline
                }
              }}
              InputProps={{
                classes: {
                  root: classes.formInput,
                  underline: classes.underline
                }
              }}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              value={password}
              type='password'
              id='password'
              label='Password'
              name='password'
              autoFocus
              onChange={e => setPassword(e.target.value)}
              InputLabelProps={{
                classes: {
                  root: classes.formInput,
                  underline: classes.underline
                }
              }}
              InputProps={{
                classes: {
                  root: classes.formInput,
                  underline: classes.underline
                }
              }}
            />

            <Button
              type='submit'
              fullWidth
              color='inherit'
              variant='contained'
              className={classes.submit}
            >
              Log In
            </Button>
          </form>
        </div>
        <Typography className={classes.bottomLink}>
          <Link class={classes.bottomLinkText} to='/signup'>
            Don't have an account?
          </Link>
        </Typography>
      </div>
    </Container>
  )
}

export default LogIn
