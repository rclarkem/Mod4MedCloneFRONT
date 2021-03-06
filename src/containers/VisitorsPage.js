import React, { Component } from 'react'
import Stories from '../components/Stories'
import Header from '../components/Header'
import { Redirect } from 'react-router-dom'
import ShowBlogs from '../components/ShowBlogs'

export default class VisitorsPage extends Component {
	state = {
		allStories: [],
	}

	componentDidMount() {
		fetch('http://localhost:3000/stories')
			.then(response => response.json())
			.then(stories => {
				const recentStories = stories.slice(-6)
				this.setState({
					allStories: recentStories,
				})
			})
	}

	// TODO: Add a jumbotron welcoming to the site

	render() {
		console.log(this.state.allStories)

		return (
			<div>
				<Header body={'Recent Stories'} />
				<Stories
					stories={this.state.allStories}
					visitor={true}
					handleClickEventStory={this.props.handleClickEventStory}
				/>
			</div>
		)
	}
}
