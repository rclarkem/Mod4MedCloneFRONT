import React, { Component } from 'react'

export default class StoryCard extends Component {
	bodyOfText = () => {
		// console.log(this.props.story.body.length)
		return this.props.story.body.slice(0, 100)
	}

	//TODO: Seralizer for my author_id so that I can extract out their names to display
	// TODO: Add Migration for images for stories table

	render() {
		const { title } = this.props.story
		// console.log(this.props.story)
		return (
			<div
				className='ui raised link card'
				onClick={e => this.props.handleClickEventStory(this.props.story)}
			>
				<div className='content'>
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
							src='/images/avatar/small/matt.jpg'
							alt='avatar'
						/>{' '}
						Matt
					</div>
					{!this.props.vistor && (
						<button className='ui active button'>
							<i className='user icon'></i>Follow
						</button>
					)}
				</div>
			</div>
		)
	}
}
