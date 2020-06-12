import React, { Component } from 'react';

class QuestionsCard extends Component {
    render () {

        const { question, questionType } = this.props;

        const btnText = questionType === 'unanswered' ? 'Answer Poll' : 'Results';

        return(
            <div className="question-card">
                <h3>{question.author} asks:</h3>
                <div>
                    <div className="user-icon">
                        <img src="" alt="not found">
                        </img>
                    </div>

                    <div className="question-info">
                        <p>Would you rather</p>
                        <p>{question.optionOne.text}</p>
                        <span>or...</span>
                        <button>{btnText}</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuestionsCard;