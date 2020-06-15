import React, { Component } from 'react';
import LoginPage from './Login';
import Home from './Home';
import { connect } from 'react-redux';
import { handleInitailData } from '../actions/shared';
import LeaderBoard from './LeaderBoard';
import NewPoll from './NewPoll';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav';
import '../../src/App.css';
import AnswerPoll from './AnswerPoll';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitailData());
  }

  render() {

    const { authUser } = this.props;

    return (
      <Router>
        <div className="App">
          {
            authUser === null
            ? (<LoginPage />)
            : (
              <div>
                <Nav />
                <Route path="/" exact component={Home} />
                <Route path="/add" exact component={NewPoll}/>
                <Route path="/leaderBoard" exact component={LeaderBoard}/>
                <Route path="/questions/:id" exact component={AnswerPoll}/>
              </div>
            )
          }
        </div>
      </Router>
    );
  }

}

const mapStateToProps = ({authUser}) => {
  return {
    authUser
  }
}

export default connect(mapStateToProps)(App);
