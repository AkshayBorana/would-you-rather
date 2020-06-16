import React from 'react';

const PollWinnerCard = (props) => {

    const { topUser } = props;

    return (
        <div>
            <div>
                {/* <img  src="" alt="image not found"> </img> */}
            </div>

            <div>
                <p>{topUser.name}</p>
                <p>Answered Questions: {topUser.questionsAsked}</p>
                <p>Questions Aksed: {topUser.questionsAnswered}</p>
                <p>Total score: {topUser.totalCount}</p>
            </div>
        </div>
    )
}

export default PollWinnerCard;