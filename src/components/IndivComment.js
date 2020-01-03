import React from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'

export default function IndivComment(props) {
	const time = () => {
		let date = props.comment.created_at
		return 'Today at ' + date
	}

	console.log(props)
	return (
		<Comment.Group>
			<Comment>
				<Comment.Avatar as='a' src={props.comment.author_avatar} />
				<Comment.Content>
					<Comment.Author>{props.comment.author_full_name}</Comment.Author>
					<Comment.Text>{props.comment.body}</Comment.Text>
				</Comment.Content>
			</Comment>
		</Comment.Group>
	)
}
