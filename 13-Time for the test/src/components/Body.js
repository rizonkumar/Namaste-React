import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  // it will render new component with promoted label
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  // console.log(listOfRestaurants);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.083909325810092&lng=77.64086888929793&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>Offline!</h1>;
console.log(listOfRestaurants)
  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bg-gray-50">
      <div className="flex flex-col md:flex-row items-center justify-between px-4 py-3 bg-white shadow-lg">
        <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
          <input
            type="text"
            className="border border-solid border-gray-300 rounded-full p-2 pl-4 pr-10 text-gray-600 placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            placeholder="Search for restaurants or cuisines"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-full ml-2 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex items-center">
          <button
            className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-full mb-4 md:mb-0 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurant(filteredList);

            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="container mx-auto py-8">
        <div className="flex flex-wrap">
          {filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              {/* if the restaurant is promoted then add a promoted label to it */}
              {/* here we are checking if the restaurant is promoted or not if its promoted
              then call <RestaurantCardPromoted/> else render normal restaurant card */}
              {restaurant.info.promoted ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
