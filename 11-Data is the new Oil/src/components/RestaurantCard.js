import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cusines, avgRating, deliveryTime } =
    resData?.info;
  // console.log(resData);
  return (
    <div className="m-3 p-3 w-[250px] rounded-lg bg-gray-270 hover:bg-gray-400">
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="food_image"
      />
      <h3 className="font-bold py-1 text-lg">{name}</h3>
      <h4 className="py-1">
        {Array.isArray(cusines) ? cusines.join(",") : ""}
      </h4>
      <h4 className="py-1">{avgRating} stars</h4>
      <h4 className="py-1">{deliveryTime}</h4>
    </div>
  );
};

// Higher Order Component
// input -> restaurant card
// output -> restaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  //  as it will return another component inside it
  return (props) => {
    <div>
      <label>Promoted</label>
      <RestaurantCard {...props} />
    </div>;
  };
};

export default RestaurantCard;
