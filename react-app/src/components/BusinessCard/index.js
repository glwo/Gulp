import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import './BusinessCard.css'

const BusinessCard = ({ business }) => {
  const dispatch = useDispatch();
  if (!business) {
    return null
  }

  return (
    <Link className="businessCard-main-div" to={`/business/${business.id}`}>
      <div className="image-div">
        <img className="business-preview-image" src={business.business_images[0] !== undefined ? business.business_images[0].image_url : null} alt="No Business Image found" />
      </div>
      <div className="businessInfoDiv">
        <div className="businessStoreName">{business.store_name}</div>
        <div>
          {business.avg_rating >= 1 ? <i className="fas fa-solid fa-star red"></i> : <i className="fas fa-solid fa-star gray"></i>}
          {business.avg_rating >= 2 ? <i className="fas fa-solid fa-star red"></i> : <i className="fas fa-solid fa-star gray"></i>}
          {business.avg_rating >= 3 ? <i className="fas fa-solid fa-star red"></i> : <i className="fas fa-solid fa-star gray"></i>}
          {business.avg_rating >= 4 ? <i className="fas fa-solid fa-star red"></i> : <i className="fas fa-solid fa-star gray"></i>}
          {business.avg_rating >= 5 ? <i className="fas fa-solid fa-star red"></i> : <i className="fas fa-solid fa-star gray"></i>}
        </div>
        <div>{business.num_reviews} reviews</div>
      </div>
    </Link>
  )
};

export default BusinessCard;
