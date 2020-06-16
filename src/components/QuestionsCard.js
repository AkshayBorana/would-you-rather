import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class QuestionsCard extends Component {
    render () {

        const { question, isQuestion, users } = this.props;
        const btnText = isQuestion === true ? 'Answer Poll' : 'Results';

        return(
            <div className="question-card">
                <h3 className="question-card-name">{question.author} asks:</h3>
                <div className="question-card-detail">
                    <div className="user-icon">
                        <img className="icon" src={users[question.author].avatarURL} alt="not found">
                        </img>
                    </div>

                    <div className="question-info">
                        <p>Would you rather</p>
                        <p>{question.optionOne.text}</p>
                        <p>or...</p>
                        <Link
                         to={{
                            pathname:`/questions/${question.id}`,
                            state: {
                                isQuestion
                            }
                         }}>
                            <button>{btnText}</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ users }) => {
    return {
        users
    }
}

export default connect(mapStateToProps)(QuestionsCard);