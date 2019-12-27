import React, { Component } from 'react'

export default class CreateBlog extends Component {
	render() {
		return (
			<div>
				{/* TODO: OnClick Event to close Modal */}
				{!this.props.loggedInUser && !this.props.loggedIn ? (
					<div className='ui warning message'>
						<i className='close icon'></i>
						<div className='header'>
							You must register before you can do that!
						</div>
						Visit our registration page, then try again
					</div>
				) : (
					'Create Blogs Now'
				)}
			</div>
		)
	}
}
