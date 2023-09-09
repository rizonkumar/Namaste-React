import {createContext} from "react";

const UserContext = createContext({
    // pieces of information
    loggedInUser: "Default User",
});

export default UserContext; 