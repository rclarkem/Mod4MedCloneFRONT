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
				})
			})

		// this.props.history.push('/stories')
	}

	render() {
		const comment = this.state.commentArray.map(comment => {
			return <li>{comment.body}</li>
		})
		return (
			<div>
				<Comment.Group>
					<Header as='h3' dividing>
						Comments
					</Header>
					{/* {comment} */}
					<Comment>
						<Comment.Avatar src={comment.author_avatar} />
						<Comment.Content>
							<Comment.Author as='a'>{comment.author_full_name}</Comment.Author>
							<Comment.Metadata>
								<div>Today at 5:42PM</div>
							</Comment.Metadata>
							<Comment.Text>{comment}</Comment.Text>
						</Comment.Content>
					</Comment>
					{/* {this.props.story.comments.map(comment => {
						return <IndivComment comment={comment} key={comment.id} />
					})} */}
					<Form onSubmit={this.onSubmit}>
						<Form.TextArea
							name='body'
							onChange={this.onChange}
							value={this.state.body}
						/>
						<Button
							content='Add Comment'
							labelPosition='left'
							icon='edit'
							primary
						/>
					</Form>
				</Comment.Group>
			</div>
		)
	}
}
