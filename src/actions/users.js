export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_USERS_QUESTION = 'ADD_USERS_QUESTION';

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function addUsersQuestion({id, user}) {
    return {
        type: ADD_USERS_QUESTION,
        id,
        user
    }
}