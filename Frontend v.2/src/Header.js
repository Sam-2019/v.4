import React, { Component } from 'react';
import { Link } from "react-router-dom";


import './App.css';

class Header extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (

  <nav class="navbar sticky-top bg-light shadow-sm p-3">

<nav className="mr-auto">
<Link to="/" className="nav-link link">POLL WORLD</Link>
</nav>

            {
              !isAuthenticated() && (
<Link className="nav-link link"
id="qsLoginBtn" onClick={this.login.bind(this)}>Log In</Link>
)
            }
            {
              isAuthenticated() && (
<Link className="nav-link link"
id="qsLogoutBtn" onClick={this.logout.bind(this)}>Log Out</Link>
)
            }
        
<Link to="/viewpoll"
className="nav-link link">Views Polls</Link>
<Link to="/createpoll"
className="nav-link link btn btn-primary">Create Poll</Link>

</nav>

    );
  }
}

export default Header;