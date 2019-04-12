import React from 'react';
import Hookpage from './pages/Hookpage'
import Formspage from './pages/Formspage'
import Calendarpage from './pages/Calendarpage'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css'
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { withStyles } from '@material-ui/core/styles';
import CustomerTable from './components/CustomerTable'
import TrainingTable from './components/TrainingTable'

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};
class TemporaryDrawer extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
const { classes } = this.props;

    const sideList = (

      <div className={classes.list}>
        <List>
          {['list', 'add', 'calendar'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon><Link to={`/${text}`}><InboxIcon /></Link></ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['customers', 'trainings'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <Link to={`/${text}`}><InboxIcon /></Link> :  <Link to={`/${text}`}><MailIcon /></Link>}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    )

    return (
  <Router>
      <div>

        <Button onClick={this.toggleDrawer('left', true)}>Open Left</Button>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
        <Route path="/list" render={() => <Hookpage/>}/>
        <Route path="/add" render={() => <Formspage/>}/>
        <Route path="/calendar" render={() => <Calendarpage/>}/>
        <Route path="/addtraining" render={() => <Hookpage/>}/>
        <Route path="/customers" render={() => <Formspage/>}/>
        <Route path="/trainings" render={() => <Calendarpage/>}/>
        <Route path="/customers" render={() => <CustomerTable/>}/>
        <Route path="/trainings" render={() => <TrainingTable/>}/>
      </div>
</Router>
    );
  }
}

export default withStyles(styles)(TemporaryDrawer);
