import React from 'react';
import { Route, Router } from 'react-router-dom';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';
import PollView from './Poll/pollView';
import CreatePoll from './Poll/CreatePoll';
import Footer from './Poll/Footer'
import Header from './Header';
import Main2 from './Poll/Main - Copy'

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

function Routeall() {
  return (
    <Router history={history}>
    <div>
<Route path="/" render={(props) => <Header auth={auth} {...props} />} />
<Route path="/callback" render={(props) => {
        handleAuthentication(props);
        return <Callback {...props} /> 
      }}/>
<Route path="/viewpoll" render={(props) => <PollView {...props} />} />
<Route path="/createpoll" render={(props) => <CreatePoll auth={auth} {...props} />} />

    </div>

<Main2 />
    <Footer />
  </Router>
  );
}

export default Routeall