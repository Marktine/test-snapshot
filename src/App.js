import React from 'react';
import logo from './logo.svg';
import {
    Link,
    Route,
    Switch,
    BrowserRouter as Router,
} from 'react-router-dom';
import Helmet from 'react-helmet';
import './App.css';

// import components 
import Home from './Home';
import Example from './Example';

function App() {
  return ( 
      <Router>
          <div className="App">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/example" component={Example} />
              </Switch>
              <div>
                  <Link to="/">To Home</Link>
                  <Link to="/example">To Example</Link>
              </div>
          </div>
      </Router>
  );
}

export default App;
