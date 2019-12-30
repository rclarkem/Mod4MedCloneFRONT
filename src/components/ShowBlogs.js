import React, { Component } from 'react'
import { Container, Header, Button, Image } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'

export default class ShowBlogs extends Component {
	state = { active: true }

	onClick = () => this.setState(prevState => ({ active: !prevState.active }))

	render() {
		console.log(this.props.story)
		return (
			<Container text style={{ marginTop: '7em' }}>
				<Header as='h1'>{this.props.story.title}</Header>
				<Image
					className='ui mini avatar image'
					src={this.props.story.author_avatar}
				/>

				<span>{this.props.story.author_full_name}</span>
				<p>{this.props.story.body}</p>
				<Button
					className='ui button'
					onClick={e => this.props.goBackHome(e.target.value)}
				>
					Go Home
				</Button>
			</Container>
		)
	}
}
