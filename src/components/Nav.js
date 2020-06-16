import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authUser';

class Nav extends Component {


    logout = () => {
        this.props.dispatch(loginUser(null))
    }

    render () {

        const { user }  = this.props;

        return (
            <nav className="nav">
                <ul>
                    <li className="nav-link">
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-link">
                        <NavLink to="/add" activeClassName="active">
                            New Poll
                        </NavLink>
                    </li>
                    <li className="nav-link">
                        <NavLink to="/leaderBoard" activeClassName="active">
                            Loader Board
                        </NavLink>
                    </li>
                    <li className="nav-link">
                        <div>
                            {user && (user.map(u => (
                                <div key={u.id} className="nav-user-name">
                                    <img className="nav-user-icon" src={u.avatarURL}></img>
                                    <p className="nav-user-title">{u.name}</p>
                                </div>


                            )))}
                            <button onClick={this.logout}>Logout</button>
                        </div>
                    </li>
                </ul>
            </nav>
        )
    }
}

const mapStateToProps = ({ authUser, users }) => {

    const user = Object.values(users).filter((u) => u.id === authUser);
    console.log(user);

    return {
        authUser,
        user
    }
}

export default connect(mapStateToProps)(Nav);