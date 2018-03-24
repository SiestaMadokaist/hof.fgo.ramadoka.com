import React from 'react'
import { Router, Route, Switch, Link } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Home from 'containers/Home'
import About from 'containers/About'
import Blog from 'containers/Blog'
import HoFCalculator from 'containers/HoFCalculator'
import NotFound from 'containers/404'

new Promise((resolve, reject) => {
  require('../static/bootstrap.min.css');
  require('./app.css');
  resolve()
});

import root from 'window-or-global'

const App = () => (
  <Router>
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/HoFCalculator/">HoFCalculator</Link>
        <Link to="/HoF">Hall of Fame (WIP)</Link>
        <Link to='/Versions'>Version: 2018-03-24T13:59:04.541Z</Link>
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
