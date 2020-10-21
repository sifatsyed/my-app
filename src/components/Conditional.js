import React, { Component } from "react";

class Conditional extends React.Component {
  /**
   * Another way to do this could be:
   * return (
   * props.isLoading === true ? <h1>Loading...</h1> : return <h1>Finished Loading</h1>;
   * )
   */

//   if (props.isLoading) {
//     return <h1>Loading...</h1>;
//   } else {
//     return <h1>Finished Loading</h1>;
//   }
   constructor(){
       super();
       this.state = {
           isLoggedIn: false
       }
       this.handleClick = this.handleClick.bind(this)
   }

   handleClick() {
       this.setState(prevState => {
           return {
               isLoggedIn: !prevState.isLoggedIn
           }
       })
   }

   render() {
       let buttonValue = this.state.isLoggedIn ? "LOG OUT" : "LOG IN";
       let displayValue = this.state.isLoggedIn ? "You are logged in!" : "You are logged out!";
       return(
           <div>
               <button onClick={this.handleClick}>{buttonValue}</button>
               <h3>{displayValue}</h3>
           </div>
       )
   }

}

export default Conditional;
 