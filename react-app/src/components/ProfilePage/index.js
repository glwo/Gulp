import React, { useState, useEffect, useRef  } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import UpdateProfileModal from "./editProfileModal"
import UpdateBusinessModal from '../UpdateBusinessModal';
import OpenModalButton from "../OpenModalButton";
import { thunkLoadAllBusinesses } from "../../store/business";
import { thunkRemoveBusiness } from '../../store/business';
import { useModal } from '../../context/Modal';
import BusinessCard from "../BusinessCard";

export default function ProfilePage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const business = useSelector(state => state.business.businesses);
    const userBusinesses = Object.values(business).filter(business => business.owner_id == sessionUser.id)
    
    useEffect(() => {
      dispatch(thunkLoadAllBusinesses())
    }, [dispatch])

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
