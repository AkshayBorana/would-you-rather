import { getInitialData } from '../utils/API';
import setAuthUser from './authUser';
import setUsers from './users';
import setQuestions from './questions';

// Thunk Action creator...
export default function handleInitailData() {
    return (dispatch) => {
        return getInitialData()
                .then(({users, questions}) => {
                    // get users and questions and adding them to the Redux store...
                    dispatch(setUsers(users));
                    dispatch(setQuestions(questions));
                })
    }
}
