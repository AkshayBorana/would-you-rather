import { getInitialData } from '../utils/API';
// import setAuthUser from './authUser';
import { receiveUsers } from './users';
import { receiveQuestions } from './questions';

// Thunk Action creator...
export function handleInitailData() {
    return (dispatch) => {
        return getInitialData()
                .then(({users, questions}) => {
                    // get users and questions and adding them to the Redux store...
                    dispatch(receiveUsers(users));
                    dispatch(receiveQuestions(questions));
                })
    }
}
