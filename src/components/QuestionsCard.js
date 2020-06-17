import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const QuestionsCard = (props) => {

        const { question, isQuestion, users } = props;
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