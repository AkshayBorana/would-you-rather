import React from 'react';

const PollWinnerCard = (props) => {

    const { topUser } = props;

    return (
        <div>
            <div className="py-2">
                <img className="icon" src={topUser.avatarURL} alt="not found">
                </img>
            </div>

            <div>
                <h4>{topUser.name}</h4>
                <p>Answered Questions: {topUser.questionsAsked}</p>
                <p>Questions Aksed: {topUser.questionsAnswered}</p>
                <p>Total score: {topUser.totalCount}</p>
            </div>
        </div>
    )
}

export default PollWinnerCard;