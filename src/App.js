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
import LogInForm from './NavBarComponents/LogInForm'
import ShowBlogs from './components/ShowBlogs'

export default class App extends Component {
	state = {
		loggedIn: false,
		loggedInUser: null,
		email: '',
		story: null,
		// ? This needs to be the id of the User? (Yes)
	}

	handleClickEventStory = storyObj => {
		// console.log(storyObj)
		this.setState({
			story: storyObj,
		})
	}

	goBackHome = e => {
		this.setState({
			story: null,
		})
	}

	//TODO: Add a function here to toggle loggedInUser, loggedIn and username and change state

	render() {
		console.log('STATE', this.state.story)
		return (
			<div className='App'>
				<BlogTitle />
				<Router>
					<Navbar
						loggedInUser={this.state.loggedInUser}
						goBackHome={this.goBackHome}
						loggedIn={this.state.loggedIn}
					/>
					<Switch>
						<Route path='/new_story'>
							<CreateBlog
								loggedInUser={this.state.loggedInUser}
								loggedIn={this.state.loggedIn}
							/>
						</Route>
						<Route exact path='/login'>
							<LogInForm />
						</Route>
						<Route path='/show-blog'>
							<ShowBlogs
								story={this.state.story}
								goBackHome={this.goBackHome}
							/>
						</Route>
						<Route exact path='/signup'>
							<LogInForm />
						</Route>
						<Route exact path='/'>
							{this.state.loggedInUser && this.state.loggedIn ? (
								<UserMainPage loggedInUser={this.state.loggedInUser} />
							) : (
								<VisitorsPage
									handleClickEventStory={this.handleClickEventStory}
								/>
							)}
						</Route>
					</Switch>
					{this.state.story ? (
						<Redirect to='/show-blog' />
					) : (
						<Redirect to='/' />
					)}
				</Router>
			</div>
		)
	}
}
