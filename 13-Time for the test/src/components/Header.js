import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  // Subscribing to the store using a Selector
  // to the small portion so cart.items
  // cart will get the data of the items
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="logo-container">
          <img className="w-20" src={LOGO_URL} alt="Logo" />
        </div>
        <div className="flex items-center">
          <ul className="flex space-x-4">
            <li>
              {onlineStatus ? (
                <span className="text-green-500">✅</span>
              ) : (
                <span className="text-red-500">❌</span>
              )}
            </li>
            <li>
              <NavLink
                exact
                to="/"
                activeClassName="text-white font-bold"
                className="text-gray-200 hover:text-white"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                activeClassName="text-white font-bold"
                className="text-gray-200 hover:text-white"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                activeClassName="text-white font-bold"
                className="text-gray-200 hover:text-white"
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/grocery"
                activeClassName="text-white font-bold"
                className="text-gray-200 hover:text-white"
              >
                Grocery
              </NavLink>
            </li>
            <li>
              <Link
                to="/cart"
                className="text-gray-200 hover:text-white font-bold flex items-center"
              >
                <span role="img" aria-label="Cart" className="text-2xl mr-1">
                  🛒
                </span>
                <span className="text-white">{cartItems.length}</span>
              </Link>
            </li>
            <li>
              <button
                className="login text-gray-200 hover:text-white"
                onClick={() => {
                  btnNameReact === "Login"
                    ? setbtnNameReact("Logout")
                    : setbtnNameReact("Login");
                }}
              >
                {btnNameReact}
              </button>
            </li>
            <li className="px-4 font-semibold text-white">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
