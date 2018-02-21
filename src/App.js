import React from 'react'
import { Router, Route, Switch, Link } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Home from 'containers/Home'
import About from 'containers/About'
import Blog from 'containers/Blog'
import HoFCalculator from 'containers/HoFCalculator'
import NotFound from 'containers/404'

import './app.css'
import ReactGA from 'react-ga';
ReactGA.initialize('UA-114512619-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => (
  <Router>
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/HoFCalculator/">HoFCalculator</Link>
        <Link to="/HoF">Hall of Fame (WIP)</Link>
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
)

export default hot(module)(App)
