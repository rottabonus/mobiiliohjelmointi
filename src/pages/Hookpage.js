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
    <List component="nav" className={classes.root}>
        <ListItem button><Link to="/customers">
          <ListItemText primary="customers" /></Link></ListItem>
          <Divider />
          <ListItem button divider><Link to="/trainings">
          <ListItemText primary="trainings" /></Link></ListItem>
    <div>
      <Route path="/customers" render={() => <CustomerTable/>}/>
      <Route path="/trainings" render={() => <TrainingTable/>}/>
      <Route exact path="/addtraining/:id" render={({match}) => <TrainingForm id={match.params.id}/>}/>
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

export default withStyles(styles)(Hookpage)
