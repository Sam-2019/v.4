import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";


import CreatePoll from "./components/createPoll";
import EditPoll from "./components/editPoll";
import ViewPoll from "./components/viewPoll";
import VotePoll from "./components/votePoll";


import logo from "./logo.png";

class App extends Component {
  render() {
    return (
      <Router>
          <nav class="navbar sticky-top navbar-light bg-light shadow-sm p-3">
            <nav className="mr-auto">
            <Link to="/" className="nav-link link">POLL WORLD</Link>
            </nav>
            <Link to="/" className="nav-link">View</Link>
            <Link to="/vote" className="nav-link">Vote</Link>
            <Link to="/create" className="nav-link btn btn-primary">Create</Link>
          </nav>


          <Route path="/" exact component={ViewPoll} />
          <Route path="/vote" exact component={VotePoll} />
          <Route path="/create" exact component={CreatePoll} />
          <Route path="/edit/:id" exact component={EditPoll} />
      </Router>
    );
  }
}

export default App;
