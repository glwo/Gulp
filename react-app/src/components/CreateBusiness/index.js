import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { thunkCreateBusiness } from '../../store/business';
import { useHistory } from 'react-router-dom';

export default function CreateBusiness() {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.session)
  const history = useHistory();
  const [storeName, setStoreName] = useState('');
  const [description, setDescription] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [address, setAddress] = useState('');
  const [zipcode, setZipcode] = useState();
  const [businessType, setBusinessType] = useState('');
  const [openingTime, setOpeningTime] = useState('')
  const [closingTime, setClosingTime] = useState('');
  const [phoneNum, setPhoneNum] = useState();
  const [imageUrl, setImageUrl] = useState('');
  const [preview, setPreview] = useState("True");
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    let business = {
        storeName,
        description,
        city,
        state,
        address,
        zipcode,
        businessType,
        openingTime,
        closingTime,
        phoneNum,
        imageUrl
      };

    const data = await dispatch(thunkCreateBusiness(business))
    if (data) {
      setErrors(data)
    }
  }

  return (
    <div>
      <h1>
        Create Business Page
      </h1>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <div>
          <label>Business Name:</label>
          <input
            type='text'
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type='text'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type='text'
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div>
          <label>State:</label>
          <input
            type='text'
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type='text'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label>Zipcode:</label>
          <input
            type='number'
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
          />
        </div>
        <div>
          <label>Business Type:</label>
          <input
            type='text'
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
          />
        </div>
        <div>
          <label>Opening Time:</label>
          <input
            type='text'
            value={openingTime}
            onChange={(e) => setOpeningTime(e.target.value)}
          />
        </div>
        <div>
          <label>Closing Time:</label>
          <input
            type='text'
            value={closingTime}
            onChange={(e) => setClosingTime(e.target.value)}
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type='text'
            value={phoneNum}
            onChange={(e) => setPhoneNum(e.target.value)}
          />
        </div>
        <div>
          <label>Business Image:</label>
          <input
            type='text'
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <button type="submit">Create New Business</button>
      </form>
    </div>
  )
}
