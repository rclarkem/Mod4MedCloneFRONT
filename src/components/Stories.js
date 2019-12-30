import React from 'react'
import StoryCard from './StoryCard'
import { Container } from 'semantic-ui-react'

export default function Stories(props) {
	return (
		<Container>
			<div className=' ui three column grid'>
				{props.stories.map(story => {
					return (
						<StoryCard
							story={story}
							key={story.id}
							vistor={props.vistor}
							handleClickEventStory={props.handleClickEventStory}
							loggedInUser={props.loggedInUser}
						/>
					)
				})}
			</div>
		</Container>
	)
}
