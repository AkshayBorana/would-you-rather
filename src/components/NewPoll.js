import React, { Component } from 'react';
import { handleSaveQuestion } from '../actions/questions';
import { connect }  from 'react-redux';
import { Redirect } from 'react-router-dom';

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

        if(this.state.redirect) return (<Redirect to='/' />)

        return (
            <div>
                <h2>Create a New Poll</h2>
                <form onSubmit={this.handleSubmit}>
                    <p>Complete the questions...</p>
                    <input
                     type="text"
                     name="optionOne"
                     placeholder="Enter option one..."
                     value={this.state.optionOne}
                     onChange={this.handleChange}
                    />
                    <h2>OR</h2>
                    <input
                     type="text"
                     name="optionTwo"
                     placeholder="Enter option two..."
                     value={this.state.optionTwo}
                     onChange={this.handleChange}
                    />

                    <button type="submit">Submit</button>
                </form>
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