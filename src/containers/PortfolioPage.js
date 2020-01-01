import React, { Component } from 'react'
import Header from '../components/Header'
import Stories from '../components/Stories'

export default class PortfolioPage extends Component {
	state = { myStories: [] }

	componentDidMount() {
		fetch(`http://localhost:3000/users/${this.props.loggedInUser.id}`)
			.then(response => response.json())
			.then(stories => {
				this.setState({
					myStories: stories.authored_stories,
				})
			})
	}

	render() {
		return (
			<div>
				<Header body={'My Stories'} />
				<Stories
					stories={this.state.myStories}
					loggedInUser={this.props.loggedInUser}
					handleClickEventStory={this.props.handleClickEventStory}
				/>
			</div>
		)
	}
}
