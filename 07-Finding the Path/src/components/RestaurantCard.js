import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cusines, avgRating, deliveryTime } =
    resData?.data;
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{Array.isArray(cusines) ? cusines.join(",") : ""}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
