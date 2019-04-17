import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CustomerForm from '../components/CustomerForm'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const Formspage = (props) => {
  const { classes } = props

  return (
  <Router>
    <List component="nav" className={classes.root}>
      <Link style={{ textDecoration: 'none' }} to="/customerform"><ListItem button>
        <ListItemText primary="add customer" /></ListItem></Link>
    <div>
      <Route path="/customerform" render={(props) => <CustomerForm {...props}/>}/>
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
