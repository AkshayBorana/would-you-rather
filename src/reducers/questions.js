import { RECEIVE_QUESTIONS } from '../actions/questions';
import { ADD_QUESTION, ADD_ANSWER_QUESTION } from '../actions/questions';

export default function questions(state = {}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION:
        return {
            ...state,
            [action.question.id]: action.question
        }
        case ADD_ANSWER_QUESTION:

        const { authUser, qid, answer } = action;

            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        ...state[qid][answer],
                        votes: [
                            ...state[qid][answer].votes,
                            authUser
                          ]
                    }
                }
            }
        default:
            return state
    }
}