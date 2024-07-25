import React  from "react"
import Image from "./react-logo.jpeg";

 const Header = () => {
  return (
    <header>
        <nav className="nav">
         <img src={Image}  className="nav--icon" />
          <h3 className="nav--logo-text">ReactFacts</h3>
          <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    </header>
  )
}

export default Header
