import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import './BusinessCategoryCard.css'

const BusinessCategoryCard = ({ business }) => {
  const dispatch = useDispatch();
  if (!business) {
    return null
  }

  return (
    <Link className="businessCat-main-div" to={`/business/${business.id}`}>
      <img className="businessCat-preview-image" src={business.business_images[0].image_url} />
      <div className="businessCat-detail-div">
        <div className="businessStoreName">{business.store_name}</div>
        <div>{business.description}</div>
        <div>{business.opening_time} - {business.closing_time}</div>
        <div>
          {business.avg_rating >= 1 ? <i className="fas fa-solid fa-star red"></i> : <i className="fas fa-solid fa-star gray"></i>} 
          {business.avg_rating >= 2 ? <i className="fas fa-solid fa-star red"></i> : <i className="fas fa-solid fa-star gray"></i>} 
          {business.avg_rating >= 3 ? <i className="fas fa-solid fa-star red"></i> : <i className="fas fa-solid fa-star gray"></i>} 
          {business.avg_rating >= 4 ? <i className="fas fa-solid fa-star red"></i> : <i className="fas fa-solid fa-star gray"></i>} 
          {business.avg_rating >= 5 ? <i className="fas fa-solid fa-star red"></i> : <i className="fas fa-solid fa-star gray"></i>}
          |  {business.num_reviews}
        </div>
        <div></div>
      </div>
    </Link>
  )
};

export default BusinessCategoryCard;
