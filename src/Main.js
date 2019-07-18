import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};


const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));


function Main(){
  
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }


	return(
		<React.Fragment>
		<CssBaseline />
			<Container >
			 <div className={classes.root}>
		      <Router>
		      <AppBar position="static" color="default">
		        <Tabs
		          value={value}
		          onChange={handleChange}
		          indicatorColor="primary"
		          textColor="primary"
		          variant="fullWidth"
		        >
		          <Tab label="Home" component={Link} to="/">Home</Tab>
		          <Tab label="About" component={Link} to="/About">About</Tab>
		          <Tab label="Contact" component={Link} to="/Contact">Contact</Tab>
		        </Tabs>
		      </AppBar>
		      <SwipeableViews
		        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
		        index={value}
		        onChangeIndex={handleChangeIndex}
		      >
		        <TabContainer dir={theme.direction}><Route path="/" exact/><Home/></TabContainer>
		        <TabContainer dir={theme.direction}><Route path="/About" /><About/></TabContainer>
		        <TabContainer dir={theme.direction}><Route path="/Contact"/><Contact /></TabContainer>
		      </SwipeableViews>
		    
		    </Router>
		    </div>
			</Container>

			
		</React.Fragment>
	);		
}


export default Main;