import React, { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../context/Modal";
import { thunkUpdateBusiness } from "../../store/business";
import './UpdateBusinessModal.css'

function UpdateBusinessModal({ business }) {
  // console.log(business)
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.session)
  const [store_name, setStoreName] = useState(business.store_name);
  const [description, setDescription] = useState(business.description);
  const [city, setCity] = useState(business.city);
  const [state, setState] = useState(business.state);
  const [address, setAddress] = useState(business.address);
  const [zipcode, setZipcode] = useState(business.zipcode);
  const [business_type, setBusinessType] = useState(business.business_type);
  const [opening_time, setOpeningTime] = useState(business.opening_time)
  const [closing_time, setClosingTime] = useState(business.closing_time);
  const [phone_num, setPhoneNum] = useState(business.phone_num);
  const [image_url, setImageUrl] = useState(business.business_images[0].image_url);
  const [preview, setPreview] = useState(business.preview);
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    const businessData = {
      ...business,
      id: business.id,
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

    const data = await dispatch(thunkUpdateBusiness(businessData))
    if (data.errors) {
      setErrors(data.errors)
    } else {
      setErrors([]);
      closeModal();
    }
  }

  return (
    <div className="update-business-modal">
      <div>
        <h1>Update Business</h1>
      </div>
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
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type='text'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type='text'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div>
          <label>State:</label>
          <input
            type='text'
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type='text'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Zipcode:</label>
          <input
            type='number'
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Business Type:</label>
          <select
            value={business_type}
            onChange={(e) => setBusinessType(e.target.value)}
          >
            <option value="restaurant">Restaurant</option>
            <option value="auto">Auto Service</option>
            <option value="home">Home Service</option>
            <option value="salon">Hair Salon</option>
          </select>
        </div>
        <div>
          <label>Opening Time:</label>
          <input
            type='text'
            value={opening_time}
            onChange={(e) => setOpeningTime(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Closing Time:</label>
          <input
            type='text'
            value={closing_time}
            onChange={(e) => setClosingTime(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type='text'
            value={phone_num}
            onChange={(e) => setPhoneNum(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Business Image:</label>
          <input
            type='text'
            value={image_url}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </div>
        <button className="update-button" type="submit">Update Business</button>
      </form>
    </div>
  )
};

export default UpdateBusinessModal;
