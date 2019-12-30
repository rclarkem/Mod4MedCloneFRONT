import React, { Component } from 'react'
import { Container, Header, Button, Image } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'
import ButtonFor from './ButtonFor'

export default class ShowBlogs extends Component {
	state = { active: true }

	onClick = () => this.setState(prevState => ({ active: !prevState.active }))

	render() {
		const { story } = this.props
		return (
			<Container text style={{ marginTop: '7em' }}>
				<Header as='h1'>{story.title}</Header>
				<Image className='ui mini avatar image' src={story.author_avatar} />
				{this.props.loggedInUser &&
				this.props.loggedInUser.id !== story.author_id ? (
					<ButtonFor
						active={this.state.active}
						handleClick={this.onClick}
						text1={'Follow'}
						text2={'Followed'}
					/>
				) : null}

				<span>{story.author_full_name}</span>
				<p>{story.body}</p>
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
