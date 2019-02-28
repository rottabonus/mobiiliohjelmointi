import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CustomerForm from '../components/CustomerForm'

const Formspage = () => {

  return (
  <Router>
    <div>
      <div>
        <ul>
          <li><Link to="/customerform">newCustomer</Link></li>
        </ul>
    </div>
    <div>
      <Route path="/customerform" render={() => <CustomerForm/>}/>
    </div>
    </div>
  </Router>
  )
}

export default Formspage
