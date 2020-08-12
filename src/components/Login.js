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
        const disabled = this.state.value === '' ? true : false;

        return(
            <div className="row w-100 mx-auto h-100 px-3">
                <div className="login_block">
                    <div className="col-12 px-0 login_block h-100">
                        <div className="game_title py-3">
                            <h4 className="game_title__header">Would You Rather Game</h4>
                            <p className="game_title__text">Please select a user to login...</p>
                        </div>

                        <form onSubmit={this.handleSubmit} className="login_form">
                            <div className="px-3">
                                <select className="d-block login_form__select mb-3" value={this.state.value} onChange={this.handleChange}>
                                    {
                                        users.map((user) => {
                                            return (
                                                <option key={user.id} value={user.id}>{user.name}</option>
                                            )
                                        })
                                    }
                                </select>
                                <button className="login_form__btn" type="submit" disabled={disabled}>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
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