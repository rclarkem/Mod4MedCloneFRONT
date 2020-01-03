import IndivComment from '../components/IndivComment'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import React, { Component } from 'react'

export default class CommentContainer extends Component {
	state = {
		body: '',
	}

	onChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
		})
	}

	onSubmit = e => {
		e.preventDefault()
		this.props.addComment(this.state)
		console.log(this.props.history)
		// this.props.history.push('/stories')
	}

	render() {
		console.log(this.state)
		return (
			<div>
				<Comment.Group>
					<Header as='h3' dividing>
						Comments
					</Header>
					{this.props.story.comments.map(comment => {
						return <IndivComment comment={comment} key={comment.id} />
					})}
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
