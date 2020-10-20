import React from "react"

class NavBar extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
       this.setState(prevState => {
           return {
               count: prevState.count + 1
           }
       })
    }
    render (){
        const styles = {
            color:"black", backgroundColor:"pink"
        }
        return(
            <div >
                <h1 style={styles}>This is the navbar</h1>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>
                    Click
                </button>

            </div>
        )
    }
}

export default NavBar