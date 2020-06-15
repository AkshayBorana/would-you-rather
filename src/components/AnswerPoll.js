import React, { Component } from 'react';
import { connect } from 'react-redux';

class AnswerPoll extends Component {

    render () {

        const { questions, authUser, users } = this.props;

        return (

                            <div>hi</div>
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