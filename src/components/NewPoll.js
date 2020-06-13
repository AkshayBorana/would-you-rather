import React, { Component } from 'react';

class NewPoll extends Component {

    state = {
        optionOne: '',
        optionTwo: ''
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState(() => ({
                [name]: value
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState(() => ({
            optionOne: '',
            optionTwo: ''
        }))
    }


    render () {
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

export default NewPoll;