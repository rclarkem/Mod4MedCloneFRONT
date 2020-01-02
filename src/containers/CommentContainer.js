import React from 'react'
import IndivComment from '../components/IndivComment'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
export default function CommentContainer(props) {
	console.log(props.story)
	return (
		<div>
			<Comment.Group>
				<Header as='h3' dividing>
					Comments
				</Header>
				{props.story.comments.map(comment => {
					return <IndivComment comment={comment} key={comment.id} />
				})}
				<Form reply>
					<Form.TextArea />
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
