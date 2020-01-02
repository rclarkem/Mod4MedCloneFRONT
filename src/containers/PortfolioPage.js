import React, { Component } from 'react'
import Header from '../components/Header'
import Stories from '../components/Stories'

export default class PortfolioPage extends Component {
	state = { myStories: [] }

	componentDidMount = async () => {
		let allStories = await fetch(
			`http://localhost:3000/users/${this.props.loggedInUser.id}`,
		)
		let stories = await allStories.json()
		this.setState({
			myStories: stories.authored_stories,
		})
	}

	render() {
		return (
			<div>
				<Header body='All of My Stories' />
				<Stories
					stories={this.state.myStories}
					loggedInUser={this.props.loggedInUser}
					handleClickEventStory={this.props.handleClickEventStory}
				/>
			</div>
		)
	}
}