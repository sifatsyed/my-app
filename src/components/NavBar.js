import React from "react"

// function NavBar()
// {
//     const styles = {
//         color:"blue", backgroundColor:"yellow"
//     }
//     return(
//         <div >
//             <h1 style={styles}>This is the navbar</h1>
//             <ul>
//                 <li>Thing 1</li>
//                 <li>Thing 2</li>
//                 <li>Thing 3</li>
//             </ul>
//         </div>
//     )
// } 

class NavBar extends React.Component {
    render (){
        const styles = {
            color:"blue", backgroundColor:"yellow"
        }
        return(
            <div >
                <h1 style={styles}>This is the navbar</h1>
                <ul>
                    <li>Thing 1</li>
                    <li>Thing 2</li>
                    <li>Thing 3</li>
                </ul>
            </div>
        )
    }
}

export default NavBar