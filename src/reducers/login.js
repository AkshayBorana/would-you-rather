import { SET_AUTH_USER } from '../actions/login';

export default function login (state = null, action) {
    switch(action.type) {
        case SET_AUTH_USER:
            return action.id
        default:
            return state
    }
}