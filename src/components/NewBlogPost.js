import React, { Component } from 'react'
import { Button, Checkbox, Form, TextArea, Container } from 'semantic-ui-react'
import Header from './Header'

export default class NewPost extends Component {
	state = {
		title: '',
		body: '',
		// author_id: this.props.loggedinUser || token
	}

	onChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
		})
	}

	onSubmit = e => {
		e.preventDefault()
		this.props.addStories(this.state)
		this.props.history.push('/stories')
	}

	render() {
		return (
			<div>
				<Header body='Write Your Story' />
				<Container fluid>
					<Form onSubmit={this.onSubmit}>
						<input
							name='title'
							placeholder='Title'
							value={this.state.title}
							onChange={this.onChange}
						></input>

						<TextArea
							name='body'
							placeholder='Tell us more'
							value={this.state.body}
							onChange={this.onChange}
						/>
						<Button type='submit'>Submit</Button>
					</Form>
				</Container>
			</div>
		)
	}
}
