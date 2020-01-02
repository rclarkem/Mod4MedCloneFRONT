import React from 'react'
import { Card, Image } from 'semantic-ui-react'
export default function Article(props) {
	const bodyOfText = () => {
		return props.article.content.slice(0, 200)
	}
	const { article } = props

	console.log(props)
	return (
		<Card
			link
			header={article.title}
			description={`${bodyOfText()}...`}
			meta={article.author}
		/>
	)
}
