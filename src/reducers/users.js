import { RECEIVE_USERS, ADD_ANSWER_USER } from '../actions/users';
import { ADD_QUESTION } from '../actions/questions';

export default function users(state = {}, action) {
    switch(action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.author]: {
                    ...state[action.question.author],
                    questions: state[action.question.author].questions.concat([action.question.id])
                }
            }
        case ADD_ANSWER_USER:

        const { authUser, qid, answer } = action;

        return {
            ...state,
            [authUser]: {
                ...state[authUser],
                answers: {
                    ...state[authUser].answers,
                    [qid]: answer
                }
            }
        }
        default:
            return state
    }
}