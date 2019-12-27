import React, { Component } from 'react'
import './App.css'
import Navbar from './NavBarComponents/Navbar'
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom'
import UserMainPage from './containers/UserMainPage'
import CreateBlog from './components/CreateBlog'
import BlogTitle from './components/BlogTitle'
import VisitorsPage from './containers/VisitorsPage'

export default class App extends Component {
	state = {
		loggedIn: false,
		loggedInUser: null,
		// ? This needs to be the id of the User?
	}

	//TODO: Add a function here to login user and change state
	// TODO: Add a function here to set loggedInUser and change state

	render() {
		return (
			<div className='App'>
				<BlogTitle />
				<Router>
					<Navbar
						loggedInUser={this.state.loggedInUser}
						loggedIn={this.state.loggedIn}
					/>
					<Switch>
						<Route path='/new_story'>
							<CreateBlog
								loggedInUser={this.state.loggedInUser}
								loggedIn={this.state.loggedIn}
							/>
						</Route>
						<Route exact path='/'>
							{this.state.loggedInUser && this.state.loggedIn ? (
								<UserMainPage loggedInUser={this.state.loggedInUser} />
							) : (
								<VisitorsPage />
							)}
						</Route>
					</Switch>
				</Router>
			</div>
		)
	}
}
