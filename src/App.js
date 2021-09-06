import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Main from './Components/Main';
import About from './Components/About';
import Profile from './Components/Profile';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/askchef">
              <Main />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <h1>Home</h1>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
