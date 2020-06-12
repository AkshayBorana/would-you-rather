import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import LoginPage from './Login';
import { connect } from 'react-redux';
import { handleInitailData } from '../actions/shared';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitailData());
  }

  render() {

    const { authUser } = this.props;

    return (
      <div className="App">
        {
          authUser === null
           ? (<LoginPage />)
           : (<div>User successfully logged in.</div>)
        }
      </div>
    );
  }

}

const mapStateToProps = ({authUser}) => {
  return {
    authUser
  }
}

export default connect(mapStateToProps)(App);
