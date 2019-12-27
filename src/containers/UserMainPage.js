import React, { Component } from 'react'
import Stories from '../components/Stories'

export default class MainPage extends Component {
	state = {
		myStories: [],
		followerStories: [],
	}

	// componentDidMount() {}
	//** This should fetch to the user/:id */

	render() {
		return (
			<div>
				hello
				{/* <Stories myStories={this.state.myStories} />
				<Stories followerStories={this.state.myStories} /> */}
			</div>
		)
	}
}
