import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authUser';

class LoginPage extends Component {

    state = {
        value: ''
    }

    handleChange = (e) => {
        const value = e.target.value;
        this.setState(() => ({
            value
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(loginUser(this.state.value))
    }

    render() {

        const { users } = this.props;

        return(
            <div>
                <h3>Would You Rather Game</h3>
                <p>Please select a user to login...</p>
                <form onSubmit={this.handleSubmit}>
                    <select value={this.state.value} onChange={this.handleChange}>
                        {
                            users.map((user) => {
                                return (
                                    <option key={user.id} value={user.id}>{user.name}</option>
                                )
                            })
                        }
                    </select>
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = ({users}) => {
    return {
        users: Object.values(users)
    }
}

export default connect(mapStateToProps)(LoginPage);