import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);

	return (
		<div id = 'permanentNavBar'>
			<NavLink exact to="/">
				<div id='homeicon'>
				<h1>Yelp</h1>
				<i class="fa-solid fa-eye"></i>
				</div>
			</NavLink>
			<div id='nav-buttons'>
			{isLoaded && (
				<ul>
				<li className='navButtonProfile'>
					<ProfileButton user={sessionUser} />
				</li>
				</ul>
			)}
			</div>
		</div>
	);
}

export default Navigation;
