import { saveQuestion} from "../utils/API";
// import { addUsersQuestion } from "./users";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_ANSWER_QUESTION = 'ADD_ANSWER_QUESTION';

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

export function addAnswerQuestion(authUser, qid, answer) {
   return {
      type: ADD_ANSWER_QUESTION,
      qid,
      authUser,
      answer
   }
}

export function handleSaveQuestion(optionOne, optionTwo, authUser) {
   return (dispatch) => {
      return saveQuestion({
         optionOneText: optionOne,
         optionTwoText: optionTwo,
         author: authUser})
               .then(question => {
                  dispatch(addQuestion(question));
               })
   }
}
