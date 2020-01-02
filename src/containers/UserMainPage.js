import React, { Component } from 'react'
import Stories from '../components/Stories'
import Header from '../components/Header'

export default class MainPage extends Component {
	state = {
		myStories: [],
		followerStories: [],
	}

	componentDidMount() {
		fetch(`http://localhost:3000/users/${this.props.loggedInUser.id}`)
			.then(response => response.json())
			.then(stories => {
				this.setState({
					myStories: stories.authored_stories,
				})
			})
	}

	topThreeStories = () => {
		return this.state.myStories.slice(-3)
	}

	render() {
		return (
			<div>
				<Header body='My Recent Stories' />
				<Stories
					stories={this.topThreeStories()}
					handleClickEventStory={this.props.handleClickEventStory}
					loggedInUser={this.props.loggedInUser}
				/>
			</div>
		)
	}
}
