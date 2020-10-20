import React, { Component } from "react";

import NavBar from "./components/NavBar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import MyInfo from "./components/MyInfo";

// function AppNew(){
//     return(
//         <div>
// <NavBar />
// <MainContent />
// <Footer />
//         </div>
//     )
// }

class AppNew extends React.Component {
 
  render() {
    const styles = {
        textAlign: "center"
    }
    return (
      <div style={styles}>
        <NavBar />
        <MyInfo />
        <MainContent />
        <Header username="Sifat" />
        <Greeting />
        <Footer />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <p>Welcome, {this.props.username}!</p>
      </header>
    );
  }
}

class Greeting extends Component {
  render() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    if (hours < 12) {
      timeOfDay = "morning";
    } else {
      timeOfDay = "night";
    }

    return <h1>Good {timeOfDay}!</h1>;
  }
}

export default AppNew;
