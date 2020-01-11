import React, { Component } from 'react'
import './App.css'
import Navbar from './NavBarComponents/Navbar'
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
	withRouter,
} from 'react-router-dom'
import UserMainPage from './containers/UserMainPage'
import CreateBlog from './components/CreateBlog'
import BlogTitle from './components/BlogTitle'
import VisitorsPage from './containers/VisitorsPage'
import LogInForm from './NavBarComponents/LogInForm'
import ShowBlogs from './components/ShowBlogs'
import PortfolioPage from './containers/PortfolioPage'
let r

class App extends Component {
	state = {
		loggedIn: true,
		loggedInUser: jamal,
		story: null,
		myStories: [],
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

	slugUrl = title => {
		return title.split(' ').join('-')
	}

	componentDidMount() {
		if (this.state.loggedIn) {
			fetch(`http://localhost:3000/users/${this.state.loggedInUser.id}`)
				.then(response => response.json())
				.then(stories => {
					this.setState({
						myStories: stories.authored_stories,
					})
				})
		}
	}

	addStories = storyObj => {
		fetch('http://localhost:3000/stories', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				...storyObj,
				author_id: this.state.loggedInUser.id,
			}),
		})
			.then(response => response.json())
			.then(story =>
				this.setState({
					myStories: [...this.state.myStories, story],
				}),
			)
	}

	deleteStories = storyObj => {
		fetch(`http://localhost:3000/stories/${storyObj.id}`, {
			method: 'DELETE',
		})
			.then(response => response.json())
			.then(deletedStory =>
				this.setState(
					{
						myStories: this.state.myStories.filter(
							story => deletedStory.id !== story.id,
						),
					},
					() => this.props.history.push('/stories'),
				),
			)
	}

	// TODO: Add function to post comments to story

	//TODO: Add a function here to toggle loggedInUser, loggedIn and username and change state
	// ! ComponentDidMount()

	render() {
		// console.log('State', this.state.story)
		// console.log('State', this.state.mySto)

		return (
			<div className='App'>
				<BlogTitle />
				{/* <Router> */}
				<Navbar
					loggedInUser={this.state.loggedInUser}
					goBackHome={this.goBackHome}
					loggedIn={this.state.loggedIn}
				/>
				<Switch>
					<Route
						path='/new_story'
						render={props => (
							<CreateBlog
								{...props}
								loggedInUser={this.state.loggedInUser}
								loggedIn={this.state.loggedIn}
								addStories={this.addStories}
							/>
						)}
					/>
					{/* TODO: Route to profile Page */}
					{/* <Route
							path='/profile'
							render={props => (
								<CreateBlog
									{...props}
									loggedInUser={this.state.loggedInUser}
									loggedIn={this.state.loggedIn}
									addStories={this.addStories}
								/>
							)}
						/> */}
					<Route exact path='/stories'>
						<PortfolioPage
							loggedInUser={this.state.loggedInUser}
							loggedIn={this.state.loggedIn}
							handleClickEventStory={this.handleClickEventStory}
							myStories={this.state.myStories}
						/>
					</Route>
					<Route exact path='/login'>
						<LogInForm />
					</Route>
					<Route path='/show-blog/:title'>
						{this.state.story && (
							<ShowBlogs
								story={this.state.story}
								goBackHome={this.goBackHome}
								loggedInUser={this.state.loggedInUser}
								deleteStories={this.deleteStories}
								stories={this.state.myStories}
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
								myStories={this.state.myStories}
							/>
						) : (
							<VisitorsPage
								handleClickEventStory={this.handleClickEventStory}
							/>
						)}
					</Route>
				</Switch>
				{this.state.story ? (
					<Redirect to={`/show-blog/${this.slugUrl(this.state.story.title)}`} />
				) : (
					<Redirect to='/' />
				)}
				{/* </Router> */}
			</div>
		)
	}
}

export default withRouter(App)

const rc = {
	id: 1,
	name: 'RC',
	email: 'RC@edu.com',
	password_digest: '123',
	avatar: '123',
	bio: 'social media apps are evil',
	img: 'https://robohash.org/idseditaque.png?size=300x300&set=set1',
}

const jamal = {
	id: 3,
	name: 'Jamal',
	email: 'Jamal@edu.com',
	password_digest: '123',
	avatar: '123',
	bio: 'FAAAAAXXXX Them',
	img: 'https://robohash.org/eosfacerenumquam.png?size=300x300&set=set1',
}
