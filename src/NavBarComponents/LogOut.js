import React from 'react'
import { NavLink } from 'react-router-dom'

export default function LogOut(props) {
	return (
		<div>
			<div className='ui secondary menu'>
				<NavLink
					to='/new_story'
					className='item right navbar-item'
					activeStyle={{
						fontWeight: 'bold',
						color: 'green',
					}}
				>
					<i class='pencil alternate icon'></i>
					New
				</NavLink>

				<NavLink to='/stories' className='item navbar-item'>
					stories
				</NavLink>

				<nav className='item navbar-item'>{props.loggedInUser}</nav>

				<NavLink exact to='/logout' className='item navbar-item'>
					Logout
				</NavLink>
			</div>
		</div>
	)
}
