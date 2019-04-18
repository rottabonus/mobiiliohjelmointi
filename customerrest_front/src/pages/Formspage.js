import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CustomerForm from '../components/CustomerForm'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import SelectCustomer from '../components/Select'
import TrainingForm from '../components/TrainingForm'
import FitnessIcon from '@material-ui/icons/FitnessCenter';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PersonAdd from '@material-ui/icons/PersonAdd';

const Formspage = (props) => {
  const { classes } = props

  return (
  <Router>
    <List component="nav" className={classes.root}>
      <Link style={{ textDecoration: 'none' }} to="/customerform"><ListItem button>
        <ListItemText primary="add customer" />
          <ListItemIcon><PersonAdd /></ListItemIcon>
        </ListItem></Link>
        <Link style={{ textDecoration: 'none' }} to="/selectcustomer"><ListItem button>
          <ListItemText primary="add training" />
          <ListItemIcon><FitnessIcon /></ListItemIcon>
          </ListItem></Link>
    <div>
      <Route path="/customerform" render={(props) => <CustomerForm {...props}/>}/>
      <Route path="/selectcustomer" render={(props) => <SelectCustomer {...props}/>}/>
      <Route exact path="/addtraining/:id" render={(props) => <TrainingForm {...props} id={props.match.params.id}/>}/>
    </div>
    </List>
  </Router>
  )
}

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: '360px',
    backgroundColor: theme.palette.background.paper,
  },
})

export default withStyles(styles)(Formspage)
