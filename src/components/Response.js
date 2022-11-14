import React from "react";
import { Link } from "react-router-dom";


export default function Response(props){
    return(
        <div>
            <Link to="/"><button>Back</button></Link>
        <h1>Name</h1>
        <h2>Last Name</h2>
        
        </div>
    )
}