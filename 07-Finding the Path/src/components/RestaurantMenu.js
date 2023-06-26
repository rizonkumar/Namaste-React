import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.083909325810092&lng=77.64086888929793&restaurantId=130355&submitAction=ENTER"
    );

    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{resInfo?.cards[0]?.card?.card?.info.name}</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Diet Coke</li>
        <li>Burger</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
