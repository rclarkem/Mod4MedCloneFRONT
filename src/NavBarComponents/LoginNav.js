import React from 'react'
import { NavLink } from 'react-router-dom'

export default function LoginNav(props) {
	return (
		<div className='ui secondary menu'>
			<NavLink to='/login' className='item right navbar-item'>
				Log In
			</NavLink>
			<NavLink to='/signup' className='item navbar-item'>
				Sign Up
			</NavLink>
			<NavLink exact to='/' className='item navbar-item'>
				Home
			</NavLink>
		</div>
	)
}
