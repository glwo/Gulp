import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import SearchNav from '../searchNav';
import CreateBusiness from '../CreateBusiness';

function Navigation({ isLoaded }) {
	const sessionUser = useSelector(state => state.session.user);
	const { category, location } = useParams()
	return (
		<div id='permanentNavBar'>
			<NavLink exact to="/">
				<div id='homeicon'>
					<h1>Gulp</h1>
					<i class="fa-solid fa-otter"></i>
				</div>
			</NavLink>
			<SearchNav />
			<div className='addBusinessNav'>
        <NavLink exact to="/business" hidden={sessionUser && sessionUser !== null ? false : true}>
          Add your Business!
        </NavLink>
      </div>
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
