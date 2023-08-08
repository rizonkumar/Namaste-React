import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummmy",
        location: "Default Location",
      }
    };
  }

  async componentDidMount(){
    const data = await fetch("https://api.github.com/users/rizonkumar");
    const json = await data.json();

    this.setState({
      userInfo: json,
    })
  }

  componentDidUpdate(){
  }

  componentWillUnmount(){
  }

  render() {

    const {name, location, avatar_url} = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h3> Name: {name}</h3>
        <h3> Location: {location}</h3>
      </div>
    );
  };
};

export default UserClass;
