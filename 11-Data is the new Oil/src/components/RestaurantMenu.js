import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="bg-gray-300 m-5 p-5 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-2">{name}</h1>
      <p className="text-gray-700 mb-4">
        {cuisines ? cuisines.join(", ") : ""} - {costForTwoMessage}
      </p>
      <h2 className="text-2xl font-bold mb-2">Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li
            key={item.card.info.name}
            className="flex items-center justify-between py-2 border-b border-gray-300"
          >
            <span className="font-semibold">{item.card.info.name}</span>
            <span>{"₹"}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
