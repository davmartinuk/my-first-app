import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";



function Main(){
	return(
			<Router>
			<div>
				<h1>Single page add</h1>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/About">About</Link></li>
					<li><Link to="/Contact">Contact</Link></li>
				</ul>
				<div className="content">
					<Route path="/" exact component={Home}/>
					<Route path="/About" component={About}/>
					<Route path="/Contact" component={Contact}/>
				</div>

			</div>
			</Router>
	);		
}


export default Main;