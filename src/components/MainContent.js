import React from "react"

import Conditional from "./Conditional"

class MainContent extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: true
        }
    }

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({
    //            isLoading: false 
    //         })
    //     }, 1500)
    // }

    render() {
        return (
            <div>
                <Conditional/>
            </div>
        )
    }
}

export default MainContent