import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class QuestionsCard extends Component {
    render () {

        const { question, isQuestion } = this.props;
        const btnText = isQuestion === true ? 'Answer Poll' : 'Results';

        return(
            <div className="question-card">
                <h3 className="question-card-name">{question.author} asks:</h3>
                <div className="question-card-detail">
                    <div className="user-icon">
                        <img src="" alt="not found">
                        </img>
                    </div>

                    <div className="question-info">
                        <p>Would you rather</p>
                        <p>{question.optionOne.text}</p>
                        <p>or...</p>
                        <Link
                         to={{
                            pathname:`/questions/${question.id}`,
                            state: { questionDetails: question}
                         }}>
                            <button>{btnText}</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuestionsCard;