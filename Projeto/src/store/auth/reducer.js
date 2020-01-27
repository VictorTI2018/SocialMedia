import {
    USER_LOGGED_IN,
    USER_LOGGED_OUT
} from '../auth/types'

const initialState = {
    username: null,
    email: null,
    token: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGGED_IN:
            return {
                ...state,
                username: action.payload.username,
                email: action.payload.email,
                token: action.payload.token,
            }
        case USER_LOGGED_OUT:
            return {
                ...initialState
            }

        default:
            return state
    }
}

export default reducer