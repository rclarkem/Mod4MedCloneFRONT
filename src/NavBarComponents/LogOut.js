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
					<i className='pencil alternate icon'></i>
					New
				</NavLink>

				<NavLink
					to='/stories'
					className='item navbar-item'
					onClick={e => props.goBackHome(e.target.value)}
				>
					My Posts
				</NavLink>

				<NavLink
					exact
					to='/'
					className='item navbar-item'
					onClick={e => props.goBackHome(e.target.value)}
				>
					{props.loggedInUser.name}
				</NavLink>

				<NavLink exact to='/logout' className='item navbar-item'>
					Logout
				</NavLink>
			</div>
		</div>
	)
}
