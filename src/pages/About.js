import React from "react";
import MultipleHeels from "../assets/multipleheels.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultipleHeels})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Welcome to Classic Elegance, where timeless style meets modern comfort. Founded by Arshi, our brand is dedicated to creating stunning heels that empower women to step confidently into every moment. Each pair is thoughtfully designed, blending exquisite craftsmanship, premium materials, and sustainable practices. Whether it’s a glamorous evening or a casual day out, Classic Elegance ensures you walk with grace and sophistication in every step.


        </p>
      </div>
    </div>
  );
}

export default About;
