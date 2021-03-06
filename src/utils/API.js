import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer
    } from './_DATA';

// To get users and questions data...
export function getInitialData () {
    return Promise.all([
        _getUsers(),
        _getQuestions()
    ]).then(([users, questions]) => (
        {
            users,
            questions
        }
    ))
}

export function saveQuestion(question) {
    return _saveQuestion(question);
}