import React from 'react'
import { Button } from 'semantic-ui-react'

export default function ButtonFor(props) {
	return (
		<div>
			<Button toggle active={props.active} onClick={props.handleClick}>
				{props.active ? props.text1 : props.text2}
			</Button>
		</div>
	)
}
