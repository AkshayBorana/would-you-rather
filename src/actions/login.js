export const SET_AUTH_USER = 'SET_AUTH_USER';

export function loginUser (id) {
    return {
        type: SET_AUTH_USER,
        id
    }
}
