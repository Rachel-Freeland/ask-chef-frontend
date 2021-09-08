import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import AskChef from './Components/AskChef';
import About from './Components/About';
import Profile from './Components/Profile';
import Landing from './Components/Landing';
import { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import IsLoadingAndError from './IsLoadingAndError';


class App extends Component {
  makeRequest = async () => {
    const { getIdTokenClaims } = this.props.auth0;
    let tokenClaims = await getIdTokenClaims();
    const jwt = tokenClaims.__raw;

    const config = {
      headers: { "Authorization": `Bearer ${jwt}` }
    };
    const serverResponse = await axios.get('http://localhost:3001/test', config);

    console.log(serverResponse);
  }
  render() {
    const { user, isAuthenticated, isLoading } = this.props.auth0;
    console.log('app', user, isLoading);
    return (
      <div className="App">
        <Router>
          <IsLoadingAndError>
            <Header />
            <Switch>
              <Route path="/">
                <Landing />
              </Route>
              <Route path="/askchef">
                {isAuthenticated ? <AskChef /> : <Landing />}
              </Route>
              <Route path="/profile">
                {isAuthenticated && <Profile />}
              </Route>
              <Route path="/about">
                <About />
              </Route>
            </Switch>
          </IsLoadingAndError>
        </Router>
      </div>
    );
  }
}

export default withAuth0(App);
