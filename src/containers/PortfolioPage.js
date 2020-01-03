import React, { Component } from 'react'
import Header from '../components/Header'
import Stories from '../components/Stories'
import CommentContainer from './CommentContainer'

export default class PortfolioPage extends Component {
	// componentDidMount = async () => {
	// 	let allStories = await fetch(
	// 		`http://localhost:3000/users/${this.props.loggedInUser.id}`,
	// 	)
	// 	let stories = await allStories.json()
	// 	this.setState({
	// 		myStories: stories.authored_stories,
	// 	})
	// }

	render() {
		const comments = this.props.myStories.map(comment => {
			return comment.comments
		})

		return (
			<div>
				<Header body='All of My Stories' />
				<Stories
					stories={this.props.myStories}
					loggedInUser={this.props.loggedInUser}
					handleClickEventStory={this.props.handleClickEventStory}
				/>
			</div>
		)
	}
}
