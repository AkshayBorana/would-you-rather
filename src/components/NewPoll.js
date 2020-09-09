import React, { Component } from 'react';
import { handleSaveQuestion } from '../actions/questions';
import { connect }  from 'react-redux';
import { Redirect } from 'react-router-dom';
import classNames from "classnames";

class NewPoll extends Component {

    state = {
        optionOne: '',
        optionTwo: '',
        redirect: false
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState(() => ({
                [name]: value
        }))
    }

    handleSubmit = (e) => {
        const { optionOne, optionTwo } = this.state;
        const { authUser, dispatch } = this.props;
        e.preventDefault();
        dispatch(handleSaveQuestion(optionOne, optionTwo, authUser));
        this.setState(() => ({
            optionOne: '',
            optionTwo: '',
            redirect: true
        }))
    }


    render () {

        const { optionOne, optionTwo } = this.state;
        const disable = optionOne === '' || optionTwo === '';

        if(this.state.redirect) return (<Redirect to='/' />)

        return (
            <div className="new-poll mt-5">
                <div>
                    <h3>Create a New Poll</h3>
                    <form onSubmit={this.handleSubmit}>
                        <p>Complete the questions...</p>
                        <input
                            className="new-poll__Q"
                            type="text"
                            name="optionOne"
                            placeholder="Enter option one..."
                            value={this.state.optionOne}
                            onChange={this.handleChange}
                        />
                        <strong className="my-2 d-block">OR</strong>
                        <input
                            className="new-poll__Q"
                            type="text"
                            name="optionTwo"
                            placeholder="Enter option two..."
                            value={this.state.optionTwo}
                            onChange={this.handleChange}
                        />

                        <button
                            className={classNames('d-block', 'mt-5', 'new-poll__btn', {'active-btn': !disable})}
                            disabled={disable}
                            type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({authUser}) => {
    return {
        authUser
    }
}

export default connect(mapStateToProps)(NewPoll);