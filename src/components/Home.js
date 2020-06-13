import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authUser';
import QuestionsCard from './QuestionsCard';
import LeaderBoard from './LeaderBoard';
import NewPoll from './NewPoll';

class Home extends Component {

    state = {
        questionType: 'unanswered'
    }

    logout = () => {
        this.props.dispatch(loginUser(null))
    }

    render() {

        const { unansweredQIds, answeredQIds }  = this.props;
        // const { questionType } = this.state;

        return (
            <div>
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

                {/* Leader board.................................... */}

                <LeaderBoard />


                {/* New poll................................. */}

                <h2>New Poll</h2>
                <NewPoll />


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

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch
    }
}

export default connect(mapStateToProps)(Home)