import React, { Component } from 'react'
import { Form, Input, TextArea, Button, Select, Container } from 'semantic-ui-react'

export default class LogInForm extends Component {
	render() {
		return (
			<div>
				<Form>
					<Container text>
						<Form.Field
							id='form-input-control-email'
							control={Input}
							label='Email'
							placeholder='joe@schmoe.com'
						/>
						<Form.Input label='Enter Password' type='password' />

						<Form.Field id='form-button-control-public' control={Button} content='Confirm' />
					</Container>
				</Form>
			</div>
		)
	}
}
