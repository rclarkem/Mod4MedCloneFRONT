import IndivComment from '../components/IndivComment'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import React, { Component } from 'react'

export default class CommentContainer extends Component {
	state = {
		body: '',
		commentArray: this.props.story.comments,
	}

	onChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
		})
	}

	onSubmit = e => {
		e.preventDefault()
		fetch(`http://localhost:3000/comments`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				body: this.state.body,
				author_id: this.props.userID,
				story_id: this.props.story.id,
			}),
		})
			.then(response => response.json())
			.then(comment => {
				console.log(comment)
				this.setState({
					commentArray: [...this.state.commentArray, comment],
					body: '',
				})
			})
	}

	render() {
		console.log(this.props)
		return (
			<div>
				<Header as='h1'>Comments</Header>
				{this.state.commentArray.map(comment => {
					return <IndivComment comment={comment} key={comment.id} />
				})}

				<div>
					{!this.props.visitor && (
						<Form reply onSubmit={this.onSubmit}>
							<Form.TextArea name='body' onChange={this.onChange} value={this.state.body} />
							<Button content='Add Comment' labelPosition='left' icon='edit' primary />
						</Form>
					)}
				</div>
			</div>
		)
	}
}
