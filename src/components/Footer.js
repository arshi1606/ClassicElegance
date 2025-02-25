import React from "react";
import { FaInstagramSquare as InstagramIcon } from "react-icons/fa";
import { FaTwitterSquare as TwitterIcon } from "react-icons/fa";
//import { FaFacebook as FacebookIcon} from "react-icons/fa";
//import { FaLinkedin  as  LinkedInIcon } from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <a 
          href="https://arshi1606.github.io/Portfolio/index.html" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ marginLeft: "5px", color: "white", textDecoration: "underline" }}
        >
           <InstagramIcon />
        </a>
        <a 
          href="https://arshi1606.github.io/Portfolio/index.html" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ marginLeft: "5px", color: "white", textDecoration: "underline" }}
        >
           <TwitterIcon />
        </a>
       
        
        
      </div>
      <p> &copy; 2025 
      <a 
          href="https://arshi1606.github.io/Portfolio/index.html" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ marginLeft: "5px", color: "white", textDecoration: "underline" }}
        >
          Arshi Patel
        </a></p>
    </div>
  );
}

export default Footer;
