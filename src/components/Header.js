import React from "react";
import logo from "./img/logo192.png"


export default function Header(){
    
      return(
        <header>

        <div><img src={logo} className="headerLogo"alt="logo"></img></div>
        <button onClick={refreshPage} className="homebtn">Home</button></header>
      )
      
}
function refreshPage() {
    window.location.reload(false);
  }
