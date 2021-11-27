import React, { Suspense } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Router basename={window.__POWERED_BY_QIANKUN__ ? '/micro' : '/'}>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <Suspense fallback={null}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
