import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { thunkCreateBusiness } from '../../store/business';
import { useHistory } from 'react-router-dom';

export default function CreateBusiness() {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.session)
  const history = useHistory();
  const [store_name, setStoreName] = useState('');
  const [description, setDescription] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [address, setAddress] = useState('');
  const [zipcode, setZipcode] = useState();
  const [business_type, setBusinessType] = useState('');
  const [opening_time, setOpeningTime] = useState('')
  const [closing_time, setClosingTime] = useState('');
  const [phone_num, setPhoneNum] = useState();
  const [image_url, setImageUrl] = useState('');
  const [preview, setPreview] = useState("True");
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    const business = {
      store_name,
      description,
      city,
      state,
      address,
      zipcode,
      business_type,
      opening_time,
      closing_time,
      phone_num,
      image_url
    };

    const data = await dispatch(thunkCreateBusiness(business))
    if (data && data.errors) {
      setErrors(data)
    } else {
      console.log(data)
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
            value={store_name}
            onChange={(e) => setStoreName(e.target.value)}
            // required
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type='text'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            // required
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type='text'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            // required
          />
        </div>
        <div>
          <label>State:</label>
          <input
            type='text'
            value={state}
            onChange={(e) => setState(e.target.value)}
            // required
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type='text'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            // required
          />
        </div>
        <div>
          <label>Zipcode:</label>
          <input
            type='number'
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
            // required
          />
        </div>
        <div>
          <label>Business Type:</label>
          <input
            type='text'
            value={business_type}
            onChange={(e) => setBusinessType(e.target.value)}
            // required
          />
        </div>
        <div>
          <label>Opening Time:</label>
          <input
            type='text'
            value={opening_time}
            onChange={(e) => setOpeningTime(e.target.value)}
            // required
          />
        </div>
        <div>
          <label>Closing Time:</label>
          <input
            type='text'
            value={closing_time}
            onChange={(e) => setClosingTime(e.target.value)}
            // required
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type='text'
            value={phone_num}
            onChange={(e) => setPhoneNum(e.target.value)}
            // required
          />
        </div>
        <div>
          <label>Business Image:</label>
          <input
            type='text'
            value={image_url}
            onChange={(e) => setImageUrl(e.target.value)}
            // required
          />
        </div>
        <button type="submit">Create New Business</button>
      </form>
    </div>
  )
}
