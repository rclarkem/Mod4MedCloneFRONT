import React, { Component } from 'react'
import { Container, Header } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

export default class ShowBlogs extends Component {
	render() {
		// console.log(this.props.story)
		return (
			<Container text>
				{this.props.story && (
					<div>
						<Header as='h2'>{this.props.story.title}</Header>
						<p>{this.props.story.body}</p>
						<button
							className='ui button'
							onClick={e => this.props.goBackHome(e.target.value)}
						>
							Go Back Home
						</button>
					</div>
				)}
			</Container>
		)
	}
}
