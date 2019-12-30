import {
    UserActionTypes
} from './user.types'
const INITIAL_STATE = {
    authError: null,
    user: {}
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            };
        case UserActionTypes.SIGNOUT_SUCCESS:
            console.log('signout success');
            return state = INITIAL_STATE;
        default:
            return state;
    }
}

export default userReducer;