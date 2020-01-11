import React, { Component } from 'react'
import { Container, Card, Image } from 'semantic-ui-react'
import ButtonFor from './ButtonFor'

export default class StoryCard extends Component {
	state = { active: true }

	onClick = () => this.setState(prevState => ({ active: !prevState.active }))

	render() {
		const { title, author_full_name, body, story_length } = this.props.story
		const { active } = this.state
		console.log(this.props)
		return (
			<Card>
				<Card.Content header={title} />
				<Card.Content
					content={story_length}
					onClick={e => this.props.handleClickEventStory(this.props.story)}
				/>

				<Card.Content textAlign={'right'}>
					<Image src={this.props.story.author_avatar} avatar />
					<span>{author_full_name}</span>
				</Card.Content>
			</Card>
		)
	}
}

// {
// 	this.props.vistor &&
// 	this.props.loggedInUser.id !== this.props.story.author_id ? (
// 		<ButtonFor
// 			active={this.state.active}
// 			handleClick={this.onClick}
// 			text1={'Follow'}
// 			text2={'Followed'}
// 		/>
// 	) : null
