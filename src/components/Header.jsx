import React from "react";
import logos from "../assets/logos.jpg";

function Header() {
  return (
    <header className="app-header">
      <img src={logos}/>
    </header>
  )
}

export default Header;