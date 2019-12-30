import React from 'react'
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { signOut } from '../../redux/user/user.action'

const LogoutButton = ({ history }) => {
  const dispatch = useDispatch()
  return (
    <Button
      onClick={() => {
        dispatch(signOut())
      }}
      size='small'
      variant='contained'
      style={{
        backgroundColor: '#F44336',
        color: '#FFF',
        marginLeft: 10,
        marginRight: -13,
        fontSize: 10
      }}
    >
      {' '}
      Log Out
    </Button>
  )
}

export default withRouter(LogoutButton)
