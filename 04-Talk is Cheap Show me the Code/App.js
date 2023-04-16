import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Component Required
 *
 * Header
 *  - Logo
 *  - nav-item
 *
 * Body
 *  - Search
 *  - Restaurant Container
 *    - RestaurantCard
 *      - Image
 *      - Name of the Restaurant
 *      - Star Rating
 *      - Cuisine
 *      - Delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const { image, name, cusines, rating, deliverTime } = resData;
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img className="res-logo" alt="res-logo" src={image} />
      <h3>{name}</h3>
      <h4>{Array.isArray(cusines) ? cusines.join(",") : ""}</h4>
      <h4>{rating} stars</h4>
      <h4>{deliverTime}</h4>
    </div>
  );
};

// data
const resObject = [
  {
    name: "Burger King",
    id: "01",
    image:
      "https://media.istockphoto.com/id/1206323282/photo/juicy-hamburger-on-white-background.jpg?s=612x612&w=0&k=20&c=K0DxyiChLwewXcCy8aLjjOqkc8QXPgQMAW-vwRCzqG4=",
    cusines: ["Burger", "American"],
    rating: "4.2",
    deliverTime: 36,
  },
  {
    name: "KFC",
    id: "02",
    image:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000974.jpg?ver=27.36",
    cusines: ["KFC Burger"],
    rating: "4.5",
    deliverTime: 23,
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resObject.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
