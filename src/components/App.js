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
    return (
      <div className="App">
        <LoginPage />
      </div>
    );
  }

}

export default connect()(App);
