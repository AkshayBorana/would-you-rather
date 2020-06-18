import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleSaveQuestionsAnswer } from '../actions/users';
import NotFound from './NotFound';

class AnswerPoll extends Component {

    state = {
        option: ''
    }

    handleCheckbox = (e) => {
        const { value } = e.target;
        this.setState(() => ({
            option: value
        }))
    }

    handleSubmit = (e, questionId) => {
        const { dispatch, authUser } = this.props;
        const { option } = this.state;
        e.preventDefault();
        dispatch(handleSaveQuestionsAnswer(authUser, questionId, option));

    }

    render () {

        const { questions, authUser, users } = this.props;
        const { id } = this.props.match.params;
        if(!Object.keys(questions).includes(id)) return (<NotFound />)

        const question = Object.values(questions).filter(q => q.id === id);
        const disabled = this.state.option === '' ? true : false;

        const userAnsweredQuestion = Object.values(users).map(user => {
            if(user.answers) {
                if(user.answers.hasOwnProperty(id)) {
                    return questions[id];
                }
            }

        });

        const Res = userAnsweredQuestion.filter(res => {
            return (res && res.id === id) ? res : null;
        })
        const Result = Res[0];
        const optionOneVotes =  Result.optionOne.votes.length;
        const optionTwoVotes =  Result.optionTwo.votes.length;
        const totalVotes =  (optionOneVotes + optionTwoVotes);

        const { isQuestion } = this.props.location.state;

        return (
                        <div className="answer-poll-card">
                            {
                            isQuestion === true ?
                            (<div>
                                { question && (
                                    question.map(q => {
                                        return (
                                            <div key={q.id}>
                                                <h3>{q.author} asks</h3>
                                                <div>
                                                    <div>
                                                    <img className="icon" src={users[q.author].avatarURL} alt="not found">
                                                    </img>{/* <img /> */}
                                                    </div>
                                                    <div>
                                                        <p>Would you rather</p>
                                                        <form onSubmit={(e) => this.handleSubmit(e, q.id)}>
                                                            <label>
                                                                <input
                                                                type="radio"
                                                                value="optionOne"
                                                                onChange={this.handleCheckbox}
                                                                checked={this.state.option === 'optionOne'}
                                                                />
                                                                {q.optionOne.text}
                                                            </label>
                                                            <label>
                                                                <input
                                                                type="radio"
                                                                value="optionTwo"
                                                                onChange={this.handleCheckbox}
                                                                checked={this.state.option === 'optionTwo'}
                                                                />
                                                                {q.optionTwo.text}
                                                            </label>

                                                            <button type="submit" disabled={disabled}>Submit</button>
                                                        </form>

                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                )}
                                </div>
                                )
                                : (
                                <div>
                                    {
                                        Result && (
                                            <div className="results-card">
                                                <h3 className="results-card-auth">{Result.author} aksk</h3>
                                                <div>
                                                    <img className="icon" src={users[Result.author].avatarURL} alt="not found">
                                                    </img>
                                                </div>
                                                <div>
                                                    <p>Results</p>
                                                    <p>Would you rather</p>
                                                <div className="result-details">
                                                    <p>{Result.optionOne.text}</p>
                                                    <p>No of Votes: {optionOneVotes}</p>
                                                    {
                                                        Result.optionOne.votes.includes(authUser) && (
                                                            <span className='winner-text'>Your Vote</span>
                                                        )
                                                    }
                                                    <p>Votes acquired: {
                                                            Math.floor(((optionOneVotes / totalVotes) * 100).toFixed(2))
                                                        } %
                                                    </p>
                                                </div>
                                                    <div className="result-details">
                                                        <p>{Result.optionTwo.text}</p>
                                                        <p>No of Votes: {optionTwoVotes}</p>
                                                        {
                                                            Result.optionTwo.votes.includes(authUser) && (
                                                                <span className='winner-text'>Your Vote</span>
                                                            )
                                                        }
                                                        <p>Votes acquired: {
                                                            Math.floor(((optionTwoVotes / totalVotes) * 100).toFixed(2))
                                                            } %
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                                )
                            }
                        </div>
                    )

    }
}

const mapStateToProps = ({questions, authUser, users}, {isResultsQuestion}) => {
    return {
        questions,
        authUser,
        users,
        isResultsQuestion
    }
}

export default connect(mapStateToProps)(AnswerPoll);