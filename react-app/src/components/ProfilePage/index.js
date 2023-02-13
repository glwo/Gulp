import React, { useState, useEffect, useRef  } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
<<<<<<< HEAD
import { updateProfile} from '../../store/profile'
=======
import UpdateProfileModal from "./editProfileModal"
import OpenModalButton from "../OpenModalButton";
>>>>>>> dev

export default function ProfilePage() {
    const sessionUser = useSelector(state => state.session.user);

    return (
        <div>
            <h1>
                Profile Page
            </h1>
            <ul className="profilepageul">
                <div>
                {sessionUser &&
                    <>
                    <li>
                        <img id='profilepic' src={sessionUser.img_url} alt="Profile picture could not be found"></img>
                    </li>
                    <li>User: {sessionUser.username}</li>
                    <li>Name: {sessionUser.first_name} {sessionUser.last_name}</li>
                    <li>Email: {sessionUser.email}</li>
<<<<<<< HEAD
                    <button>Update Profile</button>
=======
                    <li>Biography: {sessionUser.bio}</li>
                    <OpenModalButton
                    className= "updateProfileButton"
                    buttonText="Update Profile"
                    // onItemClick={closeMenu}
                    modalComponent={<UpdateProfileModal />}
                    />
>>>>>>> dev
                    </>
                    }
                </div>
            </ul>
        </div>
    )
}
