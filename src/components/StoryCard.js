import React, { Component } from 'react'
import { Container, Card, Image } from 'semantic-ui-react'
import ButtonFor from './ButtonFor'

export default class StoryCard extends Component {
	state = { active: true }

	onClick = () => this.setState(prevState => ({ active: !prevState.active }))

	bodyOfText = () => {
		return this.props.story.body.slice(0, 200)
	}

	render() {
		const { title, author_full_name } = this.props.story
		const { active } = this.state

		return (
			<Card>
				<Card.Content header={title} />
				<Card.Content
					content={`${this.bodyOfText()}...`}
					onClick={e => this.props.handleClickEventStory(this.props.story)}
				/>
				{!this.props.vistor &&
				this.props.loggedInUser.id !== this.props.story.author_id ? (
					<ButtonFor
						active={this.state.active}
						handleClick={this.onClick}
						text1={'Follow'}
						text2={'Followed'}
					/>
				) : null}
				<Card.Content textAlign={'right'}>
					<Image src={this.props.story.author_avatar} avatar />
					<span>{author_full_name}</span>
				</Card.Content>
			</Card>
		)
	}
}

{
	/* <div className='ui column'>
				<div className='ui raised link card'>
					<div
						className='content'
						onClick={e => this.props.handleClickEventStory(this.props.story)}
					>
						<div className='header'>{title}</div>
						<div className='meta'>
							<span className='category'>{this.bodyOfText()}</span>
						</div>
						<div className='description'>
							<p></p>
						</div>
					</div>

					<div className='extra content'>
						<div className='right floated author'>
							<img
								className='ui avatar image'
								src={this.props.story.author_avatar}
								alt='avatar'
							/>
							{this.props.story.author_full_name}
						</div>
						{!this.props.vistor &&
						this.props.loggedInUser.id !== this.props.story.author_id ? (
							<ButtonFor
								active={this.state.active}
								handleClick={this.onClick}
								text1={'Follow'}
								text2={'Followed'}
							/>
						) : null}
					</div>
				</div>
			</div> */
}
