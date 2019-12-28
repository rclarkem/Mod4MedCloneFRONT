import React from 'react'
import LoginNav from './LoginNav'
import LogOut from './LogOut'
import { NavLink } from 'react-router-dom'

export default function Navbar(props) {
	return (
		<div className='topnav'>
			{!props.loggedInUser && !props.loggedIn ? (
				<LoginNav goBackHome={props.goBackHome} />
			) : (
				<LogOut loggedInUser={props.loggedInUser} />
			)}
		</div>
	)
}
