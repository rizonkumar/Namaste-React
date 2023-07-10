import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        // Inital state so give any dummy data
        name: "Dummmy",
        location: "Default Location",
      }
    };
    console.log(this.props.name + "Child Constructor")
  }

  async componentDidMount(){
    console.log(this.props.name + "Child Component Did Mount");
    // API Call
    const data = await fetch("https://api.github.com/users/rizonkumar");
    const json = await data.json();

    this.setState({
      userInfo: json,
    })
    console.log(json)
  }

  componentDidUpdate(){
    console.log("Component Did Update");
  }

  componentWillUnmount(){
    console.log("Componet Will Unmount");
  }

  render() {
    // const { name, location, contact } = this.props;
    // const { count } = this.state;
    console.log(this.props.name + "Child Render")

    const {name, location, avatar_url} = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h3> Name: {name}</h3>
        <h3> Location: {location}</h3>
        {/* <h3> Contact: {contact} </h3> */}
      </div>
    );
  };
};

export default UserClass;
