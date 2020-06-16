import { addAnswerQuestion } from "./questions";
// import { saveQuestion } from "../utils/API";
import { _saveQuestionAnswer } from "../utils/_DATA";

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_ANSWER_USER = 'ADD_ANSWER_USER';

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function addAnswerUser(authUser, qid, answer) {
    return {
        type: ADD_ANSWER_USER,
        authUser,
        qid,
        answer
    }
}

export function handleSaveQuestionsAnswer(authUser, qid, answer) {
    return (dispatch) => {
        return _saveQuestionAnswer({
            authedUser: authUser,
            qid,
            answer})
            .then(() => {
                dispatch(addAnswerUser(authUser, qid, answer));
                dispatch(addAnswerQuestion(authUser, qid, answer));
            })
    }
}