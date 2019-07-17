import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function Main(){
	return(
		<React.Fragment>
		<CssBaseline />
			<Container maxWidth="sm">
				<Router>
					<div>
						<h1>Single page add</h1>
						<ul>
							<li><NavLink  to="/">Home</NavLink></li>
							<li><NavLink  to="/About">About</NavLink></li>
							<li><NavLink  to="/Contact">Contact</NavLink></li>
						</ul>
						<div className="content">
							<Route path="/" exact component={Home}/>
							<Route path="/About" component={About}/>
							<Route path="/Contact" component={Contact}/>
						</div>

					</div>
				</Router>
			</Container>
		</React.Fragment>
	);		
}


export default Main;