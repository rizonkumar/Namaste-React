import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);
  console.log(loggedInUser);

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
                activeclassname="text-white font-bold"
                className="text-gray-200 hover:text-white"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                activeclassname="text-white font-bold"
                className="text-gray-200 hover:text-white"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                activeclassname="text-white font-bold"
                className="text-gray-200 hover:text-white"
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/grocery"
                activeclassname="text-white font-bold"
                className="text-gray-200 hover:text-white"
              >
                Grocery
              </NavLink>
            </li>
            <li>
              <Link
                to=""
                className="text-gray-200 hover:text-white"
              >
                Cart
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
