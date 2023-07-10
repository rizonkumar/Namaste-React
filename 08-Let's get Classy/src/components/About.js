import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount");
  }

  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React Web Series</h2>
        <UserClass
          name={"First"}
          location={"Bengaluru"}
          contact={"rizon.kumar.rahi@gmail.com"}
        />

      </div>
    );
  }
}

// Functional Code
// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Namaste React Web Series</h2>

//       {/* <User name={"Rizon Kumar (functional way)"}
//       location={"Bengaluru"} contact = {"rizon.kumar.rahi@gmail.com"} /> */}

//       <UserClass name={"Rizon Kumar (classbased component)"}
//        location={"Bengaluru Class"} contact = {"rizon.kumar.rahi@gmail.com"}/>

//     </div>
//   );
// };

export default About;
