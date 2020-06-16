import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleSaveQuestionsAnswer } from '../actions/users';

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

        const { questions, authUser, users, } = this.props;
        const { id } = this.props.match.params;
        const question = Object.values(questions).filter(q => q.id === id);
        const disabled = this.state.option === '' ? true : false;
        // const userAnsweredQuestion = Object.values(users).filter(user => {
        //     if(user.answers) {
        //         user.answers.hasOwnProperty(id)
        //     }
        // })

        return (
            <div>
                { question && (
                    question.map(q => {
                        return (
                            <div key={q.id}>
                                <p>{q.author} asks</p>
                                <div>
                                    <div>
                                        {/* <img /> */}
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
                ) }
            </div>
        )
    }
}

const mapStateToProps = ({questions, authUser, users}) => {
    return {
        questions,
        authUser,
        users
    }
}

export default connect(mapStateToProps)(AnswerPoll);