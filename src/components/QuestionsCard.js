import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const QuestionsCard = (props) => {

        const { question, isQuestion, users } = props;
        const btnText = isQuestion === true ? 'Answer Poll' : 'Results';

        return(
            <div className="question-card">
                <h4 className="question-card-name">{question.author} asks:</h4>
                <div className="question-card-detail">
                    <div className="user-icon">
                        <img className="icon" src={users[question.author].avatarURL} alt="not found">
                        </img>
                    </div>

                    <div className="question-info px-2">
                        <strong>Would you rather</strong>
                        <p>{question.optionOne.text}</p>
                        <p>or...</p>
                        <Link className="questions-card-btn"
                         to={{
                            pathname:`/questions/${question.id}`,
                            state: {
                                isQuestion
                            }
                         }}>{btnText}
                        </Link>
                    </div>
                </div>
            </div>
        )
}

const mapStateToProps = ({ users }) => {
    return {
        users
    }
}

export default connect(mapStateToProps)(QuestionsCard);