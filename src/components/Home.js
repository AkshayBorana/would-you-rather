import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { loginUser } from '../actions/authUser';
import QuestionsCard from './QuestionsCard';
import Nav from './Nav';

class Home extends Component {

    state = {
        questionType: 'unanswered'
    }

    render() {

        const { unansweredQIds, answeredQIds }  = this.props;

        return (
            <div>
                <Nav />
                <div className="unanswered-qestion">
                    <h3>Unanswered Questions</h3>
                    <ul>
                        {
                            unansweredQIds &&
                            unansweredQIds.map(question => {
                                return (
                                    <li key={question.id}>
                                        <QuestionsCard
                                         question={question}
                                         questionType='unanswered'
                                        />
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="answered-qestion">
                    <h3>Answered Questions</h3>
                    <ul>
                        {
                            answeredQIds &&
                            answeredQIds.map(question => {
                                return (
                                    <li key={question.id}>
                                        <QuestionsCard
                                         question={question}
                                         questionType='answered'
                                        />
                                    </li>
                                )
                            })
                        }
                    </ul>
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