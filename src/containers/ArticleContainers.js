import React, { Component } from 'react'
import Article from '../components/Article'
import { Card, Container } from 'semantic-ui-react'
export default class ArticleContainers extends Component {
	state = {
		articles: [],
	}

	componentDidMount() {
		fetch('http://localhost:3000/articles')
			.then(response => response.json())
			.then(response => {
				const limitArticles = response.slice(-6)
				this.setState({
					articles: limitArticles,
				})
			})
	}

	render() {
		const articlesMap = this.state.articles.map(article => {
			return <Article article={article} key={article.id} />
		})
		return (
			<Container>
				<Card.Group itemsPerRow={3}>{articlesMap}</Card.Group>
			</Container>
		)
	}
}
