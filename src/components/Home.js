import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authUser';

class Home extends Component {

    logout = () => {
        this.props.dispatch(loginUser(null))
    }

    render() {
        return (
            <div>
                <p>You are currently logged in.</p>

                <p>Logout from the app</p>
                <button onClick={this.logout}>Logout</button>
            </div>
        )
    }
}

const mapStateToProps = ({authUser}) => {
    return {
        authUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch
    }
}

export default connect(mapStateToProps)(Home)