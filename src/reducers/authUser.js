import { LOGIN_USER, LOGOUT_USER } from '../actions/authUser';

export default function authUser (state = null, action) {
    switch(action.type) {
        case LOGIN_USER:
            return action.id
        case LOGOUT_USER:
            return null;
        default:
            return state
    }
}