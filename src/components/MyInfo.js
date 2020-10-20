import React, {Component} from "react";

class MyInfo extends Component {
  constructor(){
    super();
    this.state = {
        name: "Sifat",
        major: "Computer Science",
        isLoggedIn: true
    }
  }
  render() {
    let wordDisplay;
    if(this.state.isLoggedIn){
      wordDisplay = "in";
    } else{
      wordDisplay = "out";
    }
    return (
      <div>
        <h1>{this.state.name}</h1>
        <p>I'm a {this.state.major} Major</p>
        <ul>
          <li>New York</li>
          <li>India</li>
          <li>Europe</li>
        </ul>
        <h1>I'm currently logged {wordDisplay}</h1>
      </div>
    );
  }
}

export default MyInfo;
