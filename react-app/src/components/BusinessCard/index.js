import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import './BusinessCard.css'

const BusinessCard = ({ business }) => {
  const dispatch = useDispatch();
  if (!business) {
    return null
  }

  return (
    <div className="businessCard-main-div">
      <Link to={`/business/${business.id}`}>
        <img className="business-preview-image" src={business.business_images[0].image_url} />
        <div>
          <div>{business.store_name}</div>
        </div>
      </Link>
    </div>
    )
  };

export default BusinessCard;
