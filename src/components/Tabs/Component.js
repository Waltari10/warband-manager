import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PlusIcon from '@material-ui/icons/Add';
import HistoryIcon from '@material-ui/icons/History';
import AppBar from '@material-ui/core/AppBar';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import { Route, Switch, Link } from 'react-router-dom';
import ReflectPage from '../../containers/ReflectPage';
import HistoryPage from '../../containers/HistoryPage';
import UserPage from '../../containers/UserPage';

// const useStyles = makeStyles({
//   root: {
//     flexGrow: 1,
//     maxWidth: 500,
//   },
// });


const MyTabs = ({ match }) => {
  // const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log('tabs');
  return (
    <>

      <div
        style={{
          height: 'calc(100% - 72px)',
          width: '100%',
          position: 'relative',
        }}
      >
        <Switch>
          <Route path={'/history'} component={HistoryPage}/>
          <Route path={'/reflect'} component={ReflectPage}/>
          <Route path={'/user'} component={UserPage}/>
        </Switch>
      </div>
      <AppBar
        color="transparent"
        position="static"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="primary"
        >
          <Tab
            to={`${match.url}history`}
            component={Link}
            icon={<HistoryIcon />}
            label="HISTORY"
          />
          <Tab
            to={`${match.url}reflect`}
            component={Link}
            icon={<PlusIcon />}
            label="REFLECT" />
          <Tab
            to={`${match.url}user`}
            component={Link}
            icon={<PersonPinIcon />}
            label="USER" />
        </Tabs>
      </AppBar>
    </>
  );
};
 
export default MyTabs;