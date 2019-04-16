import React from 'react';
import Hookpage from './pages/Hookpage'
import Formspage from './pages/Formspage'
import Calendarpage from './pages/Calendarpage'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css'
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CalendarIcon from '@material-ui/icons/CalendarToday';
import PersonAdd from '@material-ui/icons/PersonAdd';
import ListIcon from '@material-ui/icons/List';
import { withStyles } from '@material-ui/core/styles';
import Welcome from './components/Welcome'

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}

const Icon = ({ index }) => {
  if(index === 0){
      return (<ListIcon />)
  } else if (index === 1){
    return (<PersonAdd />)
  } return (<CalendarIcon />)
}

class TemporaryDrawer extends React.Component {
  state = { left: false }

  toggleDrawer = (side, open) => () => {
    this.setState({ [side]: open })
  }


  render() {
const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          {['list', 'add', 'calendar'].map((text, index) => (
            <Link key={index} to={`/${text}`}><ListItem button key={text}>
              <ListItemIcon><Icon index={index}/></ListItemIcon>
              <ListItemText primary={text} />
            </ListItem></Link>
          ))}
        </List>
      </div>
    )

    return (
  <Router>
      <div>
        <Button onClick={this.toggleDrawer('left', true)}>Navigation</Button>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}>
            {sideList}
          </div>
        </Drawer>
        <Route exact path="/" render={() => <Welcome />}/>
        <Route path="/list" render={() => <Hookpage/>}/>
        <Route path="/add" render={() => <Formspage/>}/>
        <Route path="/calendar" render={() => <Calendarpage/>}/>
      </div>
</Router>
    );
  }
}

export default withStyles(styles)(TemporaryDrawer);
