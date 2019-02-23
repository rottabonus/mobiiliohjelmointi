import React from 'react';
import CustomerTable from '../components/CustomerTable'
import TrainingTable from '../components/TrainingTable'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Hookpage = () => {

  return (
  <Router>
    <div>
      <div>
        <ul>
          <li><Link to="/customers">Customers</Link></li>
          <li><Link to="/trainings">Trainings</Link></li>
        </ul>
      </div>
    <div>
      <Route path="/customers" render={() => <CustomerTable/>}/>
      <Route path="/trainings" render={() => <TrainingTable/>}/>
    </div>
    </div>
  </Router>
  )
}

export default Hookpage
