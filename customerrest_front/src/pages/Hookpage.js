import React, { useState, useEffect } from 'react';
import Table from '../components/Table'
import customerService from '../services/customers'
import trainingService from '../services/trainings'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Hookpage = () => {
  const [customers, setCustomers] = useState([])
  const [trainings, setTrainings] = useState([])
  const [customerHeaders, setCustomerHeaders] = useState(['Firstname', 'Lastname', 'Email'])
  const [trainingHeaders, setTrainingHeaders] = useState(['Date', 'Duration', 'Activity'])

  const fetchData = async () => {
    const customers = await customerService.fetchAll()
    const trainings = await trainingService.fetchAll()
    setCustomers(customers)
    setTrainings(trainings)
  }

   useEffect(() => {
    fetchData()
  }, [])

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
      <Route path="/customers" render={() => <Table headers={customerHeaders} data={customers}/>}/>
      <Route path="/trainings" render={() => <Table headers={trainingHeaders} data={trainings}/>}/>
    </div>
    </div>
  </Router>
  );
}

export default Hookpage
