import React, { Component } from 'react';
import Hookpage from './pages/Hookpage'
import Formspage from './pages/Formspage'
import Calendarpage from './pages/Calendarpage'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css'


class App extends Component {

  render() {
    return (
      <Router>
      <div>
      <div>
        <ul>
          <li><Link to="/list">list</Link></li>
          <li><Link to="/add">add</Link></li>
          <li><Link to="/calendar">calendar</Link></li>
        </ul>
      </div>
    <div>
    <Route path="/list" render={() => <Hookpage/>}/>
    <Route path="/add" render={() => <Formspage/>}/>
    <Route path="/calendar" render={() => <Calendarpage/>}/>
    </div>
    </div>
    </Router>
    );
  }
}

export default App;
