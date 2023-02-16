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
        <img className="business-preview-image" src={business.business_images !== undefined ? business.business_images[0].image_url : null} alt="No Business Image found" />
        <div>
          <div className="businessStoreName">{business.store_name}</div>
          <div><i class="fa-solid fa-star"></i> {business.avg_rating} - <i class="fa-solid fa-user-check"></i> {business.num_reviews} Reviews</div>
        </div>
      </Link>
    </div>
    )
  };

export default BusinessCard;
