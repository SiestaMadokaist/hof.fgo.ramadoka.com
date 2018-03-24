import React from 'react'
import { Router, Route, Switch, Link } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Home from 'containers/Home'
import About from 'containers/About'
import Blog from 'containers/Blog'
import HoFCalculator from 'containers/HoFCalculator'
import NotFound from 'containers/404'
import firebase from 'firebase'
import config from './config'
import UserLoginNav from './components/UserLoginNav'

firebase.initializeApp(config.firebase);

new Promise((resolve, reject) => {
  require('../static/bootstrap.min.css');
  require('./app.css');
  resolve()
});


import root from 'window-or-global'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { user: undefined };
    this.firebaseAuthListener = undefined;
  }

  componentDidMount(){
    this.firebaseAuthListener = firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user });
    });
  }

  componentWillUnMount(){
    this.firebaseAuthListener(); // detach listener;
  }

  user(){
    return this.state.user;
  }

  login(user){
    return this.setState({ user });
  }

  render(){
    return (
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/HoFCalculator/">HoFCalculator</Link>
            <Link to="/HoF">Hall of Fame (WIP)</Link>
            <UserLoginNav user={this.user()} login={this.login.bind(this)}/>
          </nav>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/HoFCalculator" component={HoFCalculator} />
              <Route path="/about" component={About} />
              <Route path="/blog" component={Blog} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }

}

export default hot(module)(App)
