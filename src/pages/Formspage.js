import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TrainingForm from '../components/TrainingForm'
import CustomerForm from '../components/CustomerForm'

const Formspage = () => {

  return (
  <Router>
    <div>

    <div>
    <ul>
    <li><Link to="/trainingform">newTraining</Link></li>
    <li><Link to="/customerform">newCustomer</Link></li>
    </ul>
    </div>

    <div>
      <Route path="/trainingform" render={() => <TrainingForm/>}/>
      <Route path="/customerform" render={() => <CustomerForm/>}/>
    </div>


    </div>
  </Router>
  )
}

export default Formspage
