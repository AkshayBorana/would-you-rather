import React, { Component } from 'react';
import { connect } from 'react-redux';
import  PollWinnerCard  from './PollWinnerCard';

class LeaderBoard extends Component {
    render () {

        const { topUsers } = this.props;

        return(
            <div>
                <h3>Leader Board</h3>
                <ul className="leaderboard-card">
                    {
                       topUsers && (
                        topUsers.map((topUser) => {
                            return (
                                <li className="leaderboard-card-list" key={topUser.id}>
                                    <PollWinnerCard topUser={topUser}/>
                                </li>
                            )
                        })
                       )
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = ({authUser, users}) => {

    const topUsers = Object.values(users).map((user) => {
        const questionsAnswered = Object.keys(user.answers).length;
        const questionsAsked = user.questions.length;
        const totalCount = questionsAnswered + questionsAsked;

        return {
            ...user,
            totalCount,
            questionsAsked,
            questionsAnswered
        }
    }).sort((a, b) => b.totalCount - a.totalCount);


    return {
        authUser,
        topUsers
    }
}

export default connect(mapStateToProps)(LeaderBoard);