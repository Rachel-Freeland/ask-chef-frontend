import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import AskChef from './Components/AskChef';
import About from './Components/About';
import Profile from './Components/Profile';
import Landing from './Components/Landing';
import { Component } from 'react';
import { withAuth0} from '@auth0/auth0-react';
import LoginButton from './LoginButton.js';
import LogoutButton from './LogoutButton.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/askchef">
              <AskChef />
            </Route>
            <Route path="/profile">
              <>
                <LoginButton />
                <LogoutButton />
                {this.props.auth0.isAuthenticated &&
                <>
                  <Profile />
                </>
                }
              </>
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Landing />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default withAuth0(App);
