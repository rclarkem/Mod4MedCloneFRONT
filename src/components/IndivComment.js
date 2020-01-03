import React from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'

export default function IndivComment(props) {
	console.log(props)
	return (
		<div>
			<Comment>
				<Comment.Avatar src={props.comment.author_avatar} />
				<Comment.Content>
					<Comment.Author as='a'>
						{props.comment.author_full_name}
					</Comment.Author>
					<Comment.Metadata>
						<div>Today at 5:42PM</div>
					</Comment.Metadata>
					<Comment.Text>{props.comment.body}</Comment.Text>
				</Comment.Content>
			</Comment>
		</div>
	)
}
