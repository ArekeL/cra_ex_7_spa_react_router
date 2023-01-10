import React, { Component } from "react";
import {
	BrowserRouter as Router,
	NavLink,
	Routes,
	Route,
} from "react-router-dom";
import "./App.css";
import Home from "./Home";
import News from "./News";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";

class App extends Component {
	state = {};
	render() {
		return (
			<Router>
				<div className='App'>
					<header>
						<nav>
							<ul>
								<li>
									<NavLink to='/'>Home</NavLink>
								</li>
								<li>
									<NavLink to='/news'>News</NavLink>
								</li>
								<li>
									<NavLink to='/about-us'>About Us</NavLink>
								</li>
								<li>
									<NavLink to='/contact'>Contact</NavLink>
								</li>
							</ul>
						</nav>
					</header>
					<section>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/news' element={<News />} />
							<Route path='/about-us' element={<AboutUs />} />
							<Route path='/contact' element={<Contact />} />
							<Route path='*' element={<ErrorPage />} />
						</Routes>
					</section>
				</div>
			</Router>
		);
	}
}

export default App;
