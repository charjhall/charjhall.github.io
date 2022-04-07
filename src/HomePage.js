import React from "react";
import headshot from "./img/professional_headshot.png";
import "./css/HomePage.css";


export default function HomePage() {

  return (
    <div class="home-content">
      <div class="home-content-text">
        <h1>Hi, I'm Jackson Hall</h1>
        <h2>
          Producing software that provides meaningful value to the world 
        </h2>
      </div>
      <img src={headshot} alt="Headshot" class="center small" />
    </div>
  );
  
}
