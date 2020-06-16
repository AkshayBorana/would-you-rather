import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { loginUser } from '../actions/authUser';
import QuestionsCard from './QuestionsCard';
// import Nav from './Nav';

class Home extends Component {

    state = {
        isQuestion: true
    }

    displayQuestions = () => {
        this.setState(() => ({
            isQuestion: !this.state.isQuestion
        }))
    }

    render() {

        const { unansweredQIds, answeredQIds }  = this.props;
        const { isQuestion } = this.state;

        return (
            <div>
                {/* <Nav /> */}
                <div className="qestion">
                    <button className="ques-btn" onClick={this.displayQuestions}>Unanswered Questions</button>
                    <button className="ques-btn" onClick={this.displayQuestions}>Answered Questions</button>

                    {
                        isQuestion ?
                            (
                                <ul className="answer-questions">
                                {
                                    unansweredQIds &&
                                    unansweredQIds.map(question => {
                                        return (
                                            <li className="question-list" key={question.id}>
                                                <QuestionsCard
                                                 question={question}
                                                 isQuestion={isQuestion}
                                                />
                                            </li>
                                        )
                                    })
                                }
                                </ul>
                            )
                            :
                            (
                                <ul className="questions-answered">
                                {
                                    answeredQIds &&
                                    answeredQIds.map(question => {
                                        return (
                                            <li className="question-list" key={question.id}>
                                                <QuestionsCard
                                                 question={question}
                                                 isQuestion={isQuestion}
                                                />
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            )
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({authUser, users, questions}) => {

    const userAnsweredQIds = Object.keys(users[authUser].answers);
    const unansweredQIds = Object.values(questions)
        .filter(question => !userAnsweredQIds.includes(question.id))
        .sort((a, b) => b.timestamp - a.timestamp);
    const answeredQIds = Object.values(questions)
        .filter(question => userAnsweredQIds.includes(question.id))
        .sort((a, b) => b.timestamp - a.timestamp);

    return {
        authUser,
        answeredQIds,
        unansweredQIds
    }
}

export default connect(mapStateToProps)(Home)