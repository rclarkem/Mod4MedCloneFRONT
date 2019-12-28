import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function LoginNav(props) {
	console.log(props)
	return (
		<div className='ui secondary menu'>
			<NavLink to='/login' className='item right navbar-item'>
				Log In
			</NavLink>
			<NavLink to='/signup' className='item navbar-item'>
				Sign Up
			</NavLink>
			<NavLink
				to='/'
				className='item navbar-item'
				onClick={e => props.goBackHome(e.target.value)}
			>
				home
			</NavLink>
		</div>
	)
}
