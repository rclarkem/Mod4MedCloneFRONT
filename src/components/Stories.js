import React from 'react'
import StoryCard from './StoryCard'

export default function Stories(props) {
	return (
		<div>
			{props.stories.map(story => {
				return (
					<StoryCard
						story={story}
						key={story.id}
						vistor={props.vistor}
						handleClickEventStory={props.handleClickEventStory}
					/>
				)
			})}
		</div>
	)
}
