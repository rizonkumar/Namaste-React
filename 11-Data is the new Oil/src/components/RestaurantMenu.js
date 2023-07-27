import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  // by default 0th index is open
  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="bg-white m-5 p-5 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-2">{name}</h1>
      <p className="text-gray-700 mb-4 font-semibold">
        {cuisines ? cuisines.join(", ") : ""} - {costForTwoMessage}
      </p>
      {/* Categories Accordions */}
      {categories.map((category, index) => (
        // Controller Component
        <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card} 
        showItems = {index === showIndex ? true : false}
        setShowIndex= {() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
 