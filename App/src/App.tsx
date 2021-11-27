import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App" >
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/micro">前往微任务</Link>
        </nav>
        <Suspense fallback={null}>
          <Switch>

          </Switch>
        </Suspense>
      </Router>
      <div id="micro" />
    </div>
  );
}

export default App;
