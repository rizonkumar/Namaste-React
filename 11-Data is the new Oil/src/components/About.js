import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="bg-gray-200 p-4">
        <h1 className="text-2xl font-bold mb-4">About</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({loggedInUser}) => {
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            }}
          </UserContext.Consumer>
        </div>
        <h2 className="text-xl font-semibold mb-4">This is Namaste React Web Series</h2>
        <UserClass
          name={"First"}
          location={"Bengaluru"}
          contact={"rizon.kumar.rahi@gmail.com"}
        />
      </div>
    );
  }
}

export default About;
