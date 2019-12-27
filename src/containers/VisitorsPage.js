import React, { Component } from 'react'
import Stories from '../components/Stories'
import Header from '../components/Header'

export default class VisitorsPage extends Component {
	state = {
		allStories: [],
		story: {},
	}

	componentDidMount() {
		fetch('http://localhost:3000/stories')
			.then(response => response.json())
			.then(stories =>
				this.setState({
					allStories: stories,
				}),
			)
	}

	// TODO: Add a jumbotron welcoming to the site

	handleClickEventStory = storyObj => {
		console.log(storyObj)
	}

	render() {
		return (
			<div>
				<Header body={'Recent Stories'} />
				<Stories
					stories={this.state.allStories}
					vistor={true}
					handleClickEventStory={this.handleClickEventStory}
				/>
			</div>
		)
	}
}
