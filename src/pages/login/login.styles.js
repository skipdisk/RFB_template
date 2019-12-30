import { makeStyles } from '@material-ui/core/styles'

import img from '../../assets/splashscreen.jpg'

export const loginPageStyle = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundImage: `url('${img}')`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      height: '100%'
    }
  },
  paper: {
    margin: '10%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#6432ed'
  },
  form: {
    maxWidth: '270px', // Fix IE 11 issue.
    marginTop: theme.spacing(2)
  },
  formInput: {
    color: 'white !important'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: '#130422',
    opacity: 0.8
  },
  underline: {
    color: 'white !important',
    borderColor: 'white ! important',
    borderBottomColor: 'white !important'
  },
  submit: {
    margin: theme.spacing(5, 0, 2),
    backgroundColor: '#6432ed',
    color: 'white',
    '&:hover': {
      backgroundColor: theme.palette.common.white,
      color: '#6432ed'
    },
    borderRadius: '50px'
  },
  bottomLink: {
    color: 'white',
    textAlignVertical: 'center',
    textAlign: 'center'
  },
  bottomLinkText: {
    textDecoration: 'none',
    color: 'white',
    '&:hover': {
      color: '#6432ed'
    }
  }
}))
