import React, { Component } from 'react';
import { connect } from 'react-redux';

class AnswerPoll extends Component {

    state = {
        option: ''
    }

    handleCheckbox = (e) => {
        console.log(e.target.value)
        const { value } = e.target;
        this.setState(() => ({
            option: value
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render () {

        const { questions, authUser, users, } = this.props;
        const { id } = this.props.match.params;
        const question = Object.values(questions).filter(q => q.id === id);
        const disabled = this.state.option === '' ? true : false;

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
                                        <form onSubmit={this.handleSubmit}>
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