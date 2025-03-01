import React from "react";
import { image } from "../data/data";

function About() {
  console.log(image);
  return (
    <div id="about" style={{ textAlign: "center"}}>
      <h2 style= {{fontSize: "40px"}}>About Me</h2>
      <p>I like ice cream</p>
      <img src={image} alt="I made this"></img>
    </div>
  ); 
}

export default About;
