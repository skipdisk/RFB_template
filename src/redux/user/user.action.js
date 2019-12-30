import {
    UserActionTypes
} from './user.types'

import {
    auth
} from '../../firebase/fbConfig'

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})

export const signOut = () => {
    return (dispatch => {
        auth.signOut().then(() => {
            dispatch({
                type: UserActionTypes.SIGNOUT_SUCCESS
            })
        })
    })
}