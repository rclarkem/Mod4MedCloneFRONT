import React from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'

export default function IndivComment(props) {
	console.log(props)
	return (
		<div>
			<Comment>
				<Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
				<Comment.Content>
					<Comment.Author as='a'>Matt</Comment.Author>
					<Comment.Metadata>
						<div>Today at 5:42PM</div>
					</Comment.Metadata>
					<Comment.Text>{props.comment.body}</Comment.Text>
				</Comment.Content>
			</Comment>
		</div>
	)
}
// {props.comment.body}
