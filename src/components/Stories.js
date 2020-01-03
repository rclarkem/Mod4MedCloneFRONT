import React from 'react'
import StoryCard from './StoryCard'
import { Container, Card } from 'semantic-ui-react'

export default function Stories(props) {
	console.log(props)
	return (
		<Container>
			<Card.Group itemsPerRow={3}>
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
			</Card.Group>
		</Container>
	)
}
