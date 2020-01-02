import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

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
					<i className='book icon'></i>
					My Posts
				</NavLink>
				<NavLink
					to='/profile'
					className='item navbar-item'
					onClick={e => props.goBackHome(e.target.value)}
				>
					<i className='gear'></i>
					Settings
				</NavLink>

				<NavLink
					exact
					to='/'
					className='item navbar-item'
					onClick={e => props.goBackHome(e.target.value)}
				>
					<i className='user icon'></i>
					{props.loggedInUser.name}'s Dashboard
				</NavLink>

				<NavLink exact to='/logout' className='item navbar-item'>
					<i className='sign-out icon'></i>
					Logout
				</NavLink>
			</div>
		</div>
	)
}
