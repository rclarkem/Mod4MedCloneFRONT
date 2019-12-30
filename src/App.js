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
	}

	handleClickEventStory = storyObj => {
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
						name={this.state.name}
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
						<Route path='/show-blog/'>
							{this.state.story && (
								<ShowBlogs
									story={this.state.story}
									goBackHome={this.goBackHome}
								/>
							)}
						</Route>
						<Route exact path='/signup'>
							<LogInForm />
						</Route>
						<Route exact path='/'>
							{this.state.loggedInUser && this.state.loggedIn ? (
								<UserMainPage
									loggedInUser={this.state.loggedInUser}
									handleClickEventStory={this.handleClickEventStory}
								/>
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

const tester = {
	id: 1,
	name: 'RC',
	email: 'RC@edu.com',
	password_digest: '123',
	avatar: '123',
	bio: 'social media apps are evil',
	img: 'https://robohash.org/idseditaque.png?size=300x300&set=set1',
}
