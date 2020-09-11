import React from "react"

function Footer()
{   
    const firstName = "Sifat";
    const lastName = "Syed";

    //THIS CAN BE javascript code, can write jsx code in return statement

    return(
        <footer className="navbar">
            This is the footer, written by {firstName + " " + lastName} 
        </footer>
    )
}
export default Footer