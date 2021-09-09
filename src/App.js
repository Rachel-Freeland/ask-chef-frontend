import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import AskChef from './Components/AskChef';
import About from './Components/About';
import Profile from './Components/Profile';
import Landing from './Components/Landing';
import { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import IsLoadingAndError from './IsLoadingAndError';

class App extends Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <div className="App">
        <Router>
          <IsLoadingAndError>
            <Header />
            <Switch>
              {isAuthenticated && (
                <>
                  <Route exact path="/">
                    <Landing />
                  </Route>
                  <Route exact path="/askchef">
                    <AskChef />
                  </Route>
                  <Route exact path="/profile">
                    <Profile />
                  </Route>
                  <Route exact path="/about">
                    <About />
                  </Route>
                </>
              )}
              <Route exact path="/">
                <Landing />
              </Route>
              <Route exact path="/about">
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
