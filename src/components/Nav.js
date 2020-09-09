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
            <nav className="nav pt-3 pb-5">
                <ul className="nav-ul row px-0">
                <div className="col-12 col-sm-7 order-2 order-sm-1 px-0">
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
                    </div>
                    <div className="col-12 col-sm-5 order-1 order-sm-2 px-2">
                        <li className="nav-link px-0">
                            <div>
                                {user && (user.map(u => (
                                    <div key={u.id} className="nav-user-name float-left">
                                        <img className="nav-user-icon" src={u.avatarURL} alt="not found"></img>
                                        <p className="nav-user-title">{u.name}</p>
                                    </div>


                                )))}
                                <button className="log-out d-inline-block float-right" onClick={this.logout}>Logout</button>
                            </div>
                        </li>
                    </div>
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