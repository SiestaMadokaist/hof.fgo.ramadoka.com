import React from 'react'
import ReactDOM from 'react-dom'

// Your top level component
import App from './App'

// Export your top level component as JSX (for static rendering)
export default App
import ReactGA from 'react-ga';

if(typeof window !== 'undefined'){
  ReactGA.initialize('UA-114512619-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
};

// Render your app
if (typeof document !== 'undefined') {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render
  const render = Comp => {
    renderMethod(<Comp />, document.getElementById('root'))
  }

  // Render!
  render(App)
}
