import React, { Component } from 'react'
import Stories from '../components/Stories'

export default class MainPage extends Component {
	state = {
		myStories: [],
		followerStories: [],
	}

	componentDidMount() {
		fetch('http://localhost:3000/stories')
			.then(response => response.json())
			.then(response => {
				const stories = response.filter(story => {
					return story.author_id === this.props.loggedInUser.id
				})
				this.setState({
					myStories: stories,
				})
			})
	}

	render() {
		// console.log(this.state.myStories)
		return (
			<div>
				{
					<Stories
						stories={this.state.myStories}
						handleClickEventStory={this.props.handleClickEventStory}
						loggedInUser={this.props.loggedInUser}
					/>
				}
			</div>
		)
	}
}
