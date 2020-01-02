import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import NewBlogPost from './NewBlogPost'

export default class CreateBlog extends Component {
	state = {
		clicked: true,
	}

	onClick = e => {
		this.setState({ clicked: false })
	}

	render() {
		console.log(this.props.history)
		return (
			<div>
				{/* TODO: OnClick Event to close Modal */}
				{!this.props.loggedInUser && !this.props.loggedIn ? (
					<div className='ui warning message'>
						<i className='close icon' onClick={this.onClick}></i>
						<div className='header'>
							You must register before you can do that!
						</div>
						Visit our registration page, then try again
					</div>
				) : (
					<NewBlogPost
						addStories={this.props.addStories}
						history={this.props.history}
					/>
				)}
				{!this.state.clicked && <Redirect to='/signup' />}
			</div>
		)
	}
}
