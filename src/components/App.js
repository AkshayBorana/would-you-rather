import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import LoginPage from './Login';
import Home from './Home';
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
           : (<Home />)
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
