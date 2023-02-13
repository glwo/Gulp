import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import UpdateProfileModal from "./editProfileModal"
import UpdateBusinessModal from '../UpdateBusinessModal';
import OpenModalButton from "../OpenModalButton";
<<<<<<< HEAD
import { thunkLoadAllBusinesses } from "../../store/business";
import { thunkRemoveBusiness } from '../../store/business';
import { useModal } from '../../context/Modal';
import BusinessCard from "../BusinessCard";
=======
import { updateProfile, getProfile } from '../../store/profile';
import { getUser, updateUser } from '../../store/session';
>>>>>>> cf9f36bccb4fddd1e8e514c1c6e3421a935004aa

export default function ProfilePage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
<<<<<<< HEAD
    const business = useSelector(state => state.business.businesses);
    const userBusinesses = Object.values(business).filter(business => business.owner_id == sessionUser.id)
    
    useEffect(() => {
      dispatch(thunkLoadAllBusinesses())
    }, [dispatch])
=======
    // const sessionUser = useSelector(state => state.profileReducer.profile);

    // const dispatch = useDispatch()

    // useEffect(() => {
    //     // dispatch(getUser(+sessionUser.id))
    //     if (sessionUser){
    //     dispatch(updateUser(+sessionUser.id))
    //     .then(dispatch(getUser(+sessionUser.id)))
    //     }
    //     // dispatch(getProfile(+sessionUser.id))
    // }, [dispatch, sessionUser])
>>>>>>> cf9f36bccb4fddd1e8e514c1c6e3421a935004aa

    const removeBusiness = () => {
      // dispatch(thunkRemoveBusiness())
    }
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
                    <li>Biography: {sessionUser.bio}</li>
                    <OpenModalButton
                    className= "updateProfileButton"
                    buttonText="Update Profile"
                    // onItemClick={closeMenu}
                    modalComponent={<UpdateBusinessModal />}
                    />
                    </>
                    }
                </div>
            </ul>
            <div>
              <h3>User's businesses</h3>
              <div>
                {userBusinesses &&
                userBusinesses.map(business => 
                  <div>
                    <OpenModalButton
                      buttonText="Update Business"
                      modalComponent={<UpdateBusinessModal business={business} key={business.id}/>}
                    />
                    <button onClick={removeBusiness(business.id)}>Delete business</button>
                  <BusinessCard business={business} key={business.id} />
                </div>)
                }
              </div>
            </div>
        </div>
    )
}
