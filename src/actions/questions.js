import { saveQuestion} from "../utils/API";
import { addUsersQuestion } from "./users";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';

export function receiveQuestions(questions) {
   return {
        type: RECEIVE_QUESTIONS,
        questions
   }
}

export function addQuestion(question) {
   return {
      type: ADD_QUESTION,
      question
   }
}

export function handleSaveQuestion(optionOne, optionTwo, authUser) {
   return (dispatch) => {
      return saveQuestion({optionOne, optionTwo, authUser})
               .then(res => {
                  dispatch(addQuestion(res));
                  dispatch(addUsersQuestion(res));
               })
   }
}