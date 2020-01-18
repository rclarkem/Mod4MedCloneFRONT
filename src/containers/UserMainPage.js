import React, { Component } from 'react'
import Stories from '../components/Stories'
import Header from '../components/Header'

export default class MainPage extends Component {
	state = {
		followerStories: [],
	}

	topThreeStories = () => {
		return this.props.myStories.slice(-3)
	}

	render() {
		console.log(this.props.myStories)
		return (
			<div>
				<Header body='My Recent Stories' />
				<Stories
					stories={this.topThreeStories()}
					vistor={false}
					handleClickEventStory={this.props.handleClickEventStory}
					loggedInUser={this.props.loggedInUser}
				/>
			</div>
		)
	}
}
