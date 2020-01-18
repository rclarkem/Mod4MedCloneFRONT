import React, { Component } from 'react'
import { Form, Input, TextArea, Button, Select, Container } from 'semantic-ui-react'

export default class SignUp extends Component {
	render() {
		return (
			<div>
				<Form>
					<Container text>
						<Form.Group widths='equal'>
							<Form.Field
								id='form-input-control-full-name'
								control={Input}
								label='Name'
								placeholder='full name'
							/>
						</Form.Group>
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
