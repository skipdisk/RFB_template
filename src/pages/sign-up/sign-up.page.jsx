import React, { useState } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { auth, createUserProfileDocument } from '../../firebase/fbConfig'

// Material UI
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { signupPageStyle } from './sign-up.styles'

const SignUpPage = ({ currentUser }) => {
  const classes = signupPageStyle()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const clearState = () => {
    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }

  const handleSubmit = async e => {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      )
      await createUserProfileDocument(user, { firstName, lastName })
      clearState()
    } catch (error) {
      console.error(error)
    }
  }

  if (currentUser) return <Redirect to='/' />
  return (
    <Container component='main' maxWidth='xs'>
      <div className={classes.overlay}>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography style={{ color: 'white' }} component='h1' variant='h5'>
            Sign up
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  autoComplete='fname'
                  name='firstName'
                  required
                  fullWidth
                  id='firstName'
                  label='First Name'
                  autoFocus
                  onChange={e => setFirstName(e.target.value)}
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
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id='lastName'
                  label='Last Name'
                  name='lastName'
                  autoComplete='lname'
                  onChange={e => setLastName(e.target.value)}
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
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  autoComplete='email'
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
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='username'
                  label='Username'
                  name='username'
                  autoComplete='username'
                  onChange={e => setUsername(e.target.value)}
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
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  autoComplete='current-password'
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
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='confirmPassword'
                  label='Confirm Password'
                  type='password'
                  id='confirmPassword'
                  onChange={e => setConfirmPassword(e.target.value)}
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
                />
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
            >
              Sign Up
            </Button>
          </form>
        </div>
        <Typography className={classes.bottomLink}>
          <Link className={classes.bottomLinkText} to='/login'>
            Already have an account?
          </Link>
        </Typography>
      </div>
    </Container>
  )
}

export default SignUpPage
