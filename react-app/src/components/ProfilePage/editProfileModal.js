import React, { useState} from "react";
// import { updateProfile } from "../../store/profile";
import { updateUser, getUser } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../context/Modal";
import { getProfile } from '../../store/profile';
import "./editProfileModal.css";

function UpdateProfileModal() {
  const sessionUser = useSelector(state => state.session.user);
  const id = sessionUser.id
  const dispatch = useDispatch();
  const [first_name, setFirstName] = useState(sessionUser.first_name);
  const [last_name, setLastName] = useState(sessionUser.last_name);
  const [username, setUserName] = useState(sessionUser.username);
  const [email, setEmail] = useState(sessionUser.email);
  const [img_url, setImgUrl] = useState(sessionUser.img_url);
  const [bio, setBio] = useState(sessionUser.bio);
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();
  // const profile = {
  //   id,
  //   first_name,
  //   last_name,
  //   username,
  //   email,
  //   img_url,
  //   bio
  //   }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(updateUser({id, first_name, last_name, username, email, img_url, bio}))
    // const data = await dispatch(updateProfile(profile))
    // const data = await dispatch(updateProfile({id}));
    .catch(async (_req, res) => {
      if (res && res.errors) setErrors(res.errors);
    })
    if(data) {
        dispatch(getUser(id))
        closeModal()
    }
  };

  return (
    <>
    <div className="editProfileModal">
      <h1>Update Your Profile</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors?.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <div>
        <label>
          First Name :
          <input
            type="text"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        </div>
        <div>
        <label>
          Last Name :
          <input
            type="text"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        </div>
        <div>
        <label>
          Username :
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </label>
        </div>
        <div hidden={(sessionUser.id !== 1 ? false : true)}>
        <label>
          Email :
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        </div>
        <div>
        <label>
          Profile Picture :
          <input
            type="text"
            value={img_url}
            onChange={(e) => setImgUrl(e.target.value)}
            required
          />
        </label>
        </div>
        <div>
        <label>
          Biography :
          <input
            type="text"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            required
          />
        </label>
        </div>
        <div>
        <button className="updateProfileButton" type="submit">Update Profile</button>
        </div>
      </form>
      </div>
    </>
  );
}

export default UpdateProfileModal;
