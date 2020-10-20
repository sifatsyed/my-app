import React from "react";

class MyInfo extends React.Component {
  constructor(){
    super();
    this.state = {
        name: "Sifat",
        major: "Computer Science"
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <p>I'm a {this.state.major} Major</p>
        <ul>
          <li>New York</li>
          <li>India</li>
          <li>Europe</li>
        </ul>
      </div>
    );
  }
}

export default MyInfo;
