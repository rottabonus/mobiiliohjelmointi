import React, { Component } from 'react';
import Table from '../components/Table'
import customerService from '../services/customers'
import trainingService from '../services/trainings'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Frontpage extends Component {
  constructor(props){
    super(props)
    this.state = {customers: [], trainings: [], trainingHeaders: ['Date', 'Duration', 'Activity'], customerHeaders: ['Firstname', 'Lastname', 'Email']}
  }

  async componentDidMount(){
    const customers = await customerService.fetchAll()
    const trainings = await trainingService.fetchAll()
    this.setState({ customers, trainings })
  }

  render() {
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
        <Route path="/customers" render={() => <Table headers={this.state.customerHeaders} data={this.state.customers}/>}/>
        <Route path="/trainings" render={() => <Table headers={this.state.trainingHeaders} data={this.state.trainings}/>}/>
      </div>
      
      </div>
      </Router>
    );
  }
}

export default Frontpage;
