import React, { useState } from "react";
import Logo from "../assets/companylogo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { TfiAlignJustify  as ReorderIcon} from "react-icons/tfi";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
     setOpenLinks(!openLinks)
  }
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks? "open" : "close"}>
        <img src={Logo} alt="logo" />
        <div className="hiddenLinks">
        <Link to="/"> Home </Link>
        <Link to="/shoes"> Shoes </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/shoes"> Shoes </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
         <button onClick={toggleNavbar}>
         <ReorderIcon/>
         </button>
      </div>
    </div>
  );
}

export default Navbar;
