import React from 'react'
import { Card, Image } from 'semantic-ui-react'
export default function Article(props) {
	const bodyOfText = () => {
		return props.article.content.slice(0, 5)
	}
	const { article } = props

	return (
		<Card
			link
			header={article.title}
			description={props.article.content}
			meta={article.author}
		/>
	)
}
