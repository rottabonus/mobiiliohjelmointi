import React from 'react'
import CustomerTable from '../components/CustomerTable'
import TrainingTable from '../components/TrainingTable'
import TrainingForm from '../components/TrainingForm'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

const Hookpage = (props) => {
  const { classes } = props
  return (
  <Router>
  <div>
    <List component="nav" className={classes.root}>
        <Link style={{ textDecoration: 'none' }} to="/customers"><ListItem button>
          <ListItemText primary="customers" /></ListItem></Link>
          <Divider />
          <Link style={{ textDecoration: 'none' }} to="/trainings"><ListItem button divider>
          <ListItemText primary="trainings" /></ListItem></Link>
      </List>
    <div>
      <Route path="/customers" render={() => <CustomerTable/>}/>
      <Route path="/trainings" render={() => <TrainingTable/>}/>
      <Route exact path="/addtraining/:id" render={(props) => <TrainingForm {...props} id={props.match.params.id}/>}/>
    </div>
    </div>
  </Router>
  )
}

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: '360px',
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    flexDirection: 'row'
  },
})

export default withStyles(styles)(Hookpage)
